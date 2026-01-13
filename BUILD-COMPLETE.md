# SnailSploit.com - Build Complete

## ✅ What's Been Built

This is a fully functional Astro + Tailwind CSS website with dark terminal/cyberpunk aesthetic, optimized for SEO and AI discoverability.

### Core Infrastructure ✓

- **Astro Project** with Tailwind CSS v4 and sitemap generation
- **Custom Fonts**: JetBrains Mono (headings/code) and Inter (body)
- **Dark Theme**: Terminal/cyberpunk aesthetic with CSS custom properties
- **Responsive Design**: Mobile-first, optimized for all screen sizes

### Layout System ✓

1. **BaseLayout.astro** - Core layout with SEO meta tags and schema markup
2. **ArticleLayout.astro** - Blog/article pages with breadcrumbs and author bio
3. **CVELayout.astro** - CVE detail pages with sidebar and structured data
4. **IndexLayout.astro** - Section landing pages

### Components ✓

1. **Navigation.astro** - Header with dropdown menus
2. **Footer.astro** - Site footer with links and copyright

### Pages Built (13 pages) ✓

#### Static Pages
- ✅ **Homepage** (/) - Hero section, featured research, frameworks showcase
- ✅ **About** (/about) - Full bio with Person schema, credentials, research focus
- ✅ **Tools** (/tools) - GitHub projects showcase
- ✅ **Adversarial Minds** (/adversarial-minds) - Book landing page with Book schema

#### Framework Pages
- ✅ **Frameworks Index** (/frameworks) - Overview of all 3 frameworks
- ✅ **AATMF** (/frameworks/aatmf) - Detailed framework page
- ✅ **P.R.O.M.P.T** (/frameworks/prompt) - Framework methodology
- ✅ **SEF** (/frameworks/sef) - Coming soon placeholder

#### Security Research Pages
- ✅ **Security Research Index** (/security-research) - Overview
- ✅ **CVEs Index** (/security-research/cves) - List of all 5 CVEs
- ✅ **CVE-2025-12030** (/security-research/cves/cve-2025-12030) - Full CVE page example

#### Content Section Indexes
- ✅ **AI Security Index** (/ai-security) - Overview with subsections
- ✅ **Writing Index** (/writing) - Publications overview

### SEO & GEO Files ✓

- ✅ **robots.txt** - Welcomes all AI crawlers explicitly
- ✅ **llms.txt** - Structured data for LLM crawlers
- ✅ **agents.md** - AI agent interaction guidelines
- ✅ **sitemap.xml** - Auto-generated on build

### Schema Markup ✓

All pages include appropriate structured data:
- WebSite schema (site-wide)
- Person schema (about page)
- Article schema (articles)
- TechArticle schema (CVE pages)
- Book schema (Adversarial Minds)
- BreadcrumbList schema (all content pages)

---

## 📋 What Needs to Be Added

### Articles (21 total)

The Medium export HTML files are in `content-raw/posts/`. These need to be:

1. **Converted from HTML to Markdown/MDX**
2. **Placed in the correct directories**
3. **Created as individual .astro pages using ArticleLayout**

#### Required Article Pages:

**AI Security - Jailbreaking (5 articles)**
- `/ai-security/jailbreaking/chatgpt-context-jailbreak.astro`
- `/ai-security/jailbreaking/context-inheritance-exploit.astro` ⭐ Flagship
- `/ai-security/jailbreaking/ai-inherent-vulnerability.astro`
- `/ai-security/jailbreaking/inherent-ai-vulnerabilities.astro`
- `/ai-security/jailbreaking/memory-manipulation-attacks.astro` ⭐ Flagship

**AI Security - Prompt Injection (3 articles)**
- `/ai-security/prompt-injection/custom-instruction-backdoor.astro` ⭐ Flagship
- `/ai-security/prompt-injection/mcp-threat-analysis.astro` ⭐ Flagship
- `/ai-security/prompt-injection/mcp-security-deep-dive.astro`

**AI Security - General (3 articles)**
- `/ai-security/hidden-risks-offensive-perspective.astro`
- `/ai-security/rag-agentic-attack-surface.astro`
- `/ai-security/ai-social-engineering-deepfake.astro`

**Security Research - General (4 articles)**
- `/security-research/general/cloud-vulnerability-exploitation.astro`
- `/security-research/general/edr-evasion-techniques.astro`
- `/security-research/general/advanced-container-escapes.astro`
- `/security-research/general/zero-trust-container-runtime.astro`

