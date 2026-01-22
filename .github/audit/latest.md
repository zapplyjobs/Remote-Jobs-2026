# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T15:27:24.451Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-22T15:27:21.166Z] ========================================
[2026-01-22T15:27:21.168Z] Discord Bot Execution Log
[2026-01-22T15:27:21.168Z] Environment: GitHub Actions
[2026-01-22T15:27:21.168Z] Node Version: v20.19.6
[2026-01-22T15:27:21.168Z] ========================================
[2026-01-22T15:27:21.168Z] Environment Variables Check:
[2026-01-22T15:27:21.168Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T15:27:21.168Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T15:27:21.168Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-22T15:27:21.169Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-22T15:27:21.169Z] 
Multi-Channel Configuration:
[2026-01-22T15:27:21.169Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-22T15:27:21.169Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-22T15:27:21.169Z] 
Data Files Check:
[2026-01-22T15:27:21.170Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-22T15:27:21.170Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-22T15:27:21.170Z] 
========================================
[2026-01-22T15:27:21.170Z] Starting Enhanced Discord Bot...
[2026-01-22T15:27:21.170Z] ========================================
[2026-01-22T15:27:21.743Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-22T15:27:22.525Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T15:27:22.526Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-22T15:27:22.526Z] [BOT] ✅ Guild found: Zapply
[2026-01-22T15:27:22.527Z] [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T15:27:22.839Z] [BOT] ✅ Loaded 1100 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-22T15:27:23.180Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-22T15:27:23.180Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
✅ Found 24 remote-* channels
[2026-01-22T15:27:23.181Z] [BOT] ✅ All 23 required channels found
[2026-01-22T15:27:23.181Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-22T15:27:23.181Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-22T15:27:23.191Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*