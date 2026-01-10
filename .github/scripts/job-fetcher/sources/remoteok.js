/**
 * RemoteOK API Job Fetcher
 *
 * Fetches remote jobs from RemoteOK.com public API
 *
 * API Details:
 * - Endpoint: https://remoteok.com/api
 * - Authentication: None required (public API)
 * - Rate Limit: Undocumented (use reasonable delays)
 * - Attribution: Required (dofollow backlinks)
 *
 * Data Quality:
 * - ~21K total jobs
 * - ~17K US-based jobs (80%+ US coverage)
 * - Filters: US locations, Entry/Mid-level roles
 */

const https = require('https');

/**
 * Fetches all remote jobs from RemoteOK API
 * @returns {Promise<Array>} Array of normalized job objects
 */
async function fetchRemoteOKJobs() {
  const apiUrl = 'https://remoteok.com/api';

  try {
    console.log('🌐 Fetching jobs from RemoteOK API...');

    const response = await httpsGet(apiUrl);
    const jobs = JSON.parse(response);

    // RemoteOK returns metadata object as first element - skip it
    const jobListings = jobs.slice(1);

    console.log(`✅ RemoteOK: Fetched ${jobListings.length} total jobs`);

    // Filter for US jobs only
    const usJobs = jobListings.filter(isUSJob);
    console.log(`✅ RemoteOK: ${usJobs.length} US jobs after location filtering`);

    // Filter for entry/mid-level (exclude senior/staff/principal)
    const entryMidJobs = usJobs.filter(isEntryOrMidLevel);
    console.log(`✅ RemoteOK: ${entryMidJobs.length} entry/mid-level jobs after experience filtering`);

    // Normalize to our job schema
    const normalizedJobs = entryMidJobs.map(normalizeRemoteOKJob);

    return normalizedJobs;

  } catch (error) {
    console.error('❌ RemoteOK fetch failed:', error.message);
    return []; // Return empty array on error (don't crash pipeline)
  }
}

/**
 * Filter for US-based jobs
 * RemoteOK doesn't have a US filter parameter, so we filter client-side
 */
function isUSJob(job) {
  const location = (job.location || '').toLowerCase();

  // Skip if no location specified
  if (!location || location === 'anywhere') {
    return false;
  }

  // US patterns (states, cities, "USA", "United States", etc.)
  const usPatterns = [
    // Country-level
    /\busa\b/, /\bunited states\b/, /\bus\b/,
    /\bremote us\b/, /\bus remote\b/, /\bus only\b/,

    // US state abbreviations (all 50 states)
    /\b(al|ak|az|ar|ca|co|ct|de|fl|ga|hi|id|il|in|ia|ks|ky|la|me|md|ma|mi|mn|ms|mo|mt|ne|nv|nh|nj|nm|ny|nc|nd|oh|ok|or|pa|ri|sc|sd|tn|tx|ut|vt|va|wa|wv|wi|wy)\b/,

    // Major US cities
    /\b(new york|san francisco|seattle|austin|chicago|boston|denver|portland|atlanta|dallas|houston|phoenix|philadelphia|san diego|san jose|los angeles)\b/,

    // Tech hubs
    /\bsilicon valley\b/, /\bbay area\b/, /\bpalo alto\b/, /\bmountain view\b/,
    /\bsunnyvale\b/, /\bcupertino\b/, /\bredmond\b/, /\bsanta clara\b/
  ];

  const isUS = usPatterns.some(pattern => pattern.test(location));

  // Exclude non-US locations explicitly
  const nonUSPatterns = [
    /\beurope\b/, /\basia\b/, /\bcanada\b/, /\buk\b/, /\bunited kingdom\b/,
    /\baustralia\b/, /\bindia\b/, /\bgermany\b/, /\bfrance\b/, /\bspain\b/,
    /\bnetherlands\b/, /\bportugal\b/, /\bbrazil\b/, /\bmexico\b/
  ];

  const isNonUS = nonUSPatterns.some(pattern => pattern.test(location));

  return isUS && !isNonUS;
}

/**
 * Filter for entry-level and mid-level positions
 * Excludes senior, staff, principal, lead, director, VP, C-level roles
 */
