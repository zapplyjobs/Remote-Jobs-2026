/**
 * Discord Channel Configuration - Remote-Jobs-2026
 *
 * UPDATED 2026-01-23: Migrated to board types system
 * - Uses src/board-types.js for portable configuration
 * - Board type: REMOTE (auto-discovery mode)
 * - Channel type: TEXT channels (auto-discovered)
 * - No environment variables needed (except DISCORD_TOKEN and DISCORD_GUILD_ID)
 */

const { BOARD_TYPES, getBoardConfig } = require('../board-types');

// Use the REMOTE board type template (auto-discovery mode)
const remoteBoard = getBoardConfig(BOARD_TYPES.REMOTE);

// Extract channel names from the board type
const FUNCTIONAL_CHANNELS = remoteBoard.industryChannels.map(ch => ch.channelName);
const LOCATION_CHANNELS = remoteBoard.locationChannels.map(ch => ch.channelName);

// All required channels (for validation)
const ALL_REQUIRED_CHANNELS = [
  ...FUNCTIONAL_CHANNELS,
  ...LOCATION_CHANNELS
];

// Mode flags
const MULTI_CHANNEL_MODE = true;  // ENABLED: Route jobs to role-based channels
const LOCATION_MODE_ENABLED = true;  // ENABLED: Route jobs to location channels

module.exports = {
  FUNCTIONAL_CHANNELS,
  LOCATION_CHANNELS,
  ALL_REQUIRED_CHANNELS,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
