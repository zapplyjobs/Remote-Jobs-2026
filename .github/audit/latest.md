# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T19:30:15.989Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T19:30:06.321Z] ========================================
[2026-01-20T19:30:06.323Z] Discord Bot Execution Log
[2026-01-20T19:30:06.323Z] Environment: GitHub Actions
[2026-01-20T19:30:06.323Z] Node Version: v20.19.6
[2026-01-20T19:30:06.323Z] ========================================
[2026-01-20T19:30:06.323Z] Environment Variables Check:
[2026-01-20T19:30:06.323Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T19:30:06.323Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T19:30:06.323Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-20T19:30:06.323Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-20T19:30:06.323Z] 
Multi-Channel Configuration:
[2026-01-20T19:30:06.323Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.323Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-20T19:30:06.324Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-20T19:30:06.324Z] 
Data Files Check:
[2026-01-20T19:30:06.324Z] .github/data/new_jobs.json: ✅ Exists (1 items, 2349 bytes)
[2026-01-20T19:30:06.325Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3847 bytes)
[2026-01-20T19:30:06.325Z] 
========================================
[2026-01-20T19:30:06.325Z] Starting Enhanced Discord Bot...
[2026-01-20T19:30:06.325Z] ========================================
[2026-01-20T19:30:06.985Z] [BOT] ✅ Loaded V2 database: 6 jobs
[2026-01-20T19:30:07.911Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T19:30:07.911Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-20T19:30:07.912Z] [BOT] ✅ Guild found: Zapply
[2026-01-20T19:30:07.913Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T19:30:08.102Z] [BOT] ✅ Loaded 1122 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-20T19:30:08.379Z] [BOT] 🔍 Discovered 129 channels in guild "Zapply"
[2026-01-20T19:30:08.379Z] [BOT] ✅ Cached 97 channels (79 forum, 34 text)
[2026-01-20T19:30:08.379Z] [BOT] ✅ Found 24 remote-* channels
[2026-01-20T19:30:08.379Z] [BOT] ✅ All 23 required channels found
[2026-01-20T19:30:08.380Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-20T19:30:08.380Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
[2026-01-20T19:30:08.380Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-20T19:30:08.456Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 5
[2026-01-20T19:30:08.457Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-20T19:30:08.458Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-20T19:30:08.458Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-20T19:30:08.458Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-20T19:30:08.458Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T19:30:08.461Z] [BOT] 📌 Posting 1 jobs to #remote-tech
[2026-01-20T19:30:08.462Z] [BOT] 📍 [ROUTING] "Work From Home Hotel Reservations Customer Service" @ ORG_e6388e03ination Knot
[2026-01-20T19:30:08.462Z] [BOT] Category: TECH (default)
   Channel: remote-tech (1459...5491)
[2026-01-20T19:30:08.693Z] [BOT] ✅ Created forum post: 🏢 Work From Home Hotel Reservations Customer Service @ ORG_e6388e03ination Knot in #remote-tech
[2026-01-20T19:30:08.693Z] [BOT] ✅ Industry: Work From Home Hotel Reservations Customer Service @ ORG_e6388e03ination Knot
[2026-01-20T19:30:10.194Z] [BOT] 💾 Marked as posted: Work From Home Hotel Reservations Customer Service @ ORG_e6388e03ination Knot (instance #1)
[2026-01-20T19:30:10.194Z] [BOT] 💾 BEFORE ARCHIVING: 7 jobs in database
[2026-01-20T19:30:10.195Z] [BOT] ✅ No jobs to archive (all 7 jobs within 7-day window)
[2026-01-20T19:30:10.203Z] [BOT] 💾 Saved posted_jobs.json: 7 active jobs
[2026-01-20T19:30:10.203Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:30:13.203Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-20T19:30:13.203Z] [BOT] ⏭️  Skipping duplicate: JID_c5a3d717 (posted within 7 days)
[2026-01-20T19:30:13.204Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-20T19:30:13.204Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-20T19:30:13.204Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T19:30:13.204Z] [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
[2026-01-20T19:30:13.205Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T19:30:13.205Z] [BOT] Total attempts: 1
   Successful: 1
   Failed: 0
   Skipped: 0
[2026-01-20T19:30:13.205Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T19:30:13.205Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #remote-tech: 1 posts
[2026-01-20T19:30:13.205Z] [BOT] [STATS] Channel stats saved
[2026-01-20T19:30:15.215Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*