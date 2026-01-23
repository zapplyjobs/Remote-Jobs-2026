# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T03:22:26.907Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T03:22:23.847Z] ========================================
[2026-01-23T03:22:23.849Z] Discord Bot Execution Log
[2026-01-23T03:22:23.849Z] Environment: GitHub Actions
[2026-01-23T03:22:23.849Z] Node Version: v20.20.0
[2026-01-23T03:22:23.849Z] ========================================
[2026-01-23T03:22:23.849Z] Environment Variables Check:
[2026-01-23T03:22:23.850Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T03:22:23.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T03:22:23.850Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T03:22:23.850Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T03:22:23.850Z] 
Multi-Channel Configuration:
[2026-01-23T03:22:23.850Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.850Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.850Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.850Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.850Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.850Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.851Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.851Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.851Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T03:22:23.851Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T03:22:23.851Z] 
Data Files Check:
[2026-01-23T03:22:23.851Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T03:22:23.851Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T03:22:23.852Z] 
========================================
[2026-01-23T03:22:23.852Z] Starting Enhanced Discord Bot...
[2026-01-23T03:22:23.852Z] ========================================
[2026-01-23T03:22:24.398Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T03:22:25.172Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T03:22:25.172Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-23T03:22:25.172Z] [BOT] ✅ Guild found: Zapply
[2026-01-23T03:22:25.174Z] [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T03:22:25.463Z] [BOT] ✅ Loaded 1099 channels from guild
[2026-01-23T03:22:25.463Z] [BOT] 🔍 Initializing channel auto-discovery...
```
## Errors Detected
- [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*