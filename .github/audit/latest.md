# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T06:50:19.847Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-21T06:50:17.082Z] ========================================
[2026-01-21T06:50:17.084Z] Discord Bot Execution Log
[2026-01-21T06:50:17.084Z] Environment: GitHub Actions
[2026-01-21T06:50:17.084Z] Node Version: v20.19.6
[2026-01-21T06:50:17.084Z] ========================================
[2026-01-21T06:50:17.084Z] Environment Variables Check:
[2026-01-21T06:50:17.084Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T06:50:17.085Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T06:50:17.085Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-21T06:50:17.085Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-21T06:50:17.085Z] 
Multi-Channel Configuration:
[2026-01-21T06:50:17.085Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-21T06:50:17.085Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-21T06:50:17.086Z] 
Data Files Check:
[2026-01-21T06:50:17.086Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-21T06:50:17.086Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-21T06:50:17.086Z] 
========================================
[2026-01-21T06:50:17.086Z] Starting Enhanced Discord Bot...
[2026-01-21T06:50:17.086Z] ========================================
[2026-01-21T06:50:17.677Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-21T06:50:18.465Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T06:50:18.466Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-21T06:50:18.466Z] [BOT] ✅ Guild found: Zapply
[2026-01-21T06:50:18.467Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T06:50:18.742Z] [BOT] ✅ Loaded 1102 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-21T06:50:19.057Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-21T06:50:19.057Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
[2026-01-21T06:50:19.057Z] [BOT] ✅ Found 24 remote-* channels
[2026-01-21T06:50:19.058Z] [BOT] ✅ All 23 required channels found
[2026-01-21T06:50:19.058Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-21T06:50:19.058Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-21T06:50:19.069Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*