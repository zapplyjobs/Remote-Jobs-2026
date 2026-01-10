# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T21:08:59.004Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T21:08:37.582Z] ========================================
[2026-01-10T21:08:37.584Z] Discord Bot Execution Log
[2026-01-10T21:08:37.584Z] Environment: GitHub Actions
[2026-01-10T21:08:37.584Z] Node Version: v20.19.6
[2026-01-10T21:08:37.584Z] ========================================
[2026-01-10T21:08:37.585Z] Environment Variables Check:
[2026-01-10T21:08:37.585Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T21:08:37.585Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T21:08:37.585Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-10T21:08:37.585Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-10T21:08:37.585Z] 
Multi-Channel Configuration:
[2026-01-10T21:08:37.585Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.585Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.585Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.585Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-10T21:08:37.586Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-10T21:08:37.586Z] 
Data Files Check:
[2026-01-10T21:08:37.587Z] .github/data/new_jobs.json: ✅ Exists (5 items, 9890 bytes)
[2026-01-10T21:08:37.592Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 650809 bytes)
[2026-01-10T21:08:37.592Z] 
========================================
[2026-01-10T21:08:37.592Z] Starting Enhanced Discord Bot...
[2026-01-10T21:08:37.592Z] ========================================
[2026-01-10T21:08:38.151Z] [BOT] ✅ Loaded V2 database: 1279 jobs
[2026-01-10T21:08:38.632Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T21:08:38.633Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-10T21:08:38.633Z] [BOT] ✅ Guild found: Zapply.jobs
[2026-01-10T21:08:38.634Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T21:08:38.804Z] [BOT] ✅ Loaded 606 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-10T21:08:39.078Z] [BOT] 🔍 Discovered 140 channels in guild "Zapply.jobs"
[2026-01-10T21:08:39.078Z] [BOT] ✅ Cached 96 channels (79 forum, 33 text)
[2026-01-10T21:08:39.078Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-10T21:08:39.078Z] [BOT] ✅ All 23 required channels found
[2026-01-10T21:08:39.079Z] [BOT] ✅ Bot initialized with multi-channel routing
📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
[2026-01-10T21:08:39.079Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2026-01-10T21:08:39.156Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2026-01-10T21:08:39.158Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2026-01-10T21:08:39.159Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-10T21:08:39.159Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-10T21:08:39.159Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-10T21:08:39.159Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-10T21:08:39.163Z] [BOT] 📌 Posting 4 jobs to #remote-tech
[2026-01-10T21:08:39.163Z] [BOT] 📍 [ROUTING] "Software Engineer Identity Access Management" @ ORG_7bc88ebb
[2026-01-10T21:08:39.163Z] [BOT] Category: TECH (matched: "software")
   Channel: remote-tech (1459...5491)
