# SnailSploit.com

AI security researcher website built with Astro + Tailwind CSS. Dark terminal aesthetic, fully SEO-optimized, AI-discoverable.

## 🎉 Build Status: Foundation Complete

**13 pages built** ✅ | **21 articles to add** ⏳ | **4 CVEs to add** ⏳

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
snailsploit-build/
├── src/
│   ├── layouts/          # Page templates (Base, Article, CVE, Index)
│   ├── components/       # Navigation, Footer
│   ├── pages/           # All site pages
│   └── styles/          # Global CSS with design tokens
├── public/              # Static assets
│   ├── robots.txt       # AI-friendly crawl rules
│   ├── llms.txt        # LLM discoverability
│   └── agents.md       # AI agent guidelines
├── content-raw/         # Medium export (source material)
├── INSTRUCTIONS.md      # Original build spec
├── SEO-SPEC.md         # SEO strategy
└── BUILD-COMPLETE.md   # 📖 COMPLETE DOCUMENTATION
```

## ✅ What's Built

### Core Pages
- ✅ Homepage with hero and featured content
- ✅ About page with credentials and bio
- ✅ Tools showcase
- ✅ Adversarial Minds book landing page

### Framework Pages
- ✅ AATMF (Adversarial AI Threat Modeling)
- ✅ P.R.O.M.P.T (Prompt Engineering)
- ✅ SEF (Social Engineering - coming soon)

### Research Pages
- ✅ Security Research index
- ✅ CVE index (lists all 5 CVEs)
- ✅ CVE-2025-12030 (example)
- ✅ AI Security index

### SEO & GEO
- ✅ robots.txt (welcomes AI crawlers)
- ✅ llms.txt (LLM-optimized)
- ✅ agents.md (AI agent guidelines)
- ✅ Sitemap (auto-generated)
- ✅ Schema markup on all pages

## ⏳ What Needs to Be Added

### Priority 1: Flagship Articles (5)
1. Context Inheritance Exploit
2. Custom Instruction Backdoor
3. MCP Threat Analysis
4. Memory Manipulation Attacks
5. ChatGPT Context Jailbreak

### Priority 2: Remaining CVEs (4)
- CVE-2025-9776
- CVE-2025-11171
- CVE-2025-11174
- CVE-2025-12163

### Priority 3: All Other Articles (16)
See BUILD-COMPLETE.md for complete list

## 📖 Documentation

**→ [BUILD-COMPLETE.md](./BUILD-COMPLETE.md)** - Complete documentation including:
- Detailed build status
- How to add articles and CVEs
- Deployment instructions
- SEO checklist
- Internal linking strategy
- Testing checklist
- File structure

## 🚀 Deployment

### Cloudflare Pages

```bash
# Method 1: Dashboard
1. Push to GitHub
2. Connect repo in Cloudflare Pages
3. Build command: npm run build
4. Build output: dist

# Method 2: CLI
npx wrangler pages deploy dist
```

## 🎨 Design System

- **Dark terminal/cyberpunk aesthetic**
- **Colors:** Black backgrounds, cyan accents, terminal green
- **Fonts:** JetBrains Mono (headings/code), Inter (body)
- **Responsive:** Mobile-first design
- **Performance:** Static site, optimized builds

## 📊 SEO Features

- Complete meta tags (title, description, OG, Twitter)
- Schema.org structured data
- Semantic HTML
- Fast load times
- Mobile responsive
- AI crawler optimization
- Internal linking silos

## 🛠 Tech Stack

- **Framework:** Astro 5.x (static site generator)
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts (JetBrains Mono, Inter)
- **Deployment:** Cloudflare Pages
- **SEO:** Built-in sitemap, robots.txt, structured data

## 📝 Adding Content

See [BUILD-COMPLETE.md](./BUILD-COMPLETE.md) for detailed instructions on:
- Converting Medium HTML to articles
- Creating new CVE pages
- Adding section index pages
- Maintaining consistent style

## 🔍 Key Files

| File | Purpose |
|------|---------|
| BUILD-COMPLETE.md | **📖 Start here** - Complete documentation |
| INSTRUCTIONS.md | Original build specification |
| SEO-SPEC.md | Keyword strategy and SEO plan |
| CONTENT-INVENTORY.md | Content categorization |

## 🌐 Live Site

- **Domain:** snailsploit.com (to be configured)
- **Built pages:** 13/45+
- **Build time:** ~500ms
- **Status:** Ready for content addition

---

**Author:** Kai Aizen (The Jailbreak Chef)
**Contact:** kai@snailsploit.com
**GitHub:** github.com/SnailSploit
