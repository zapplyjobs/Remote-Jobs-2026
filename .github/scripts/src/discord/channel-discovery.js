/**
 * Discord Channel Auto-Discovery
 *
 * Eliminates need for manual channel ID management by discovering
 * channels by name at runtime via Discord API.
 *
 * Benefits:
 * - Zero manual channel ID copying (no GitHub Secrets needed)
 * - Error-proof (no typos)
 * - Self-validating (fails fast if channels missing)
 * - Scalable (add channels by just creating them in Discord)
 */

const { ChannelType } = require('discord.js');

class ChannelDiscovery {
  constructor(client, guildId) {
    this.client = client;
    this.guildId = guildId;
    this.channelCache = new Map();
  }

  /**
   * Discovers all channels in the guild and caches by name
   * @returns {Promise<Map>} Map of channel names to IDs
   */
  async discoverChannels() {
    try {
      const guild = await this.client.guilds.fetch(this.guildId);
      const channels = await guild.channels.fetch();

      console.log(`🔍 Discovered ${channels.size} channels in guild "${guild.name}"`);

      let forumCount = 0;
      let textCount = 0;

      channels.forEach(channel => {
        // Only cache text and forum channels (where we post jobs)
        if (channel.type === ChannelType.GuildForum) {
          this.channelCache.set(channel.name, channel.id);
          forumCount++;
        } else if (channel.type === ChannelType.GuildText) {
          this.channelCache.set(channel.name, channel.id);
          textCount++;
        }
      });

      console.log(`✅ Cached ${this.channelCache.size} channels (${forumCount} forum, ${textCount} text)`);

      // Log discovered remote-* channels
      const remoteChannels = this.getRemoteChannels();
      console.log(`✅ Found ${Object.keys(remoteChannels).length} remote-* channels`);

      return this.channelCache;

    } catch (error) {
      console.error('❌ Channel discovery failed:', error.message);
      throw error;
    }
  }

  /**
   * Get channel ID by name
   * @param {string} channelName - Channel name (with or without # prefix)
   * @returns {string|null} Channel ID or null if not found
   */
  getChannelId(channelName) {
    // Remove # prefix if present
    const cleanName = channelName.startsWith('#') ? channelName.slice(1) : channelName;

    if (this.channelCache.has(cleanName)) {
      return this.channelCache.get(cleanName);
    }

    console.warn(`⚠️ Channel not found: ${channelName}`);
    return null;
  }

  /**
   * Get all remote-* channel IDs (for Remote-Jobs-2026)
   * @returns {Object} Map of channel names to IDs
   */
  getRemoteChannels() {
    const remoteChannels = {};

    this.channelCache.forEach((id, name) => {
      if (name.startsWith('remote-')) {
        remoteChannels[name] = id;
      }
    });

    return remoteChannels;
  }

  /**
   * Get channel IDs for multiple channel names
   * @param {string[]} channelNames - Array of channel names
   * @returns {Object} Map of channel names to IDs
   */
  getChannelIds(channelNames) {
    const channelIds = {};

    channelNames.forEach(name => {
      const id = this.getChannelId(name);
      if (id) {
        channelIds[name] = id;
      }
    });

    return channelIds;
  }

  /**
   * Validate all required channels exist
   * @param {string[]} requiredNames - Array of required channel names
   * @returns {boolean} True if all channels exist
   */
  validateRequiredChannels(requiredNames) {
    const missing = [];

    requiredNames.forEach(name => {
      if (!this.getChannelId(name)) {
        missing.push(name);
      }
    });

    if (missing.length > 0) {
      console.error('❌ Missing required channels:', missing);
      console.error('📝 Please create these channels in Discord before running the bot');
      return false;
    }

    console.log(`✅ All ${requiredNames.length} required channels found`);
    return true;
  }

  /**
   * List all cached channels (for debugging)
   */
  listChannels() {
    console.log('\n📋 Cached Channels:');
    this.channelCache.forEach((id, name) => {
      console.log(`  - ${name}: ${id}`);
    });
    console.log('');
  }
}

module.exports = ChannelDiscovery;
