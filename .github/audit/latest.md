# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T15:49:01.899Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-18T15:48:59.655Z] ========================================
[2026-01-18T15:48:59.658Z] Discord Bot Execution Log
[2026-01-18T15:48:59.658Z] Environment: GitHub Actions
[2026-01-18T15:48:59.658Z] Node Version: v20.19.6
[2026-01-18T15:48:59.658Z] ========================================
[2026-01-18T15:48:59.658Z] Environment Variables Check:
[2026-01-18T15:48:59.658Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T15:48:59.658Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T15:48:59.659Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-18T15:48:59.659Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-18T15:48:59.659Z] 
Multi-Channel Configuration:
[2026-01-18T15:48:59.659Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.659Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.660Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.660Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-18T15:48:59.660Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-18T15:48:59.660Z] 
Data Files Check:
[2026-01-18T15:48:59.660Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-18T15:48:59.661Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3847 bytes)
[2026-01-18T15:48:59.661Z] 
========================================
[2026-01-18T15:48:59.661Z] Starting Enhanced Discord Bot...
[2026-01-18T15:48:59.661Z] ========================================
[2026-01-18T15:49:00.252Z] [BOT] ✅ Loaded V2 database: 6 jobs
[2026-01-18T15:49:00.871Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T15:49:00.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-18T15:49:00.871Z] [BOT] ✅ Guild found: Zapply
[2026-01-18T15:49:00.872Z] [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T15:49:01.074Z] [BOT] ✅ Loaded 1120 channels from guild
🔍 Initializing channel auto-discovery...
```
## Errors Detected
- [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*