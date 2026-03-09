# Sandbox AI Rules — Shopify Theme Development

## Theme Architecture
- This is a **Shopify Online Store 2.0** theme
- Templates are **JSON files** in `templates/` — they reference sections, not HTML
- Sections live in `sections/` — each has markup + a `{% schema %}` block
- Snippets in `snippets/` are reusable partials rendered with `{% render 'name' %}`
- Layout in `layout/theme.liquid` is the master HTML shell
- Assets (CSS/JS) live in `assets/` — loaded via `{{ 'file.css' | asset_url | stylesheet_tag }}`

## Naming Conventions
- Section files: `kebab-case.liquid` (e.g., `hero-cta.liquid`, `product-hero.liquid`)
- Snippet files: `kebab-case.liquid` (e.g., `star-rating.liquid`)
- Template files: `resource-name.json` (e.g., `product.json`, `collection.json`)
- Setting IDs: `snake_case` (e.g., `heading_text`, `bg_color`)
- Block types: `snake_case` (e.g., `feature_item`, `bonus_card`)
- CSS classes: `kebab-case` (e.g., `.product-hero`, `.btn-add-to-cart`)

## Schema Rules
- Every section MUST have a `{% schema %}` block at the end
- Schema is valid JSON — no trailing commas, no comments
- Settings types: `text`, `textarea`, `richtext`, `image_picker`, `url`, `color`, `range`, `select`, `checkbox`, `collection`, `product`, `link_list`, `font_picker`
- Blocks allow repeatable content (e.g., FAQ items, feature lists)
- Presets make sections available in the theme customizer
- Static sections (header/footer) should NOT have presets

## Liquid Syntax
- Output: `{{ variable }}`
- Logic: `{% if condition %}...{% endif %}`
- Loops: `{% for item in collection %}...{% endfor %}`
- Filters: `{{ product.price | money }}`, `{{ image | image_url: width: 800 | image_tag }}`
- Section settings: `{{ section.settings.setting_id }}`
- Block settings: `{{ block.settings.setting_id }}`
- Block attributes: Always include `{{ block.shopify_attributes }}` on block wrappers
- Translation strings: `{{ 'key.path' | t }}`

## Common Liquid Objects
- `product` — available on product pages
- `collection` — available on collection pages
- `cart` — available everywhere
- `shop` — store info (name, URL, etc.)
- `routes` — URL helpers (cart_url, search_url, root_url)
- `request` — page type, locale, host
- `settings` — global theme settings from config/settings_schema.json
- `section.settings` — current section's settings
- `linklists` — navigation menus

## Typography Rules
- Headings use `var(--font-heading)`
- Body text uses `var(--font-main)`
- Font sizes should be responsive (use media queries or clamp())
- Max line length: ~70 characters for readability

## Color System
- All colors defined as CSS custom properties in `:root` (set in theme.liquid)
- Reference via `var(--color-name)` in CSS
- Never hardcode colors in section markup — use settings or CSS variables
- Theme settings drive colors: `settings.color_bg`, `settings.color_text`, etc.

## Responsive Design
- Mobile-first approach
- Breakpoints: 600px (mobile), 992px (tablet)
- Use CSS Grid for layouts, Flexbox for components
- Test all sections at 320px, 768px, and 1200px widths

## Add to Cart
- Always use `{%- form 'product', product -%}` with a hidden variant ID input
- Check `product.available` before enabling the submit button
- Use `{{ product.selected_or_first_available_variant.id }}` for the variant

## Common Mistakes to Avoid
- Missing commas in JSON schema → Shopify CLI will show parse errors
- Using `product` object outside product templates → it will be nil
- Forgetting `{{ content_for_header }}` in layout → breaks Shopify admin
- Forgetting `{{ content_for_layout }}` in layout → no page content renders
- Inline `<style>` with Liquid in sections works but prefer CSS variables
- Don't use `asset_url` for external URLs — only for files in `assets/`

## Git Workflow
- `main` branch: stable/production
- `dev` branch: active development
- Feature branches: `feature/section-name`
- Commit messages: descriptive, present tense ("Add hero section", "Fix FAQ schema")
- Always test with `shopify theme dev` before pushing

## Shopify CLI Commands
- `shopify theme dev` — start local dev server with hot reload
- `shopify theme push` — push theme to store
- `shopify theme pull` — pull theme from store
- `shopify theme check` — lint theme for errors
- `shopify theme info` — show connected store/theme info