**Writing (3 articles)**
- `/writing/personal-data-identity-theft.astro`
- `/writing/embracing-ai-adapt-or-die.astro`
- `/writing/ai-obfuscator-detection-bypass.astro`

**Frameworks (1 article)**
- `/frameworks/adversarial-prompting-framework.astro`

### CVE Pages (4 remaining)

Create using CVELayout template:
- `/security-research/cves/cve-2025-9776.astro`
- `/security-research/cves/cve-2025-11171.astro`
- `/security-research/cves/cve-2025-11174.astro`
- `/security-research/cves/cve-2025-12163.astro`

### Section Index Pages (2 needed)

- `/ai-security/jailbreaking/index.astro` - List jailbreaking articles
- `/ai-security/prompt-injection/index.astro` - List prompt injection articles
- `/security-research/general/index.astro` - List general security research

---

## 🚀 How to Add Content

### Adding an Article

1. **Create a new .astro file** in the appropriate directory:

```astro
---
import ArticleLayout from '../../../layouts/ArticleLayout.astro';
---

<ArticleLayout
  title="Your Article Title"
  description="Your article description for SEO"
  date="2025-01-04"
  canonical="https://snailsploit.com/full/path/to/article"
  keywords={['keyword1', 'keyword2', 'keyword3']}
  category="jailbreaking"
  tags={['jailbreaking', 'GPT', 'original-research']}
  readingTime="8 min read"
>
  <section>
    <h2>Your Content Here</h2>
    <p>Article content in HTML...</p>
  </section>

  <!-- Add more sections -->
</ArticleLayout>
```

2. **Convert Medium HTML to clean content**:
   - Extract the article body from Medium export HTML
   - Remove Medium-specific markup
   - Keep images, code blocks, headings, lists
   - Use semantic HTML (h2, h3, p, ul, ol, code, pre)

3. **Use the metadata from INSTRUCTIONS.md** Part 5 for each article

### Adding a CVE Page

1. **Create a new .astro file** in `/src/pages/security-research/cves/`:

```astro
---
import CVELayout from '../../../layouts/CVELayout.astro';
---

<CVELayout
  cveId="CVE-2025-XXXXX"
  title="Short vulnerability title"
  description="Description for SEO"
  cvssScore={7.5}
  severity="High"
  vulnerabilityType="Type of vulnerability"
  affectedSoftware="Software name"
  affectedVersions="< X.X.X"
  disclosureDate="2025-01-15"
  fixedVersion="X.X.X"
  canonical="https://snailsploit.com/security-research/cves/cve-2025-xxxxx"
  keywords={['CVE-2025-XXXXX', 'vulnerability type']}
>
  <section>
    <h2>Description</h2>
    <p>Detailed vulnerability description...</p>
  </section>

  <!-- Add Technical Details, Impact, Remediation sections -->
</CVELayout>
```

2. **Fetch details from NVD/MITRE** for each CVE
3. **Update the CVEs index page** to include the new CVE

### Adding a Section Index

Create a page that lists articles in that section:

```astro
---
import IndexLayout from '../../../layouts/IndexLayout.astro';

const articles = [
  {
    title: 'Article Title',
    description: 'Brief description',
    url: '/full/path',
    date: '2025-01-04',
    tags: ['tag1', 'tag2']
  },
  // ... more articles
];
---

<IndexLayout
  title="Section Name | Description"
  description="Section description for SEO"
  canonical="https://snailsploit.com/section/path"
  heading="Section Name"
  subheading="Section description"
>
  <div class="space-y-6">
    {articles.map(article => (
      <a href={article.url} class="group block p-6 rounded-lg transition-all">
        <!-- Article card markup -->
      </a>
    ))}
  </div>
</IndexLayout>
```

---

## 🛠 Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Deployment to Cloudflare Pages

### Method 1: Via Cloudflare Dashboard

1. Push this repo to GitHub
2. Go to Cloudflare Pages dashboard
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
6. Click "Save and Deploy"

