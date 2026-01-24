# SNAILSPLOIT V3 - INSTRUCTIONS FOR CLAUDE CODE

## ⚠️ CRITICAL: ADD, DO NOT OVERWRITE

**This is an UPDATE to an existing site, not a fresh build.**

- **V3 components** → Copy to `src/components/` (they don't exist in project yet, safe to copy)
- **API route, content, PDF** → Copy to their folders (new files, safe to copy)
- **Existing `src/pages/index.astro`** → MODIFY it: add 2 imports, change `<main>` content. **KEEP all frontmatter/meta/schema/layout**
- **Everything else** → DO NOT TOUCH

If you're unsure whether to modify something, **DON'T**. Ask first.

---

## WHAT'S IN THIS FOLDER

The `snailsploit-v3-complete` folder contains ready-to-use files:

```
snailsploit-v3-complete/
├── src/
│   ├── components/
│   │   ├── V3SnailLogo.astro    ← Snail logo with sunglasses
│   │   ├── V3Nav.astro          ← Navigation (hero + section variants)
│   │   ├── V3Hero.astro         ← Hero section with CSS smoke texture
│   │   ├── V3Card.astro         ← Feature card component
│   │   ├── V3Features.astro     ← Features grid + footer + CSS rust texture
│   │   └── V3DownloadGate.tsx   ← React email capture for PDF downloads
│   ├── pages/
│   │   └── api/
│   │       └── subscribe.ts     ← Email subscription endpoint (NEW)
│   └── content/
│       └── frameworks/
│           └── set-framework.mdx ← SET Framework article (NEW)
└── public/
    └── downloads/
        └── SET-Framework-Kai-Aizen.pdf (NEW)
```

**Note:** There is NO index.astro in this folder — you will MODIFY your existing one, not replace it.

---

## BEFORE ANYTHING — RUN AUDIT

Capture current SEO state:
```bash
echo "=== PRE-CHANGE AUDIT ===" && \
echo "[1] trailingSlash config:" && grep -n trailingSlash astro.config.mjs && \
echo "[2] BaseLayout head section:" && grep -A 20 "<head>" src/layouts/BaseLayout.astro && \
echo "[3] Existing noindex (should be none):" && grep -rn "noindex" src/ --include="*.astro" && \
echo "[4] _redirects:" && cat public/_redirects 2>/dev/null | head -10 && \
echo "[5] Current components:" && ls src/components/
```

**Show this output before proceeding.**

---

## TASK 1: COPY NEW FILES (these don't exist yet)

These are all NEW files — no existing files will be overwritten:

```bash
# NEW V3 components (these don't exist in your project yet)
cp snailsploit-v3-complete/src/components/V3*.astro src/components/
cp snailsploit-v3-complete/src/components/V3DownloadGate.tsx src/components/

# NEW API route
mkdir -p src/pages/api
cp snailsploit-v3-complete/src/pages/api/subscribe.ts src/pages/api/

# NEW content file
mkdir -p src/content/frameworks
cp snailsploit-v3-complete/src/content/frameworks/set-framework.mdx src/content/frameworks/

# NEW PDF
mkdir -p public/downloads
cp snailsploit-v3-complete/public/downloads/SET-Framework-Kai-Aizen.pdf public/downloads/
```

Verify after copying:
```bash
ls src/components/V3*
```
Should show 6 new V3 files.

---

## TASK 2: UPDATE HOMEPAGE (ADD, DON'T OVERWRITE)

Open `src/pages/index.astro` and:

1. **KEEP** the existing frontmatter (imports, title, description, canonical, schema, etc.)
2. **ADD** these imports at the top with other imports:
```astro
import V3Hero from '../components/V3Hero.astro';
import V3Features from '../components/V3Features.astro';
```

3. **REPLACE ONLY** the content inside `<main>` (or `<BaseLayout>`) with:
```astro
<main class="bg-[#0a0a0a] min-h-screen">
  <V3Hero />
  <V3Features />
</main>
```

4. **KEEP** everything else: BaseLayout wrapper, meta props, any schema/JSON-LD

**DO NOT** copy the index.astro from snailsploit-v3-complete — it's just a reference. Modify your existing file.

---

## TASK 3: ENABLE REACT (if not already)

Check if React is installed:
```bash
grep "@astrojs/react" package.json
```

If not found:
```bash
npx astro add react
```

---

## TASK 4: CREATE SET FRAMEWORK PAGE (NEW PAGE)

First check if it exists:
```bash
ls src/pages/frameworks/set-framework* 2>/dev/null || echo "Does not exist - safe to create"
```

If it doesn't exist, create `src/pages/frameworks/set-framework.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import V3DownloadGate from '../../components/V3DownloadGate';

const title = "SET Framework - Social Engineering Testing Methodology";
const description = "A comprehensive methodology for assessing organizational defenses against social engineering attacks.";
---

<BaseLayout title={title} description={description}>
  <article class="bg-[#0a0a0a] min-h-screen max-w-4xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-white mb-8">{title}</h1>
    
    <V3DownloadGate 
      client:load
      title="Download the Complete SET Framework (PDF)"
      description="Get the full 22-page tactical blueprint including threat matrices and implementation guides."
      file="/downloads/SET-Framework-Kai-Aizen.pdf"
      buttonText="Download Free PDF"
      features={[
        "Comprehensive threat matrix with success rates",
        "AI-era tactics (deepfakes, adaptive phishing)",
        "Assessment frequency guidelines by role",
        "Quantifiable metrics and benchmarks"
      ]}
    />
    
    <!-- Import and render set-framework.mdx content here -->
  </article>
</BaseLayout>
```

**IMPORTANT**: `client:load` is required for the React component to work.

---

## TASK 5: BUILD & VERIFY

```bash
npm run build
npm run preview
```

**Functional checks:**
- Homepage shows new design with smoke/rust textures
- /frameworks/set-framework/ shows download gate
- Email form logs to console (check terminal)
- PDF downloads after email submit

**SEO verification (run after build):**
```bash
echo "=== SEO CHECK ===" && \
echo "[1] Canonical tags:" && grep -r "canonical" dist/ --include="*.html" | head -5 && \
echo "[2] No noindex:" && grep -r "noindex" dist/ --include="*.html" && \
echo "[3] Meta descriptions:" && grep -r "meta.*description" dist/ --include="*.html" | head -5 && \
echo "[4] Trailing slashes in links:" && grep -oP 'href="/[^"]*[^/]"' dist/**/*.html | head -10
```

If any noindex found or canonicals missing — STOP and report.

---

## DO NOT MODIFY — CRITICAL SEO PROTECTION

**Files:**
- `public/_redirects`
- `public/robots.txt`
- `astro.config.mjs` (especially trailingSlash)
- Sitemap config
- Any existing components (V3 prefix avoids conflicts)

**On ANY page (existing or new):**
- DO NOT change or remove `<meta>` tags
- DO NOT change or remove `<link rel="canonical">` tags
- DO NOT change or remove FAQPage schema / JSON-LD
- DO NOT change or remove TechArticle schema
- DO NOT add `noindex` or `nofollow` anywhere
- DO NOT change existing URL slugs
- DO NOT modify BaseLayout.astro head section

**When creating new pages:**
- Use existing BaseLayout.astro as-is (it handles meta/canonical)
- Pass title/description as props — don't hardcode in layout
- Ensure canonical ends with trailing slash

## RULES

- ALL internal links must end with `/` (trailing slash)
- React components need `client:load` directive
- Only CREATE new V3 files, don't modify existing files

---

## EMAIL PROVIDER SETUP (LATER)

The `subscribe.ts` API route defaults to console logging. To enable real email capture:

1. Choose provider: ConvertKit, Buttondown, or Resend
2. Add env vars to `.env`:
   ```
   CONVERTKIT_API_KEY=xxx
   CONVERTKIT_FORM_ID=xxx
   ```
3. Uncomment the relevant function in `src/pages/api/subscribe.ts`
