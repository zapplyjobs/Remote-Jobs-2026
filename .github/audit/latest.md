# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T21:09:35.438Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-10T21:09:33.470Z] ========================================
[2026-01-10T21:09:33.472Z] Discord Bot Execution Log
[2026-01-10T21:09:33.472Z] Environment: GitHub Actions
[2026-01-10T21:09:33.472Z] Node Version: v20.19.6
[2026-01-10T21:09:33.472Z] ========================================
[2026-01-10T21:09:33.472Z] Environment Variables Check:
[2026-01-10T21:09:33.472Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T21:09:33.472Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T21:09:33.473Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-10T21:09:33.473Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-10T21:09:33.473Z] 
Multi-Channel Configuration:
[2026-01-10T21:09:33.473Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:09:33.473Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-10T21:09:33.474Z] 
Data Files Check:
[2026-01-10T21:09:33.474Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-10T21:09:33.475Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 245956 bytes)
[2026-01-10T21:09:33.475Z] 
========================================
[2026-01-10T21:09:33.476Z] Starting Enhanced Discord Bot...
[2026-01-10T21:09:33.476Z] ========================================
[2026-01-10T21:09:34.060Z] [BOT] ✅ Loaded V2 database: 482 jobs
[2026-01-10T21:09:34.447Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T21:09:34.448Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
✅ Guild found: Zapply.jobs
[2026-01-10T21:09:34.449Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T21:09:34.653Z] [BOT] ✅ Loaded 614 channels from guild
[2026-01-10T21:09:34.653Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-10T21:09:34.861Z] [BOT] 🔍 Discovered 140 channels in guild "Zapply.jobs"
[2026-01-10T21:09:34.861Z] [BOT] ✅ Cached 96 channels (79 forum, 33 text)
[2026-01-10T21:09:34.861Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-10T21:09:34.862Z] [BOT] ✅ All 23 required channels found
[2026-01-10T21:09:34.862Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 11
📍 Location channels: 12
[2026-01-10T21:09:34.862Z] [BOT] 📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-10T21:09:34.871Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*