/**
 * Discord Channel Configuration for Remote-Jobs-2026
 *
 * Channel name definitions only - IDs auto-discovered at runtime
 * No environment variables needed (except DISCORD_TOKEN and DISCORD_GUILD_ID)
 */

// Functional channels (role/domain-based routing)
const FUNCTIONAL_CHANNELS = [
  'remote-tech',              // Software engineering, DevOps, QA
  'remote-ai',                // ML, AI, Data Science
  'remote-data-science',      // Data analysts, scientists
  'remote-sales',             // Sales roles
  'remote-marketing',         // Marketing positions
  'remote-finance',           // Finance, accounting
  'remote-healthcare',        // Healthcare tech
  'remote-product',           // Product management
  'remote-supply-chain',      // Supply chain roles
  'remote-project-management', // PM roles
  'remote-hr'                 // HR positions
];

// Location-specific channels (city/region-based routing)
const LOCATION_CHANNELS = [
  'remote-usa',           // General US remote
  'remote-new-york',      // NY-based remote
  'remote-austin',        // Austin-based remote
  'remote-chicago',       // Chicago-based remote
  'remote-seattle',       // Seattle-based remote
  'remote-redmond',       // Redmond-based remote
  'remote-mountain-view', // Mountain View-based remote
  'remote-san-francisco', // SF-based remote
  'remote-sunnyvale',     // Sunnyvale-based remote
  'remote-san-bruno',     // San Bruno-based remote
  'remote-boston',        // Boston-based remote
  'remote-los-angeles'    // LA-based remote
];

// All required channels (for validation)
const ALL_REQUIRED_CHANNELS = [
  ...FUNCTIONAL_CHANNELS,
  ...LOCATION_CHANNELS
];

module.exports = {
  FUNCTIONAL_CHANNELS,
  LOCATION_CHANNELS,
  ALL_REQUIRED_CHANNELS
};
