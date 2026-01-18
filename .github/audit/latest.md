# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T01:18:11.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T01:17:42.707Z] ========================================
[2026-01-18T01:17:42.709Z] Discord Bot Execution Log
[2026-01-18T01:17:42.709Z] Environment: GitHub Actions
[2026-01-18T01:17:42.709Z] Node Version: v20.19.6
[2026-01-18T01:17:42.710Z] ========================================
[2026-01-18T01:17:42.710Z] Environment Variables Check:
[2026-01-18T01:17:42.710Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T01:17:42.710Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T01:17:42.710Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-18T01:17:42.710Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-18T01:17:42.710Z] 
Multi-Channel Configuration:
[2026-01-18T01:17:42.710Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.710Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.710Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.710Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-18T01:17:42.711Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-18T01:17:42.711Z] 
Data Files Check:
[2026-01-18T01:17:42.711Z] .github/data/new_jobs.json: ✅ Exists (6 items, 13881 bytes)
[2026-01-18T01:17:42.713Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 245956 bytes)
[2026-01-18T01:17:42.713Z] 
========================================
[2026-01-18T01:17:42.713Z] Starting Enhanced Discord Bot...
[2026-01-18T01:17:42.713Z] ========================================
[2026-01-18T01:17:43.311Z] [BOT] ✅ Loaded V2 database: 482 jobs
[2026-01-18T01:17:44.004Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T01:17:44.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "CH_20db82b8" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
🔍 Attempting to fetch guild: CH_20db82b8
[2026-01-18T01:17:44.004Z] [BOT] ✅ Guild found: Zapply
[2026-01-18T01:17:44.006Z] [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T01:17:44.275Z] [BOT] ✅ Loaded 1120 channels from guild
🔍 Initializing channel auto-discovery...
[2026-01-18T01:17:44.454Z] [BOT] 🔍 Discovered 120 channels in guild "Zapply"
[2026-01-18T01:17:44.454Z] [BOT] ✅ Cached 88 channels (79 forum, 25 text)
[2026-01-18T01:17:44.454Z] [BOT] ✅ Found 23 remote-* channels
[2026-01-18T01:17:44.454Z] [BOT] ✅ All 23 required channels found
[2026-01-18T01:17:44.455Z] [BOT] ✅ Bot initialized with multi-channel routing
[2026-01-18T01:17:44.455Z] [BOT] 📍 Functional channels: 11
📍 Location channels: 12
📍 Fallback channel ID: CH_f5bf382c
[2026-01-18T01:17:44.455Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2026-01-18T01:17:44.495Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-18T01:17:44.534Z] [BOT] ✅ Export complete: Added 1, Skipped 5, Total 6
[2026-01-18T01:17:44.535Z] [BOT] 📬 Found 6 new jobs (0 already posted)...
[2026-01-18T01:17:44.536Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2026-01-18T01:17:44.536Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-18T01:17:44.537Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-18T01:17:44.537Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T01:17:44.540Z] [BOT] 📌 Posting 2 jobs to #remote-ai
[2026-01-18T01:17:44.541Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer 3D Vision&Localization" @ ORG_41e35ba1 Auto
[2026-01-18T01:17:44.541Z] [BOT] Category: AI (matched: "machine learning")
   Channel: remote-ai (1459...3357)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T01:17:44.636Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer 3D Vision&Localization: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/scripts/JID_f05b60e7.js:1431:22)
    at async Client.<anonymous> (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/scripts/JID_f05b60e7.js:910:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer 3D Vision&Localization @ ORG_41e35ba1 Auto',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_cffade61/threads'
}
[2026-01-18T01:17:44.636Z] [BOT] ❌ Industry post failed: Machine Learning Engineer 3D Vision&Localization
⚠️  Channel full error count: 1/5
[2026-01-18T01:17:46.474Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer 3D Vision&Localization @ ORG_41e35ba1 Auto in #remote-austin
[2026-01-18T01:17:46.474Z] [BOT] ✅ Location: remote-austin
[2026-01-18T01:17:47.974Z] [BOT] 💾 Marked as posted: Machine Learning Engineer 3D Vision&Localization @ ORG_41e35ba1 Auto (instance #1)
[2026-01-18T01:17:47.974Z] [BOT] 💾 BEFORE ARCHIVING: 483 jobs in database
[2026-01-18T01:17:47.975Z] [BOT] 📁 Created archive directory: /home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/data/archive
[2026-01-18T01:17:48.020Z] [BOT] 📦 Archived 482 jobs to 2026-01.json (482 total in archive)
[2026-01-18T01:17:48.021Z] [BOT] ✅ Archiving complete: 482 archived, 1 active
[2026-01-18T01:17:48.021Z] [BOT] 💾 Saved posted_jobs.json: 1 active jobs
[2026-01-18T01:17:48.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T01:17:48.022Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer AI Inference" @ ORG_ba19e9c3 Hat, Inc.
[2026-01-18T01:17:48.022Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: remote-ai (1459...3357)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T01:17:48.364Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer AI Inference @ ORG_ba19e9c3 Hat, Inc. in #remote-ai
[2026-01-18T01:17:48.364Z] [BOT] ✅ Industry: Forward Deployed Engineer AI Inference @ ORG_ba19e9c3 Hat, Inc.
[2026-01-18T01:17:49.865Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer AI Inference @ ORG_ba19e9c3 Hat, Inc. (instance #1)
[2026-01-18T01:17:49.865Z] [BOT] 💾 BEFORE ARCHIVING: 2 jobs in database
✅ No jobs to archive (all 2 jobs within 7-day window)
[2026-01-18T01:17:49.866Z] [BOT] 💾 Saved posted_jobs.json: 2 active jobs
[2026-01-18T01:17:49.866Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T01:17:52.866Z] [BOT] 📌 Posting 1 jobs to #remote-tech
[2026-01-18T01:17:52.868Z] [BOT] 📍 [ROUTING] "Character Artist Clothing NBA 2K" @ ORG_ba303321 Concepts
   Category: TECH (default)
[2026-01-18T01:17:52.868Z] [BOT] Channel: remote-tech (1459...5491)
[2026-01-18T01:17:53.087Z] [BOT] ✅ Created forum post: 🏢 Character Artist Clothing NBA 2K @ ORG_ba303321 Concepts in #remote-tech
  ✅ Industry: Character Artist Clothing NBA 2K @ ORG_ba303321 Concepts
[2026-01-18T01:17:54.868Z] [BOT] ✅ Created forum post: 🏢 Character Artist Clothing NBA 2K @ ORG_ba303321 Concepts in #remote-austin
  ✅ Location: remote-austin
[2026-01-18T01:17:56.370Z] [BOT] 💾 Marked as posted: Character Artist Clothing NBA 2K @ ORG_ba303321 Concepts (instance #1)
[2026-01-18T01:17:56.370Z] [BOT] 💾 BEFORE ARCHIVING: 3 jobs in database
✅ No jobs to archive (all 3 jobs within 7-day window)
[2026-01-18T01:17:56.371Z] [BOT] 💾 Saved posted_jobs.json: 3 active jobs
[2026-01-18T01:17:56.371Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T01:17:56.371Z] [BOT] 💾 Marked as posted: Character Artist Clothing NBA 2K @ ORG_ba303321 Concepts (instance #1)
[2026-01-18T01:17:56.371Z] [BOT] 💾 BEFORE ARCHIVING: 4 jobs in database
✅ No jobs to archive (all 4 jobs within 7-day window)
[2026-01-18T01:17:56.372Z] [BOT] 💾 Saved posted_jobs.json: 4 active jobs
[2026-01-18T01:17:56.372Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T01:17:59.372Z] [BOT] 📌 Posting 2 jobs to #remote-sales
[2026-01-18T01:17:59.373Z] [BOT] 📍 [ROUTING] "Account Executive Level 2" @ ORG_c7420bdd
   Category: SALES (matched: "sales")
   Channel: remote-sales (1459...5435)
[2026-01-18T01:17:59.587Z] [BOT] ✅ Created forum post: 🏢 Account Executive Level 2 @ ORG_c7420bdd in #remote-sales
  ✅ Industry: Account Executive Level 2 @ ORG_c7420bdd
[2026-01-18T01:18:01.088Z] [BOT] 💾 Marked as posted: Account Executive Level 2 @ ORG_c7420bdd (instance #1)
[2026-01-18T01:18:01.088Z] [BOT] 💾 BEFORE ARCHIVING: 5 jobs in database
✅ No jobs to archive (all 5 jobs within 7-day window)
[2026-01-18T01:18:01.090Z] [BOT] 💾 Saved posted_jobs.json: 5 active jobs
[2026-01-18T01:18:01.090Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T01:18:01.091Z] [BOT] 📍 [ROUTING] "Product Designer" @ ORG_3ec9ae53
[2026-01-18T01:18:01.091Z] [BOT] Category: SALES (matched: "revenue")
   Channel: remote-sales (1459...5435)
[2026-01-18T01:18:02.613Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ ORG_3ec9ae53 in #remote-sales
[2026-01-18T01:18:02.613Z] [BOT] ✅ Industry: Product Designer @ ORG_3ec9ae53
[2026-01-18T01:18:04.343Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ ORG_3ec9ae53 in #JID_ded8d2ca
[2026-01-18T01:18:04.343Z] [BOT] ✅ Location: JID_ded8d2ca
[2026-01-18T01:18:05.844Z] [BOT] 💾 Marked as posted: Product Designer @ ORG_3ec9ae53 (instance #1)
[2026-01-18T01:18:05.844Z] [BOT] 💾 BEFORE ARCHIVING: 6 jobs in database
✅ No jobs to archive (all 6 jobs within 7-day window)
[2026-01-18T01:18:05.850Z] [BOT] 💾 Saved posted_jobs.json: 6 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T01:18:08.850Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-18T01:18:08.850Z] [BOT] ⏭️  Skipping duplicate: JID_6be4ffb5 (posted within 7 days)
[2026-01-18T01:18:08.851Z] [BOT] ⏭️  Skipping duplicate: JID_1ed80715 (posted within 7 days)
⏭️  Skipping duplicate: JID_7d2cdcae (posted within 7 days)
[2026-01-18T01:18:08.851Z] [BOT] ⏭️  Skipping duplicate: JID_f51b673d (posted within 7 days)
⏭️  Skipping duplicate: JID_8b93f9f0 (posted within 7 days)
[2026-01-18T01:18:08.851Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-01-18T01:18:08.852Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 1 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T01:18:08.852Z] [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
[2026-01-18T01:18:08.853Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 8
[2026-01-18T01:18:08.853Z] [BOT] Successful: 7
   Failed: 1
   Skipped: 0
[2026-01-18T01:18:08.853Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T01:18:08.853Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
     1. #remote-austin: 2 posts
     2. #remote-sales: 2 posts
     3. #remote-ai: 1 posts
[2026-01-18T01:18:08.853Z] [BOT] 4. #remote-tech: 1 posts
     5. #JID_ded8d2ca: 1 posts
[2026-01-18T01:18:08.853Z] [BOT] [STATS] Channel stats saved
[2026-01-18T01:18:10.865Z] 
========================================
```
## Errors Detected
- [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer 3D Vision&Localization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer 3D Vision&Localization
- [BOT ERROR] ⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*