function isEntryOrMidLevel(job) {
  const title = (job.position || '').toLowerCase();
  const description = (job.description || '').toLowerCase();
  const tags = (job.tags || []).map(tag => tag.toLowerCase());

  // Senior role patterns (comprehensive list)
  const seniorPatterns = [
    // Experience levels
    /\bsenior\b/, /\bsr\b/, /\bstaff\b/, /\bprincipal\b/, /\blead\b/,

    // Management
    /\bmanager\b/, /\bhead of\b/, /\bdirector\b/, /\bvp\b/, /\bvice president\b/,

    // C-level
    /\bchief\b/, /\bceo\b/, /\bcto\b/, /\bcfo\b/, /\bcoo\b/, /\bcmo\b/,

    // Seniority indicators
    /\b\d+\+?\s*years?\s*(of)?\s*experience\b/, // "5+ years experience"
    /\barchitect\b/,  // Often senior-level
    /\bexpert\b/,     // Often senior-level
    /\bspecialist\b/  // Context-dependent, but often senior
  ];

  // Check title (most reliable)
  const hasSeniorTitle = seniorPatterns.some(pattern => pattern.test(title));

  // Check tags (secondary check)
  const hasSeniorTag = tags.some(tag => seniorPatterns.some(pattern => pattern.test(tag)));

  // Skip if senior indicators found
  return !hasSeniorTitle && !hasSeniorTag;
}

/**
 * Normalize RemoteOK job to our unified schema
 * Schema matches New-Grad-Jobs format for consistency
 */
function normalizeRemoteOKJob(job) {
  // Generate unique ID (company + title + location-based)
  const company = (job.company || 'unknown').toLowerCase().replace(/\s+/g, '-');
  const title = (job.position || 'unknown').toLowerCase().replace(/\s+/g, '-');
  const location = (job.location || 'remote').toLowerCase().replace(/\s+/g, '-');
  const uniqueId = `remoteok-${company}-${title}-${location}`.substring(0, 100);

  return {
    // Identifiers
    id: uniqueId,
    source: 'remoteok',
    source_url: 'remoteok.com',
    source_id: job.id || job.slug,

    // Job Info
    job_title: job.position,
    employer_name: job.company,
    job_apply_link: job.url || `https://remoteok.com/remote-jobs/${job.id}/${job.slug}`,
    job_description: job.description,
    job_employment_type: 'FULLTIME', // RemoteOK doesn't specify, assume full-time
    job_posted_at_datetime_utc: job.date ? new Date(job.date * 1000).toISOString() : new Date().toISOString(),

    // Location
    location: job.location || 'Remote',
    locations: [job.location || 'Remote'],
    job_country: 'USA',
    job_city: extractCity(job.location),
    job_state: extractState(job.location),

    // Compensation (when available)
    salary_min: job.salary_min || null,
    salary_max: job.salary_max || null,
    job_min_salary: job.salary_min || null,
    job_max_salary: job.salary_max || null,

    // Tags (RemoteOK provides rich tagging)
    tags: job.tags || [],

    // Remote-specific
    is_remote: true,
    job_is_remote: true,

    // Company info
    employer_logo: job.company_logo || null,

    // Metadata
    fetched_at: new Date().toISOString(),

    // RemoteOK attribution (required by their terms)
    attribution: {
      source: 'RemoteOK',
      url: 'https://remoteok.com',
      required: 'dofollow backlink'
    }
  };
}

/**
 * Extract city from location string
 * Examples: "San Francisco, CA" → "San Francisco"
 */
function extractCity(location) {
  if (!location) return null;

  // Common patterns: "City, State" or "City"
  const cityMatch = location.match(/^([^,]+)/);
  return cityMatch ? cityMatch[1].trim() : null;
}

/**
 * Extract state from location string
 * Examples: "San Francisco, CA" → "CA"
 */
function extractState(location) {
  if (!location) return null;

  // Common patterns: "City, State" or "City, State, USA"
  const stateMatch = location.match(/,\s*([A-Z]{2})(\s|,|$)/);
  return stateMatch ? stateMatch[1] : null;
}

/**
 * Helper function for HTTPS GET requests
 * @param {string} url - URL to fetch
 * @returns {Promise<string>} Response body
 */
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'RemoteJobs2026-Bot/1.0 (Job Aggregator; https://github.com/zapplyjobs/Remote-Jobs-2026)'
      }
    }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        }
      });

    }).on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = {
  fetchRemoteOKJobs
};
