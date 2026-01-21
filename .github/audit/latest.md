# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T00:53:12.462Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T00:53:02.550Z] ========================================
[2026-01-21T00:53:02.551Z] Discord Bot Execution Log
[2026-01-21T00:53:02.552Z] Environment: GitHub Actions
[2026-01-21T00:53:02.552Z] Node Version: v20.19.6
[2026-01-21T00:53:02.552Z] ========================================
[2026-01-21T00:53:02.552Z] Environment Variables Check:
[2026-01-21T00:53:02.552Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T00:53:02.552Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T00:53:02.552Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-21T00:53:02.552Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-21T00:53:02.552Z] 
Multi-Channel Configuration:
[2026-01-21T00:53:02.552Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.552Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.552Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-21T00:53:02.553Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-21T00:53:02.553Z] 
Data Files Check:
[2026-01-21T00:53:02.553Z] .github/data/new_jobs.json: ✅ Exists (1 items, 2311 bytes)
[2026-01-21T00:53:02.554Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4541 bytes)
[2026-01-21T00:53:02.554Z] 
========================================
[2026-01-21T00:53:02.554Z] Starting Enhanced Discord Bot...
[2026-01-21T00:53:02.554Z] ========================================
[2026-01-21T00:53:03.124Z] [BOT] ✅ Loaded V2 database: 7 jobs
[2026-01-21T00:53:03.902Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T00:53:03.902Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-21T00:53:03.902Z] [BOT] ✅ Guild found: Zapply
[2026-01-21T00:53:03.904Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T00:53:04.107Z] [BOT] ✅ Loaded 1102 channels from guild
[2026-01-21T00:53:04.107Z] [BOT] 🔍 Initializing channel auto-discovery...
[2026-01-21T00:53:04.385Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-21T00:53:04.385Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
[2026-01-21T00:53:04.385Z] [BOT] ✅ Found 24 remote-* channels
[2026-01-21T00:53:04.386Z] [BOT] ✅ All 23 required channels found
[2026-01-21T00:53:04.386Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 11
[2026-01-21T00:53:04.386Z] [BOT] 📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
[2026-01-21T00:53:04.387Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-21T00:53:04.462Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 6
[2026-01-21T00:53:04.463Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-21T00:53:04.463Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-21T00:53:04.463Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-21T00:53:04.464Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-21T00:53:04.464Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T00:53:04.466Z] [BOT] 📌 Posting 1 jobs to #remote-sales
[2026-01-21T00:53:04.466Z] [BOT] 📍 [ROUTING] "Account Executive" @ ORG_65a316ce Wolf Technologies
[2026-01-21T00:53:04.467Z] [BOT] Category: SALES (matched: "sales")
   Channel: remote-sales (1459...5435)
[2026-01-21T00:53:04.662Z] [BOT] ✅ Created forum post: 🏢 Account Executive @ ORG_65a316ce Wolf Technologies in #remote-sales
[2026-01-21T00:53:04.663Z] [BOT] ✅ Industry: Account Executive @ ORG_65a316ce Wolf Technologies
[2026-01-21T00:53:06.164Z] [BOT] 💾 Marked as posted: Account Executive @ ORG_65a316ce Wolf Technologies (instance #1)
[2026-01-21T00:53:06.164Z] [BOT] 💾 BEFORE ARCHIVING: 8 jobs in database
[2026-01-21T00:53:06.164Z] [BOT] ✅ No jobs to archive (all 8 jobs within 7-day window)
[2026-01-21T00:53:06.261Z] [BOT] 💾 Saved posted_jobs.json: 8 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:53:09.262Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-21T00:53:09.262Z] [BOT] ⏭️  Skipping duplicate: JID_f4f188a3 (posted within 7 days)
[2026-01-21T00:53:09.263Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-21T00:53:09.263Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-21T00:53:09.264Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T00:53:09.264Z] [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
[2026-01-21T00:53:09.264Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T00:53:09.264Z] [BOT] Total attempts: 1
   Successful: 1
   Failed: 0
   Skipped: 0
[2026-01-21T00:53:09.264Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T00:53:09.264Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
     1. #remote-sales: 1 posts
[2026-01-21T00:53:09.265Z] [BOT] [STATS] Channel stats saved
[2026-01-21T00:53:11.280Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*