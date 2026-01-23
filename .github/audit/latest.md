# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T06:26:34.242Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T06:26:31.973Z] ========================================
[2026-01-23T06:26:31.977Z] Discord Bot Execution Log
[2026-01-23T06:26:31.977Z] Environment: GitHub Actions
[2026-01-23T06:26:31.977Z] Node Version: v20.20.0
[2026-01-23T06:26:31.977Z] ========================================
[2026-01-23T06:26:31.977Z] Environment Variables Check:
[2026-01-23T06:26:31.977Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T06:26:31.977Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T06:26:31.977Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T06:26:31.977Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T06:26:31.978Z] 
Multi-Channel Configuration:
[2026-01-23T06:26:31.978Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T06:26:31.978Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T06:26:31.978Z] 
Data Files Check:
[2026-01-23T06:26:31.979Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T06:26:31.979Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T06:26:31.979Z] 
========================================
[2026-01-23T06:26:31.979Z] Starting Enhanced Discord Bot...
[2026-01-23T06:26:31.979Z] ========================================
[2026-01-23T06:26:32.589Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T06:26:33.118Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T06:26:33.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-23T06:26:33.119Z] [BOT] ✅ Guild found: Zapply
[2026-01-23T06:26:33.120Z] [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T06:26:33.283Z] [BOT] ✅ Loaded 1095 channels from guild
[2026-01-23T06:26:33.283Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-23T06:26:33.532Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-23T06:26:33.533Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
✅ Found 24 remote-* channels
[2026-01-23T06:26:33.533Z] [BOT] ✅ All 23 required channels found
[2026-01-23T06:26:33.533Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-23T06:26:33.534Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-23T06:26:33.545Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*