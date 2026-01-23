# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T19:49:34.072Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T19:49:31.088Z] ========================================
[2026-01-23T19:49:31.090Z] Discord Bot Execution Log
[2026-01-23T19:49:31.090Z] Environment: GitHub Actions
[2026-01-23T19:49:31.090Z] Node Version: v20.20.0
[2026-01-23T19:49:31.090Z] ========================================
[2026-01-23T19:49:31.090Z] Environment Variables Check:
[2026-01-23T19:49:31.090Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T19:49:31.090Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T19:49:31.090Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T19:49:31.090Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T19:49:31.091Z] 
Multi-Channel Configuration:
[2026-01-23T19:49:31.091Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:49:31.091Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T19:49:31.091Z] 
Data Files Check:
[2026-01-23T19:49:31.092Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T19:49:31.092Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T19:49:31.092Z] 
========================================
[2026-01-23T19:49:31.092Z] Starting Enhanced Discord Bot...
[2026-01-23T19:49:31.092Z] ========================================
[2026-01-23T19:49:31.663Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T19:49:32.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T19:49:32.463Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
✅ Guild found: Zapply
[2026-01-23T19:49:32.464Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T19:49:32.721Z] [BOT] ✅ Loaded 1100 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-23T19:49:33.046Z] [BOT] 🔍 Discovered 134 channels in guild "Zapply"
[2026-01-23T19:49:33.047Z] [BOT] ✅ Cached 104 channels (73 forum, 47 text)
✅ Found 20 remote-* channels
[2026-01-23T19:49:33.047Z] [BOT] ✅ All 2 required channels found
[2026-01-23T19:49:33.047Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-23T19:49:33.047Z] [BOT] 📍 Functional channels: 1
📍 Location channels: 1
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-23T19:49:33.059Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*