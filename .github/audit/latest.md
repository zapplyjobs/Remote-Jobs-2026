# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T04:48:17.121Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T04:48:13.504Z] ========================================
[2026-01-23T04:48:13.506Z] Discord Bot Execution Log
[2026-01-23T04:48:13.506Z] Environment: GitHub Actions
[2026-01-23T04:48:13.506Z] Node Version: v20.20.0
[2026-01-23T04:48:13.506Z] ========================================
[2026-01-23T04:48:13.506Z] Environment Variables Check:
[2026-01-23T04:48:13.506Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T04:48:13.506Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T04:48:13.506Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T04:48:13.506Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T04:48:13.507Z] 
Multi-Channel Configuration:
[2026-01-23T04:48:13.507Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T04:48:13.507Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T04:48:13.507Z] 
Data Files Check:
[2026-01-23T04:48:13.508Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T04:48:13.508Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T04:48:13.508Z] 
========================================
[2026-01-23T04:48:13.508Z] Starting Enhanced Discord Bot...
[2026-01-23T04:48:13.508Z] ========================================
[2026-01-23T04:48:14.053Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T04:48:15.333Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T04:48:15.333Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-23T04:48:15.333Z] [BOT] ✅ Guild found: Zapply
[2026-01-23T04:48:15.335Z] [BOT ERROR] (node:2362) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T04:48:15.554Z] [BOT] ✅ Loaded 1101 channels from guild
[2026-01-23T04:48:15.554Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-23T04:48:16.002Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-23T04:48:16.002Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
[2026-01-23T04:48:16.002Z] [BOT] ✅ Found 24 remote-* channels
[2026-01-23T04:48:16.002Z] [BOT] ✅ All 23 required channels found
[2026-01-23T04:48:16.003Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 11
📍 Location channels: 12
[2026-01-23T04:48:16.003Z] [BOT] 📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-23T04:48:16.014Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2362) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*