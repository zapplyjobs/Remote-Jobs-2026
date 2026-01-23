# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T19:09:40.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-23T19:09:37.405Z] ========================================
[2026-01-23T19:09:37.407Z] Discord Bot Execution Log
[2026-01-23T19:09:37.407Z] Environment: GitHub Actions
[2026-01-23T19:09:37.407Z] Node Version: v20.20.0
[2026-01-23T19:09:37.407Z] ========================================
[2026-01-23T19:09:37.407Z] Environment Variables Check:
[2026-01-23T19:09:37.407Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T19:09:37.407Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T19:09:37.407Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-23T19:09:37.407Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-23T19:09:37.407Z] 
Multi-Channel Configuration:
[2026-01-23T19:09:37.408Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-23T19:09:37.408Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-23T19:09:37.408Z] 
Data Files Check:
[2026-01-23T19:09:37.409Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2026-01-23T19:09:37.409Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-23T19:09:37.409Z] 
========================================
[2026-01-23T19:09:37.409Z] Starting Enhanced Discord Bot...
[2026-01-23T19:09:37.409Z] ========================================
[2026-01-23T19:09:37.957Z] [BOT] ✅ Loaded V2 database: 8 jobs
[2026-01-23T19:09:38.587Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T19:09:38.588Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-23T19:09:38.588Z] [BOT] ✅ Guild found: Zapply
[2026-01-23T19:09:38.589Z] [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T19:09:38.859Z] [BOT] ✅ Loaded 1100 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-23T19:09:39.227Z] [BOT] 🔍 Discovered 134 channels in guild "Zapply"
[2026-01-23T19:09:39.228Z] [BOT] ✅ Cached 104 channels (73 forum, 47 text)
✅ Found 20 remote-* channels
[2026-01-23T19:09:39.228Z] [BOT] ✅ All 2 required channels found
[2026-01-23T19:09:39.228Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-23T19:09:39.228Z] [BOT] 📍 Functional channels: 1
📍 Location channels: 1
📍 Fallback channel ID: CH_f5bf382c
ℹ️ No new jobs to post
[2026-01-23T19:09:39.238Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*