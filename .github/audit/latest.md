# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T06:26:17.662Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-24T06:26:14.727Z] ========================================
[2026-01-24T06:26:14.729Z] Discord Bot Execution Log
[2026-01-24T06:26:14.729Z] Environment: GitHub Actions
[2026-01-24T06:26:14.729Z] Node Version: v20.20.0
[2026-01-24T06:26:14.729Z] ========================================
[2026-01-24T06:26:14.729Z] Environment Variables Check:
[2026-01-24T06:26:14.729Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T06:26:14.729Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T06:26:14.729Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-24T06:26:14.730Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-24T06:26:14.730Z] 
Multi-Channel Configuration:
[2026-01-24T06:26:14.730Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-24T06:26:14.730Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-24T06:26:14.731Z] 
Data Files Check:
[2026-01-24T06:26:14.731Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-24T06:26:14.731Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-24T06:26:14.731Z] 
========================================
[2026-01-24T06:26:14.731Z] Starting Enhanced Discord Bot...
[2026-01-24T06:26:14.731Z] ========================================
[2026-01-24T06:26:15.290Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-24T06:26:16.108Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T06:26:16.108Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-24T06:26:16.108Z] [BOT] ✅ Guild found: Zapply
[2026-01-24T06:26:16.109Z] [BOT ERROR] (node:2389) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T06:26:16.292Z] [BOT] ✅ Loaded 61 channels from guild
[2026-01-24T06:26:16.292Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-24T06:26:16.538Z] [BOT] 🔍 Discovered 61 channels in guild "Zapply"
[2026-01-24T06:26:16.538Z] [BOT] ✅ Cached 47 channels (0 forum, 47 text)
[2026-01-24T06:26:16.538Z] [BOT] ✅ Found 3 remote-* channels
[2026-01-24T06:26:16.538Z] [BOT] ✅ All 2 required channels found
[2026-01-24T06:26:16.539Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 1
📍 Location channels: 1
📍 Fallback channel ID: CH_f5bf382c
[2026-01-24T06:26:16.539Z] [BOT] ℹ️ No new jobs to post
[2026-01-24T06:26:16.550Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2389) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*