# One Shot Slice Fix — Shopify Theme

A Shopify Online Store 2.0 theme for a golf product landing page.

## Getting Started

1. Clone this repo
2. Install [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
3. Run `shopify theme dev` to preview locally
4. Use the Shopify theme customizer to configure sections, images, and colors

## Theme Structure

```
├── assets/          → CSS & JS
├── config/          → Theme settings schema & defaults
├── layout/          → theme.liquid (master HTML shell)
├── locales/         → Translation strings
├── sections/        → All page sections (Liquid + schema)
├── snippets/        → Reusable Liquid partials
└── templates/       → JSON templates (OS 2.0)
```

## Sections

1. **Header** — Logo, search, cart (static in layout)
2. **Product Hero** — Image, pricing, reviews, features, Add to Cart form
3. **Logo Banner** — "As featured in..." media logos
4. **Hero CTA** — Full-width call-to-action
5. **Bonuses** — Bonus cards with images and descriptions
6. **Coach Bio** — Coach photo and bio text
7. **Guarantee** — Money-back guarantee badge and copy
8. **FAQ Accordion** — Expandable Q&A items
9. **Related Products** — Collection-powered product grid
10. **Footer** — Link columns (static in layout)
11. **Sticky Cart Bar** — Fixed bottom bar on product pages

## Customization

- **Colors & Fonts**: Theme Settings in the Shopify customizer (backed by `config/settings_schema.json`)
- **Section content**: Edit via the theme customizer — all sections have configurable settings and blocks
- **CSS**: `assets/theme.css`
- **JS**: `assets/theme.js`

## Tech Stack

- Shopify Online Store 2.0 (JSON templates)
- Liquid templating
- Pure CSS (no preprocessor)
- Vanilla JavaScript
- Responsive design with mobile breakpoints
