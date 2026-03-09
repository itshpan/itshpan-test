# Session Log — One Shot Slice Fix

## What Was Built

### 1. Static Landing Page (first commit)
Created a static HTML/CSS/JS clone of a Performance Golf "One Shot Slice Fix" product page with 11 sections:
- Header, Product Hero, Add to Cart + USP, Logo Banner, Hero CTA, Bonuses (3 cards), Coach Bio, Money-Back Guarantee, FAQ Accordion, Related Products, Footer + Sticky Cart Bar

Files: `index.html`, `css/styles.css`, `js/main.js`

### 2. Shopify OS 2.0 Conversion (second commit)
Converted the static page into a full Shopify Online Store 2.0 theme:

**Deleted:** `index.html`, `css/`, `js/`

**Created:**
- `layout/theme.liquid` — master HTML shell with `content_for_header`, `content_for_layout`, CSS variables from theme settings
- `assets/theme.css` — all styles (`:root` block removed, driven by theme settings in layout)
- `assets/theme.js` — FAQ accordion, sticky cart bar, smooth scroll
- `config/settings_schema.json` — theme settings: colors (bg, text, accent, green, green-dark), typography (heading + body font pickers)
- `config/settings_data.json` — default values
- `locales/en.default.json` — English translation strings
- `snippets/star-rating.liquid` — reusable star rating SVG component

**Sections (in `sections/`):**
| File | Type | Notes |
|------|------|-------|
| `header.liquid` | Static (layout) | Logo image picker, cart count, search link |
| `product-hero.liquid` | Content | Real `form action="/cart/add"`, product object bindings, coach avatar, feature blocks |
| `logo-banner.liquid` | Content | Heading + logo image blocks |
| `hero-cta.liquid` | Content | Heading, body, button text/link |
| `bonuses.liquid` | Content | Bonus card blocks (image, tag, title, desc, value) |
| `coach-bio.liquid` | Content | Image picker + richtext bio |
| `guarantee.liquid` | Content | Badge image + richtext body |
| `faq-accordion.liquid` | Content | FAQ item blocks (question text + richtext answer) |
| `related-products.liquid` | Content | Collection picker, product limit range |
| `footer.liquid` | Static (layout) | Link column blocks with link_list |
| `sticky-cart-bar.liquid` | Static (layout) | Only renders on product pages |
| `main-collection.liquid` | Stub | Basic collection grid |
| `main-cart.liquid` | Stub | Cart items + checkout button |
| `main-page.liquid` | Stub | Page title + content |
| `main-blog.liquid` | Stub | Blog article list |
| `main-article.liquid` | Stub | Article content |
| `main-search.liquid` | Stub | Search form + results |
| `main-404.liquid` | Stub | 404 page |
| `main-list-collections.liquid` | Stub | Collection grid |
| `main-product.liquid` | Stub | Product content placeholder |

**Templates (in `templates/`):**
- `product.json` — full landing page: product-hero → logo-banner → hero-cta → bonuses → coach-bio → guarantee → faq → related
- `index.json` — homepage: hero-cta → related products
- `collection.json`, `cart.json`, `page.json`, `blog.json`, `article.json`, `search.json`, `404.json`, `list-collections.json` — minimal stubs

### 3. Sandbox Environment (third commit — later removed)
Created `dawn/` and `sandbox-theme/` subdirectories with practice sections. These were removed in a cleanup commit to follow best practice: **one repo = one theme at root**.

### 4. Cleanup (fourth commit)
- Removed `dawn/` and `sandbox-theme/` subdirectories
- Renamed GitHub repo from `itshpan-test` → `one-shot-slice-fix`
- Renamed local folder from `itshpan:test` → `one-shot-slice-fix`
- Updated git remote URL to match

---

## Git History

```
Branch: dev (active)
Branch: main

Commits (dev):
e2f6521 Remove dawn and sandbox-theme subdirectories
4106967 Add sandbox environment with Dawn theme and practice sections
1d75b44 Convert static landing page to Shopify OS 2.0 theme
396d537 Add One Shot Slice Fix landing page
38fa3f3 Update .gitignore for Liquid, Node, Python, and Shopify CLI
264fb06 Initial commit: add .gitignore and README
```

**GitHub repo:** `itshpan/one-shot-slice-fix`
**Local folder:** `~/Documents/one-shot-slice-fix`

---

## Environment Setup

| Tool | Status |
|------|--------|
| Shopify CLI | 3.91.1 (installed via Homebrew) |
| GitHub CLI | Authenticated as `itshpan` |
| Dev store | `hpan-dev-store.myshopify.com` |
| Editor | Cursor |

### Shopify Themes on Dev Store
| Theme | Role | ID |
|-------|------|----|
| test-data | live | #160252494036 |
| Horizon | unpublished | #160252428500 |
| Development theme | development | #160253509844 |

