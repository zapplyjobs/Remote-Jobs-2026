# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T18:53:47.145Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-18T18:53:43.924Z] ========================================
[2026-01-18T18:53:43.926Z] Discord Bot Execution Log
[2026-01-18T18:53:43.926Z] Environment: GitHub Actions
[2026-01-18T18:53:43.927Z] Node Version: v20.19.6
[2026-01-18T18:53:43.927Z] ========================================
[2026-01-18T18:53:43.927Z] Environment Variables Check:
[2026-01-18T18:53:43.927Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T18:53:43.927Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T18:53:43.927Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-18T18:53:43.927Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-18T18:53:43.927Z] 
Multi-Channel Configuration:
[2026-01-18T18:53:43.927Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.927Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-18T18:53:43.928Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-18T18:53:43.928Z] 
Data Files Check:
[2026-01-18T18:53:43.928Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-18T18:53:43.929Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3847 bytes)
[2026-01-18T18:53:43.929Z] 
========================================
[2026-01-18T18:53:43.929Z] Starting Enhanced Discord Bot...
[2026-01-18T18:53:43.929Z] ========================================
[2026-01-18T18:53:44.498Z] [BOT] ✅ Loaded V2 database: 6 jobs
[2026-01-18T18:53:45.310Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T18:53:45.311Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-18T18:53:45.311Z] [BOT] ✅ Guild found: Zapply
[2026-01-18T18:53:45.312Z] [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T18:53:45.566Z] [BOT] ✅ Loaded 1120 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-18T18:53:46.012Z] [BOT] 🔍 Discovered 120 channels in guild "Zapply"
[2026-01-18T18:53:46.012Z] [BOT] ✅ Cached 88 channels (79 forum, 25 text)
[2026-01-18T18:53:46.012Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-18T18:53:46.013Z] [BOT] ✅ All 23 required channels found
[2026-01-18T18:53:46.013Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-18T18:53:46.013Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-18T18:53:46.024Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*