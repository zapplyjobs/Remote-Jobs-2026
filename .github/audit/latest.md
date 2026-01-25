# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T07:07:53.357Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-25T07:07:52.378Z] ========================================
[2026-01-25T07:07:52.380Z] Discord Bot Execution Log
[2026-01-25T07:07:52.380Z] Environment: GitHub Actions
[2026-01-25T07:07:52.380Z] Node Version: v20.20.0
[2026-01-25T07:07:52.381Z] ========================================
[2026-01-25T07:07:52.381Z] Environment Variables Check:
[2026-01-25T07:07:52.381Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T07:07:52.381Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T07:07:52.381Z] DISCORD_CLIENT_ID: ✅ Set
[2026-01-25T07:07:52.381Z] DISCORD_GUILD_ID: ✅ Set
[2026-01-25T07:07:52.381Z] 
Multi-Channel Configuration:
[2026-01-25T07:07:52.381Z] DISCORD_TECH_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.381Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.381Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_FINANCE_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-01-25T07:07:52.382Z] 
Multi-Channel Mode: ⭕ DISABLED (using single-channel)
[2026-01-25T07:07:52.382Z] 
Data Files Check:
[2026-01-25T07:07:52.382Z] .github/data/new_jobs.json: ✅ Exists (3 items, 6848 bytes)
[2026-01-25T07:07:52.383Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5127 bytes)
[2026-01-25T07:07:52.383Z] 
========================================
[2026-01-25T07:07:52.383Z] Starting Enhanced Discord Bot...
[2026-01-25T07:07:52.383Z] ========================================
[2026-01-25T07:07:52.722Z] [BOT ERROR] node:internal/modules/cjs/loader:1210
  throw err;
  ^
Error: Cannot find module './src/discord/forum-poster'
Require stack:
- /home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/scripts/JID_f05b60e7.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Module.require (node:internal/modules/cjs/loader:1289:19)
    at require (node:internal/modules/helpers:182:18)
    at Object.<anonymous> (/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/scripts/JID_f05b60e7.js:29:28)
    at Module._compile (node:internal/modules/cjs/loader:1521:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1623:10)
    at Module.load (node:internal/modules/cjs/loader:1266:32)
    at Module._load (node:internal/modules/cjs/loader:1091:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/runner/work/Remote-Jobs-2026/Remote-Jobs-2026/.github/scripts/JID_f05b60e7.js'
  ]
}
Node.js v20.20.0
[2026-01-25T07:07:52.728Z] 
========================================
```
## Errors Detected
- [BOT ERROR] node:internal/modules/cjs/loader:1210
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*