### To start the dev server:
```bash
cd ~/Documents/one-shot-slice-fix
shopify theme dev --store hpan-dev-store.myshopify.com
```
- Enter store password when prompted (found in Shopify Admin → Online Store → Preferences → Password protection)
- Press `E` to open theme editor/customizer
- Files sync automatically on save
- Must run in an interactive terminal (not from Claude's Bash tool)

---

## Key Decisions

1. **CSS custom properties moved to `layout/theme.liquid`** — `:root` block is generated with Liquid so colors/fonts come from Shopify theme settings, not hardcoded in CSS
2. **Add to Cart uses real Shopify forms** — `{%- form 'product', product -%}` with hidden variant ID input, checks `product.available`
3. **Related products use collection picker** — merchant selects a collection in the customizer rather than hardcoding products
4. **Header/footer/sticky-cart are static sections** — rendered from `layout/theme.liquid`, not included in template JSON
5. **No build tools** — raw CSS and JS, no Webpack/Tailwind/bundler
6. **Single theme at repo root** — best practice, not nested in subfolders

---

## Issues Encountered & Solutions

1. **GitHub auth failed** — `git push` returned 401. Fixed by running `gh auth login --web` then `gh auth setup-git`
2. **Repo didn't exist on GitHub** — Created with `gh repo create`, then had to `git remote set-url` because origin already existed
3. **Shopify CLI needs interactive terminal** — `shopify theme dev` can't run through Claude's Bash tool because it prompts for store password. Must run in Cursor's terminal directly.
4. **Folder colon in name** — macOS allowed `itshpan:test` but GitHub converted to `itshpan-test`. Renamed everything to `one-shot-slice-fix` for clarity.
5. **Shopify theme push errors (gift card + schema)** — Pushing to the `Development (77df98-USERnoMacBook-Air)` theme (`#160253509844`) initially logged errors: `templates/gift_card.liquid could not be deleted` and `config/settings_schema.json` missing required `theme_documentation_url` in section 1. Resolution: added `"theme_documentation_url"` to the `theme_info` object in `config/settings_schema.json`, then re-ran `shopify theme push --store hpan-dev-store.myshopify.com` targeting the development theme until it deployed cleanly. The dev theme is now in sync with the repo and ready for safe page/section experiments without touching the live `test-data` theme.

---

## Next Steps

- [x] Connect Shopify CLI to `hpan-dev-store` (ran `shopify theme dev --store hpan-dev-store.myshopify.com` from repo root on 2026-03-10)
- [ ] Test all sections in the theme customizer
- [ ] Practice git branching workflow (e.g., `git checkout -b feature/hero-section`)
- [ ] Practice breaking things: invalid JSON, bad Liquid syntax, missing commas
- [ ] Try Claude-assisted editing of sections via Cursor
- [x] Fix Shopify theme schema error by adding required `theme_documentation_url` to `config/settings_schema.json` and re-pushing the development theme until `shopify theme push` reports no errors.
- [ ] Create and document an AI-assisted workflow for building a new page (from a Markdown brief) in the existing theme without creating a new theme.

---

## AI-Assisted Page Creation Workflow (Planned)

- **Goal**: Prove we can take a Google Doc (or Markdown) page brief and turn it into a real Shopify page using only:
  - The existing `one-shot-slice-fix` theme in this repo
  - A dedicated development theme on the `hpan-dev-store` sandbox
  - An AI assistant inside Cursor for code edits
- **Constraints**:
  - Do not create a new Shopify theme; work entirely within the current theme code and dev theme on the store.
  - Follow the theme’s existing conventions (sections, CSS, layout) instead of inventing a new design system.
- **Planned workflow**:
  1. Write a Markdown page brief (`docs/one-shot-slice-test-page.md`) with:
     - Page name, target URL handle, which Shopify template to use
     - Section-by-section copy + design instructions mapped to existing sections (hero, bonuses, FAQ, etc.)
  2. Use AI in Cursor to:
     - Create or update a JSON template in `templates/` (e.g., `page.one-shot-slice.json`) that wires up the sections in the desired order.
     - Adjust existing sections (or add small new ones) following the theme’s patterns when the brief calls for layout changes.
  3. Push changes to the dev theme with `shopify theme push` and test via `shopify theme dev` / theme editor.
  4. Iterate on copy/layout by editing the Markdown brief and corresponding theme files until the page matches the spec.

---

## Original Instructions Given

The task started with instructions to create a static HTML/CSS/JS clone of the Performance Golf "One Shot Slice Fix" product page, with this target structure:

```
one-shot-slice-fix/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── (place your own images here)
```

The CSS was provided with custom properties for theming (`:root` variables for colors, fonts, max-width, cart bar height), a full reset, and styles for: header, product hero, badges, ratings, pricing, coach avatar, feature lists, add-to-cart button, USP row, sticky cart bar, logo banner, hero CTA, bonuses, coach bio, guarantee, FAQ accordion, related products, footer, and responsive breakpoints at 992px and 600px.

The page was then converted to Shopify OS 2.0 because the project is for Shopify.

### Sandbox Setup Instructions (also provided)

A full sandbox environment guide was given covering:
1. Create Shopify Partner account + dev store
2. Install Shopify CLI (`brew install shopify-cli`)
3. Init Dawn theme (`shopify theme init sandbox-theme`)
4. Open in Cursor
5. Init git repo with `dev` branch
6. Create GitHub repo and push
7. Connect Shopify CLI (`shopify theme dev`)
8. Open theme preview (press `E`)
9. Create practice sections (sandbox-test, hero-test, product-test)
10. Practice AI editing via Claude in Cursor
11. Practice git workflow (status → add → commit → push)
12. Practice breaking things (invalid JSON, schema errors, bad Liquid)
13. Practice branching (feature branches, merge/rebase)
14. Add `sandbox-ai-rules.md` for AI coding conventions

The sandbox was set up but later cleaned up — `dawn/` and `sandbox-theme/` were removed to keep the repo as a single clean Shopify theme. The `sandbox-ai-rules.md` file was kept at root for reference.
