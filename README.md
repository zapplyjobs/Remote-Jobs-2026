<div align="center">

# Remote Jobs 2026

<br>

<!-- Row 1: Job Stats -->
![Total Jobs](https://img.shields.io/badge/Total_Jobs-5-brightgreen?style=flat&logo=briefcase)
![Updated](https://img.shields.io/badge/Updated-On_Demand-orange?style=flat&logo=calendar)
![License](https://img.shields.io/badge/License-CC--BY--NC--4.0-purple?style=flat&logo=creativecommons)

<!-- Row 2: Repository Stats -->
![GitHub stars](https://img.shields.io/github/stars/zapplyjobs/Remote-Jobs-2026?style=flat&logo=github&color=yellow)
![GitHub forks](https://img.shields.io/github/forks/zapplyjobs/Remote-Jobs-2026?style=flat&logo=github&color=blue)
![Last commit](https://img.shields.io/github/last-commit/zapplyjobs/Remote-Jobs-2026?style=flat&color=red)

<!-- Row 3: Workflow Health -->
![Update Jobs](https://img.shields.io/github/actions/workflow/status/zapplyjobs/Remote-Jobs-2026/update-jobs.yml?style=flat&label=job-updates&logo=github-actions&logoColor=white)

<!-- Row 4: Community & Links -->
[![Browse Jobs](https://img.shields.io/badge/Browse_Jobs-Live_Site-FF6B35?style=for-the-badge&logo=rocket&logoColor=white)](https://zapplyjobs.github.io/Remote-Jobs-2026/)
[![Zapply](https://img.shields.io/badge/Zapply-Company_Site-4F46E5?style=for-the-badge&logo=zap&logoColor=white)](https://zapply-jobs.vercel.app/)
[![Discord](https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/yKWw28q7Yq)

</div>

<p align="center">🌍 Remote-first job board featuring entry and mid-level positions from companies hiring in the United States. Powered by RemoteOK's curated job listings, updated on-demand.</p>

<p align="center">🎯 Focus on remote work opportunities across tech, data, product, and other categories.</p>

> [!NOTE]
> 📡 Job listings powered by [RemoteOK](https://remoteok.com) - please visit their site to support their work!

---

## About This Repository

This repository automatically fetches and posts remote job listings to our Discord server. Jobs are:

- ✅ **US-based** - All positions are available to candidates in the United States
- ✅ **Entry/Mid-Level** - Filtered to exclude senior/staff/principal roles
- ✅ **Remote-First** - Companies committed to remote work culture
- ✅ **On-Demand Updates** - Manually triggered via GitHub Actions

### Job Sources

- **RemoteOK API** - Curated remote job board with 20K+ listings
  - US location filtering
  - Experience level filtering
  - Real-time updates

---

## How It Works

1. **Job Fetching** - GitHub Actions can be manually triggered to fetch new jobs
2. **Filtering** - Jobs are filtered for US locations and entry/mid-level experience
3. **Discord Posting** - New jobs are automatically posted to categorized Discord channels
4. **Website Display** - All jobs are displayed on our public website

### Architecture

```
RemoteOK API → Job Fetcher → Discord Bot → Discord Channels
                    ↓
              Website Generator → GitHub Pages
```

---

## Discord Channels

Jobs are automatically categorized into:

**Functional Channels:**
- `#remote-tech` - Software engineering, development
- `#remote-ai` - AI/ML roles
- `#remote-data-science` - Data science & analytics
- `#remote-sales` - Sales & business development
- `#remote-marketing` - Marketing & growth
- `#remote-finance` - Finance & accounting
- `#remote-product` - Product management
- And more...

**Location Channels:**
- `#remote-usa` - General US remote
- `#remote-new-york` - NYC area
- `#remote-san-francisco` - SF Bay Area
- `#remote-austin` - Austin, TX
- And more...

---

## Attribution

Job listings are provided by [RemoteOK](https://remoteok.com), the #1 remote job board. Please visit their site and consider posting your jobs there to support their work.

This repository complies with RemoteOK's terms of service by:
- Providing proper attribution with dofollow backlinks
- Not modifying or misrepresenting job data
- Updating every 15 minutes to ensure freshness

---

## Contributing

Want to help improve this project?

1. **Report Issues** - Found a bug? [Open an issue](https://github.com/zapplyjobs/Remote-Jobs-2026/issues)
2. **Suggest Features** - Have an idea? We'd love to hear it!
3. **Improve Filters** - Help us refine job categorization

---

## Tech Stack

- **Job Fetcher** - Node.js
- **Discord Bot** - Discord.js v14
- **Website** - React + GitHub Pages
- **Automation** - GitHub Actions
- **API** - RemoteOK Public API

---

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC-BY-NC-4.0).

Job data belongs to RemoteOK and the respective employers.

---

<div align="center">

**Built with ❤️ by [Zapply](https://zapply-jobs.vercel.app/)**

[Discord](https://discord.gg/yKWw28q7Yq) • [Website](https://zapplyjobs.github.io/Remote-Jobs-2026/) • [Report Issue](https://github.com/zapplyjobs/Remote-Jobs-2026/issues)

</div>