### Method 2: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy dist
```

### Custom Domain Setup

1. In Cloudflare Pages, go to Custom domains
2. Add `snailsploit.com` and `www.snailsploit.com`
3. Follow DNS configuration instructions

---

## 📊 SEO Checklist

### Pre-Launch ✓

- [x] robots.txt with AI crawler permissions
- [x] llms.txt for LLM discoverability
- [x] agents.md for AI agent guidelines
- [x] Sitemap.xml auto-generation
- [x] Schema markup on all pages
- [x] OpenGraph and Twitter Card meta tags
- [x] Canonical URLs on all pages
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Dark theme with proper contrast
- [x] Mobile-responsive design
- [x] Semantic HTML structure

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify schema with Rich Results Test
- [ ] Check all pages indexed
- [ ] Monitor keyword rankings for:
  - "AI security researcher"
  - "LLM jailbreaking"
  - "prompt injection testing"
  - "AATMF framework"
  - "P.R.O.M.P.T framework"
- [ ] Build backlinks through:
  - GitHub README links
  - LinkedIn posts
  - Security newsletter mentions
  - Conference presentations

---

## 🎨 Design System

### Colors

```css
--color-bg: #0a0a0a
--color-surface: #1a1a1a
--color-surface-hover: #252525
--color-border: #333333
--color-text-primary: #e0e0e0
--color-text-secondary: #888888
--color-text-muted: #666666
--color-accent-cyan: #00ffff
--color-accent-green: #00ff00
--color-accent-red: #ff4444
--color-accent-yellow: #ffff00
```

### Typography

- **Headings & Code:** JetBrains Mono
- **Body Text:** Inter
- **Line Height:** 1.75 for readability
- **Font Sizes:** Responsive scaling via Tailwind

---

## 📝 Internal Linking Strategy

Follow silo structure from INSTRUCTIONS.md:

1. Every page links UP to its parent
2. Parent pages link DOWN to all children
3. Siblings link to each other within same silo
4. Cross-silo links ONLY when directly relevant:
   - AATMF ↔ AI Security articles
   - P.R.O.M.P.T ↔ Prompt Injection articles
   - SEF ↔ Adversarial Minds
   - CVEs ↔ WordPress articles

### Flagship Content (prioritize internal links)

These 7 articles should receive the most internal links:

1. ChatGPT Context Jailbreak
2. Context Inheritance Exploit ⭐
3. Custom Instruction Backdoor ⭐
4. MCP Threat Analysis ⭐
5. Memory Manipulation Problem ⭐
6. AATMF Framework
7. P.R.O.M.P.T Framework

---

## 🔍 Testing Checklist

Before deployment:

- [ ] All pages build without errors
- [ ] Navigation works on all pages
- [ ] All internal links resolve correctly
- [ ] External links open in new tabs
- [ ] Mobile responsive (test on phone)
- [ ] Schema markup validates
- [ ] Images have proper alt text (once added)
- [ ] No console errors
- [ ] Fast page load times
- [ ] Proper 404 page (create if needed)

---

## 📈 Analytics & Monitoring

### Recommended Setup

1. **Cloudflare Web Analytics** (privacy-friendly, built-in)
2. **Google Search Console** for search performance
3. **Bing Webmaster Tools** for Bing search
4. **Plausible or Fathom** for lightweight analytics (optional)

### Key Metrics to Track

- Organic traffic by page
- Keyword rankings for target terms
- Referring domains (backlinks)
- Top landing pages
- Geographic distribution
- Device breakdown

---

## 🎯 Content Priority

### Phase 1: Foundation (Complete ✅)

- ✅ Core pages (home, about, tools)
- ✅ Framework pages
- ✅ Section indexes
- ✅ 1 example CVE page
- ✅ GEO files

### Phase 2: Flagship Content (Next)

Add these 5 articles first (marked ⭐ above):

1. Context Inheritance Exploit
2. Custom Instruction Backdoor
3. MCP Threat Analysis
4. Memory Manipulation Attacks
5. ChatGPT Context Jailbreak

### Phase 3: Complete CVEs

Add remaining 4 CVE pages with full details from NVD

### Phase 4: Remaining Articles

Add all other articles in order of date/priority

### Phase 5: Enhancements

- Add OG images for all pages
- Add article reading time estimates
- Add related articles section
- Add newsletter signup (optional)
- Add search functionality (optional)

---

## 🐛 Known Issues / Warnings

1. **Content collections warning**: Astro auto-generates collections for empty folders. This is harmless but can be fixed by creating `src/content.config.ts` if you want to use content collections for articles.

2. **CSS import order**: Now fixed - font imports come before Tailwind.

3. **Missing OG images**: Pages reference og-image files that don't exist yet. Create these or use a default placeholder.

---

## 📚 File Structure

```
snailsploit-build/
├── public/
│   ├── robots.txt          ✅ AI-friendly
│   ├── llms.txt           ✅ LLM discoverability
│   ├── agents.md          ✅ Agent guidelines
│   └── favicon.svg        (add your favicon)
├── src/
│   ├── components/
│   │   ├── Navigation.astro   ✅
│   │   └── Footer.astro       ✅
│   ├── layouts/
│   │   ├── BaseLayout.astro   ✅
│   │   ├── ArticleLayout.astro ✅
│   │   ├── CVELayout.astro    ✅
│   │   └── IndexLayout.astro  ✅
│   ├── pages/
│   │   ├── index.astro                              ✅
│   │   ├── about.astro                              ✅
│   │   ├── tools.astro                              ✅
│   │   ├── adversarial-minds.astro                  ✅
│   │   ├── frameworks/
│   │   │   ├── index.astro                          ✅
│   │   │   ├── aatmf.astro                          ✅
│   │   │   ├── prompt.astro                         ✅
│   │   │   └── sef.astro                            ✅
│   │   ├── security-research/
│   │   │   ├── index.astro                          ✅
│   │   │   ├── cves/
│   │   │   │   ├── index.astro                      ✅
│   │   │   │   ├── cve-2025-12030.astro            ✅
│   │   │   │   ├── cve-2025-9776.astro             ⏳
│   │   │   │   ├── cve-2025-11171.astro            ⏳
│   │   │   │   ├── cve-2025-11174.astro            ⏳
│   │   │   │   └── cve-2025-12163.astro            ⏳
│   │   │   └── general/
│   │   │       └── index.astro                      ⏳
│   │   ├── ai-security/
│   │   │   ├── index.astro                          ✅
│   │   │   ├── jailbreaking/
│   │   │   │   ├── index.astro                      ⏳
│   │   │   │   └── [5 article pages]                ⏳
│   │   │   └── prompt-injection/
│   │   │       ├── index.astro                      ⏳
│   │   │       └── [3 article pages]                ⏳
│   │   └── writing/
│   │       ├── index.astro                          ✅
│   │       └── [3 article pages]                    ⏳
│   └── styles/
│       └── global.css         ✅
├── content-raw/              (Medium export - source material)
├── astro.config.mjs          ✅
├── package.json              ✅
├── tailwind.config.mjs       ✅
├── tsconfig.json             ✅
├── INSTRUCTIONS.md           (original spec)
├── SEO-SPEC.md              (SEO strategy)
└── BUILD-COMPLETE.md        (this file)
```

**Legend:**
- ✅ = Complete
- ⏳ = Needs to be created

---

## 💡 Quick Tips

### Converting Medium HTML to Article Content

1. Open the Medium HTML file in a browser
2. Use browser DevTools to inspect and extract the article content
3. Copy the main article HTML (usually within `<article>` or `.postArticle-content`)
4. Clean up Medium-specific classes and styling
5. Keep semantic HTML structure
6. Paste into ArticleLayout component

### Maintaining Consistent Style

- Use the provided layouts - don't create custom page structures
- Follow the existing color scheme (defined in global.css)
- Use JetBrains Mono for all headings and code
- Use Inter for all body text
- Maintain the dark terminal aesthetic
- Keep navigation and footer consistent

### Performance Optimization

- Astro automatically optimizes images (add the @astrojs/image integration if needed)
- Keep JavaScript minimal (Astro is static by default)
- Use CDN for fonts (already done)
- Lazy load images below the fold
- Minimize CSS by removing unused Tailwind classes (automatic in build)

---

## 🚀 Next Steps

1. **Add the 5 flagship articles** (highest SEO priority)
2. **Complete all 5 CVE pages** (for E-E-A-T authority)
3. **Add remaining 16 articles**
4. **Create subsection index pages** (jailbreaking, prompt-injection, general research)
5. **Generate or create OG images** for all pages
6. **Deploy to Cloudflare Pages**
7. **Submit sitemaps** to search engines
8. **Share on LinkedIn and Twitter** to build initial backlinks
9. **Monitor analytics** and adjust based on performance

---

## 📞 Support

For questions about this build:
- Review the original INSTRUCTIONS.md for detailed specifications
- Review SEO-SPEC.md for SEO strategy and keyword targets
- Check Astro documentation: https://docs.astro.build
- Check Tailwind CSS v4 docs: https://tailwindcss.com

---

**Built with ❤️ using Astro + Tailwind CSS**

**Status:** ✅ Foundation Complete | ⏳ Content Addition In Progress

**Build Date:** January 13, 2026

**Pages Built:** 13 / 45+ total

**Ready for:** Content addition and deployment
