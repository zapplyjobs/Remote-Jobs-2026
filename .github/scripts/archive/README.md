# Archived Scripts - Remote-Jobs-2026

**Purpose:** Collection of scripts that are not actively used by workflows but may be useful for debugging, maintenance, or reference.

**Created:** 2026-02-08
**Status:** Archived - Not actively called by workflows

---

## Directory Structure

### analytics/ (8 files)
Scripts for analyzing job data, statistics, and metrics.

### debugging/ (2 files)
Debug tools for encrypted data and routing logs.

### maintenance/ (7 files)
Scripts for system maintenance and data management.

### tests/ (2 files)
Test files for development and validation.

### utils/ (2 files)
Utility scripts for logging and state management.

---

## What's Archived (21 scripts)

| File | Purpose | Why Archived |
|------|---------|-------------|
| **Analytics (8)** | | |
| analyze-duplicates.js | Duplicate job analysis | Not called by workflows |
| analyze-job-statistics.js | Job statistics reporting | Not called by workflows |
| channel-stats.js | Channel statistics tracking | Not called by workflows |
| daily-stats.js | Daily statistics report | Not called by workflows |
| generate-metrics-report.js | Metrics generation | Not called by workflows |
| query-metrics.js | Metrics query tool | Not called by workflows |
| run-analytics.js | Analytics runner | Not called by workflows |
| weekly-summary.js | Weekly summary report | Not called by workflows |
| **Debugging (2)** | | |
| decrypt-jobs-data.js | Debug tool for encrypted data | Not called by workflows |
| decrypt-routing-logs.js | Debug tool for routing logs | Not called by workflows |
| **Maintenance (7)** | | |
| create-audit-log.js | Audit log generator | Not called by workflows |
| diagnostic-health-check.js | Health diagnostic tool | Not called by workflows |
| discord-post-logger.js | Post logging utility | Not called by workflows |
| jobs-data-exporter.js | External data export | Not called by workflows |
| remove-specific-jobs.js | Job removal utility | Not called by workflows |
| state-sync-manager.js | State sync utility | Not called by workflows |
| workflow-health-report.js | Health reporting | Not called by workflows |
| **Tests (2)** | | |
| test-edge-cases.js | Edge case testing | Not called by workflows |
| test-integration.js | Integration test suite | Not called by workflows |
| **Utils (2)** | | |
| deduplication-logger.js | Deduplication logging | Not called by workflows |
| routing-logger.js | Routing logging utility | Not called by workflows |

---

## Active Scripts (Not Archived)

The following scripts remain in `.github/scripts/` and are actively used:

**Core Job Processing:**
- `job-fetcher/` - Core job fetching logic
- `write-current-jobs.js` - Aggregator export

**Discord Operations:**
- `cleanup-discord-posts.js` - Discord cleanup
- `save-discord-logs.js` - Discord log saving
- `enhanced-discord-bot.js` - Discord bot
- `encryption-utils.js` - Encryption utilities

**Health Verification:**
- `verify-discord-channels.js` - Channel health verification
- `verify-job-distribution.js` - Job distribution verification
- `verify-workflow-health.js` - Workflow health verification

**Support Modules:**
- `src/` - Shared modules (discord, routing, data)
- `unified-job-fetcher.js` - Unified fetcher

---

## Notes

- All scripts were archived on 2026-02-08
- Archived scripts remain in git history if needed
- Can be restored from git history if needed for debugging
- No workflow changes required - archived scripts weren't referenced
- Active functionality preserved - all critical scripts remain in place
