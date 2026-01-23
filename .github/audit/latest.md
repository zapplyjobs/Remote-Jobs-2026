# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T21:37:43.138Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T21:37:40.283Z] ========================================
[2026-01-23T21:37:40.285Z] Discord Bot Execution Log
[2026-01-23T21:37:40.285Z] Environment: GitHub Actions
[2026-01-23T21:37:40.285Z] Node Version: v20.20.0
[2026-01-23T21:37:40.285Z] ========================================
[2026-01-23T21:37:40.285Z] Environment Variables Check:
[2026-01-23T21:37:40.285Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T21:37:40.285Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T21:37:40.285Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T21:37:40.285Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T21:37:40.285Z] 
Multi-Channel Configuration:
[2026-01-23T21:37:40.285Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T21:37:40.286Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T21:37:40.286Z] 
Data Files Check:
[2026-01-23T21:37:40.287Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T21:37:40.287Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T21:37:40.287Z] 
========================================
[2026-01-23T21:37:40.287Z] Starting Enhanced Discord Bot...
[2026-01-23T21:37:40.287Z] ========================================
[2026-01-23T21:37:40.844Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T21:37:41.432Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T21:37:41.433Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-23T21:37:41.433Z] [BOT] ✅ Guild found: Zapply
[2026-01-23T21:37:41.434Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T21:37:41.723Z] [BOT] ✅ Loaded 1100 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-23T21:37:41.998Z] [BOT] 🔍 Discovered 134 channels in guild "Zapply"
[2026-01-23T21:37:41.998Z] [BOT] ✅ Cached 104 channels (73 forum, 47 text)
[2026-01-23T21:37:41.999Z] [BOT] ✅ Found 20 remote-* channels
[2026-01-23T21:37:41.999Z] [BOT] ✅ All 2 required channels found
[2026-01-23T21:37:41.999Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 1
📍 Location channels: 1
📍 Fallback channel ID: CH_f5bf382c
[2026-01-23T21:37:41.999Z] [BOT] ℹ️ No new jobs to post
[2026-01-23T21:37:42.010Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*