# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T16:40:14.400Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-18T16:40:11.619Z] ========================================
[2026-01-18T16:40:11.621Z] Discord Bot Execution Log
[2026-01-18T16:40:11.621Z] Environment: GitHub Actions
[2026-01-18T16:40:11.621Z] Node Version: v20.19.6
[2026-01-18T16:40:11.621Z] ========================================
[2026-01-18T16:40:11.621Z] Environment Variables Check:
[2026-01-18T16:40:11.621Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T16:40:11.621Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T16:40:11.621Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-18T16:40:11.621Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-18T16:40:11.622Z] 
Multi-Channel Configuration:
[2026-01-18T16:40:11.622Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-18T16:40:11.622Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-18T16:40:11.622Z] 
Data Files Check:
[2026-01-18T16:40:11.623Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-18T16:40:11.623Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3847 bytes)
[2026-01-18T16:40:11.623Z] 
========================================
[2026-01-18T16:40:11.623Z] Starting Enhanced Discord Bot...
[2026-01-18T16:40:11.623Z] ========================================
[2026-01-18T16:40:12.188Z] [BOT] ✅ Loaded V2 database: 6 jobs
[2026-01-18T16:40:12.928Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T16:40:12.929Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-18T16:40:12.929Z] [BOT] ✅ Guild found: Zapply
[2026-01-18T16:40:12.930Z] [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T16:40:13.217Z] [BOT] ✅ Loaded 1120 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-18T16:40:13.619Z] [BOT] 🔍 Discovered 120 channels in guild "Zapply"
[2026-01-18T16:40:13.619Z] [BOT] ✅ Cached 88 channels (79 forum, 25 text)
[2026-01-18T16:40:13.620Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-18T16:40:13.620Z] [BOT] ✅ All 23 required channels found
[2026-01-18T16:40:13.620Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-18T16:40:13.620Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-18T16:40:13.630Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*