[2026-01-10T21:08:39.483Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Identity Access Management @ ORG_7bc88ebb in #remote-tech
[2026-01-10T21:08:39.483Z] [BOT] ✅ Industry: Software Engineer Identity Access Management @ ORG_7bc88ebb
[2026-01-10T21:08:41.229Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Identity Access Management @ ORG_7bc88ebb in #JID_ded8d2ca
  ✅ Location: JID_ded8d2ca
[2026-01-10T21:08:42.729Z] [BOT] 💾 Marked as posted: Software Engineer Identity Access Management @ ORG_7bc88ebb (instance #1)
[2026-01-10T21:08:42.729Z] [BOT] 💾 BEFORE ARCHIVING: 1280 jobs in database
[2026-01-10T21:08:42.730Z] [BOT] 📁 Created archive directory: /home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/data/archive
[2026-01-10T21:08:42.732Z] [BOT] 📦 Archived 36 jobs to 2025-12.json (36 total in archive)
[2026-01-10T21:08:42.736Z] [BOT] 📦 Archived 766 jobs to 2026-01.json (766 total in archive)
[2026-01-10T21:08:42.737Z] [BOT] ✅ Archiving complete: 802 archived, 478 active
[2026-01-10T21:08:42.740Z] [BOT] 💾 Saved posted_jobs.json: 478 active jobs
[2026-01-10T21:08:42.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T21:08:42.740Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d0da7ab8 Innovations Inc.
   Category: TECH (matched: "software")
[2026-01-10T21:08:42.740Z] [BOT] Channel: remote-tech (1459...5491)
[2026-01-10T21:08:43.325Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d0da7ab8 Innovations Inc. in #remote-tech
  ✅ Industry: Software Engineer @ ORG_d0da7ab8 Innovations Inc.
[2026-01-10T21:08:45.016Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d0da7ab8 Innovations Inc. in #JID_ded8d2ca
  ✅ Location: JID_ded8d2ca
[2026-01-10T21:08:46.517Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_d0da7ab8 Innovations Inc. (instance #1)
[2026-01-10T21:08:46.517Z] [BOT] 💾 BEFORE ARCHIVING: 479 jobs in database
[2026-01-10T21:08:46.518Z] [BOT] ✅ No jobs to archive (all 479 jobs within 7-day window)
[2026-01-10T21:08:46.523Z] [BOT] 💾 Saved posted_jobs.json: 479 active jobs
[2026-01-10T21:08:46.523Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T21:08:46.524Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d0da7ab8 Solutions Inc.
[2026-01-10T21:08:46.524Z] [BOT] Category: TECH (matched: "software")
   Channel: remote-tech (1459...5491)
[2026-01-10T21:08:46.683Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d0da7ab8 Solutions Inc. in #remote-tech
[2026-01-10T21:08:46.683Z] [BOT] ✅ Industry: Software Engineer @ ORG_d0da7ab8 Solutions Inc.
[2026-01-10T21:08:48.395Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d0da7ab8 Solutions Inc. in #JID_ded8d2ca
[2026-01-10T21:08:48.395Z] [BOT] ✅ Location: JID_ded8d2ca
[2026-01-10T21:08:49.896Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_d0da7ab8 Solutions Inc. (instance #1)
[2026-01-10T21:08:49.896Z] [BOT] 💾 BEFORE ARCHIVING: 480 jobs in database
[2026-01-10T21:08:49.897Z] [BOT] ✅ No jobs to archive (all 480 jobs within 7-day window)
[2026-01-10T21:08:49.902Z] [BOT] 💾 Saved posted_jobs.json: 480 active jobs
[2026-01-10T21:08:49.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T21:08:49.902Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_d0da7ab8 Solutions Inc. (instance #1)
[2026-01-10T21:08:49.902Z] [BOT] 💾 BEFORE ARCHIVING: 481 jobs in database
[2026-01-10T21:08:49.903Z] [BOT] ✅ No jobs to archive (all 481 jobs within 7-day window)
[2026-01-10T21:08:49.907Z] [BOT] 💾 Saved posted_jobs.json: 481 active jobs
[2026-01-10T21:08:49.907Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T21:08:49.909Z] [BOT] 📍 [ROUTING] "Online Hotel Reservationist Fully" @ ORG_e6388e03ination Knot
[2026-01-10T21:08:49.909Z] [BOT] Category: TECH (default)
   Channel: remote-tech (1459...5491)
[2026-01-10T21:08:50.227Z] [BOT] ✅ Created forum post: 🏢 Online Hotel Reservationist Fully @ ORG_e6388e03ination Knot in #remote-tech
  ✅ Industry: Online Hotel Reservationist Fully @ ORG_e6388e03ination Knot
[2026-01-10T21:08:51.876Z] [BOT] ✅ Created forum post: 🏢 Online Hotel Reservationist Fully @ ORG_e6388e03ination Knot in #JID_547c65e4
  ✅ Location: JID_547c65e4
[2026-01-10T21:08:53.376Z] [BOT] 💾 Marked as posted: Online Hotel Reservationist Fully @ ORG_e6388e03ination Knot (instance #1)
[2026-01-10T21:08:53.377Z] [BOT] 💾 BEFORE ARCHIVING: 482 jobs in database
[2026-01-10T21:08:53.377Z] [BOT] ✅ No jobs to archive (all 482 jobs within 7-day window)
[2026-01-10T21:08:53.381Z] [BOT] 💾 Saved posted_jobs.json: 482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T21:08:56.382Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-10T21:08:56.382Z] [BOT] ⏭️  Skipping duplicate: JID_f2c125a0 (posted within 7 days)
[2026-01-10T21:08:56.382Z] [BOT] ⏭️  Skipping duplicate: JID_b37f8038 (posted within 7 days)
[2026-01-10T21:08:56.382Z] [BOT] ⏭️  Skipping duplicate: JID_115de8da (posted within 7 days)
[2026-01-10T21:08:56.383Z] [BOT] ⏭️  Skipping duplicate: JID_4203e870 (posted within 7 days)
[2026-01-10T21:08:56.383Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-01-10T21:08:56.384Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 1 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-10T21:08:56.384Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-10T21:08:56.384Z] [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
[2026-01-10T21:08:56.384Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
   Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-10T21:08:56.385Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 3
   Top channels:
[2026-01-10T21:08:56.385Z] [BOT] 1. #remote-tech: 4 posts
     2. #JID_ded8d2ca: 3 posts
     3. #JID_547c65e4: 1 posts
[2026-01-10T21:08:56.385Z] [BOT] [STATS] Channel stats saved
[2026-01-10T21:08:58.397Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*