# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T09:30:34.984Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-19T09:30:31.985Z] ========================================
[2026-01-19T09:30:31.987Z] Discord Bot Execution Log
[2026-01-19T09:30:31.987Z] Environment: GitHub Actions
[2026-01-19T09:30:31.987Z] Node Version: v20.19.6
[2026-01-19T09:30:31.987Z] ========================================
[2026-01-19T09:30:31.987Z] Environment Variables Check:
[2026-01-19T09:30:31.987Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T09:30:31.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T09:30:31.987Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-19T09:30:31.988Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-19T09:30:31.988Z] 
Multi-Channel Configuration:
[2026-01-19T09:30:31.988Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-19T09:30:31.988Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-19T09:30:31.988Z] 
Data Files Check:
[2026-01-19T09:30:31.989Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-19T09:30:31.989Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3847 bytes)
[2026-01-19T09:30:31.989Z] 
========================================
[2026-01-19T09:30:31.989Z] Starting Enhanced Discord Bot...
[2026-01-19T09:30:31.989Z] ========================================
[2026-01-19T09:30:32.493Z] [BOT] ✅ Loaded V2 database: 6 jobs
[2026-01-19T09:30:33.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T09:30:33.373Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-19T09:30:33.373Z] [BOT] ✅ Guild found: Zapply
[2026-01-19T09:30:33.374Z] [BOT ERROR] (node:2370) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T09:30:33.636Z] [BOT] ✅ Loaded 1120 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-19T09:30:33.969Z] [BOT] 🔍 Discovered 120 channels in guild "Zapply"
[2026-01-19T09:30:33.969Z] [BOT] ✅ Cached 88 channels (79 forum, 25 text)
[2026-01-19T09:30:33.969Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-19T09:30:33.970Z] [BOT] ✅ All 23 required channels found
[2026-01-19T09:30:33.970Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-19T09:30:33.970Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-19T09:30:33.978Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2370) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*