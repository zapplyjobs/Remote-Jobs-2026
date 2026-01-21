# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T11:12:19.157Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-21T11:12:16.064Z] ========================================
[2026-01-21T11:12:16.066Z] Discord Bot Execution Log
[2026-01-21T11:12:16.066Z] Environment: GitHub Actions
[2026-01-21T11:12:16.066Z] Node Version: v20.19.6
[2026-01-21T11:12:16.066Z] ========================================
[2026-01-21T11:12:16.066Z] Environment Variables Check:
[2026-01-21T11:12:16.066Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T11:12:16.066Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T11:12:16.066Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-21T11:12:16.066Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-21T11:12:16.066Z] 
Multi-Channel Configuration:
[2026-01-21T11:12:16.067Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-21T11:12:16.067Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-21T11:12:16.067Z] 
Data Files Check:
[2026-01-21T11:12:16.068Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-21T11:12:16.068Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-21T11:12:16.068Z] 
========================================
[2026-01-21T11:12:16.068Z] Starting Enhanced Discord Bot...
[2026-01-21T11:12:16.068Z] ========================================
[2026-01-21T11:12:16.622Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-21T11:12:17.456Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T11:12:17.457Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-21T11:12:17.457Z] [BOT] ✅ Guild found: Zapply
[2026-01-21T11:12:17.458Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T11:12:17.829Z] [BOT] ✅ Loaded 1101 channels from guild
[2026-01-21T11:12:17.829Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-21T11:12:18.196Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-21T11:12:18.196Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
[2026-01-21T11:12:18.196Z] [BOT] ✅ Found 24 remote-* channels
[2026-01-21T11:12:18.196Z] [BOT] ✅ All 23 required channels found
[2026-01-21T11:12:18.197Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
[2026-01-21T11:12:18.197Z] [BOT] ℹ️ No new jobs to post
[2026-01-21T11:12:18.207Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*