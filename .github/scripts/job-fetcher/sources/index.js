/**
 * Job Sources - Unified Interface
 *
 * Fetches jobs from RemoteOK remote job board.
 *
 * Note: ATS imports (Greenhouse, Lever, Ashby) removed as they're disabled
 * for Remote-Jobs-2026 repo. This repo only uses RemoteOK API.
 */

const { fetchRemoteOKJobs } = require('./remoteok');

/**
 * Fetch jobs from RemoteOK
 * @param {Object} options - Configuration options (ignored, kept for compatibility)
 * @returns {Promise<Object>} Object with jobs array and stats
 */
async function fetchAllATSJobs(options = {}) {
    console.log('\n' + '═'.repeat(50));
    console.log('📡 Job Fetcher - Starting RemoteOK collection');
    console.log('═'.repeat(50));

    console.log('\n📡 Fetching from RemoteOK...');
    const remoteOKJobs = await fetchRemoteOKJobs();

    const stats = {
        remoteok: { jobs: remoteOKJobs.length },
        total: { jobs: remoteOKJobs.length }
    };

    console.log('\n' + '─'.repeat(50));
    console.log('📊 Job Fetcher Summary:');
    console.log(`   RemoteOK: ${stats.remoteok.jobs} jobs`);
    console.log(`   ─────────────────────────`);
    console.log(`   TOTAL: ${stats.total.jobs} jobs`);
    console.log('═'.repeat(50) + '\n');

    return {
        jobs: remoteOKJobs,
        stats
    };
}

module.exports = {
    fetchAllATSJobs,
    fetchRemoteOKJobs
};
