---
title: "One Shot Slice Test Page"
handle: "one-shot-slice-test"
template: "page.one-shot-slice"
source_doc: "TODO: paste Google Doc URL here"
goal: >
  Recreate a marketing/landing page inside the existing One Shot Slice Fix theme,
  using only this theme's conventions (sections, typography, colors) and an AI
  assistant in Cursor. No new theme; only new/updated sections and a page template.
---

## 1. Page Overview

- **Purpose**: Education + conversion for the "One Shot Slice Fix" offer.
- **Traffic source**: Paid ads and email.
- **Primary CTA**: "Add to Cart" for the main One Shot Slice Fix product.
- **Secondary CTA**: "Learn more" anchor links to FAQ and Coach Bio.

## 2. Section Map → Theme Sections

This page should be implemented using the existing theme sections wherever possible:

1. **Hero / Product Overview**
   - **Section type**: `product-hero.liquid`
   - **Content**:
     - Headline: "Fix Your Slice in One Shot"
     - Subhead: "A simple, field-tested system to straighten your ball flight in a single range session."
     - Bullets (3–4): benefits-focused, short phrases.
     - Primary button: "Add One Shot Slice Fix to Cart"
     - Supporting badges: money-back guarantee, number of golfers helped, etc.
   - **Design notes**:
     - Use existing hero layout and typography; only change text and images.
     - Hero image should show golfer before/after or ball flight arc.

2. **Logo Banner / Social Proof**
   - **Section type**: `logo-banner.liquid`
   - **Content**:
     - Heading: "Trusted by golfers from these brands and courses"
     - Logo slots: up to 6 logos (can be placeholders).
   - **Design notes**:
     - Keep the same spacing and background color as existing logo banner.

3. **Hero CTA Strip**
   - **Section type**: `hero-cta.liquid`
   - **Content**:
     - Short headline: "Ready to straighten your slice?"
     - Body: one-sentence reassurance about difficulty and time commitment.
     - Button: "Start the One Shot Slice Fix Today"
   - **Design notes**:
     - Use contrasting background (existing accent color) to stand out.

4. **Bonuses Stack**
   - **Section type**: `bonuses.liquid`
   - **Content**:
     - Heading: "Limited-Time Bonuses Included Today"
     - 3–4 bonus cards, each with:
       - Tag: "Bonus #1", "Bonus #2", etc.
       - Title: concise benefit name.
       - Description: 1–2 sentences.
       - Value: "($97 Value)"-style text.
   - **Design notes**:
     - Use existing card layout; copy should fit without layout changes.

5. **Coach Bio**
   - **Section type**: `coach-bio.liquid`
   - **Content**:
     - Coach name: e.g., "John Doe, PGA Teaching Professional"
     - Short origin story: 2–3 paragraphs about discovering the method.
     - Credibility bullets: years teaching, certifications, notable students.
   - **Design notes**:
     - Reuse the existing image + text layout; only replace copy and image.

6. **Guarantee**
   - **Section type**: `guarantee.liquid`
   - **Content**:
     - Heading: "60-Day Money-Back Guarantee"
     - Body: 2–3 paragraphs explaining the risk-free trial and refund policy.
   - **Design notes**:
     - Keep guarantee badge image; update supporting text only.

7. **FAQ**
   - **Section type**: `faq-accordion.liquid`
   - **Content**:
     - 5–7 most common questions about the One Shot Slice Fix.
     - Each answer: 2–3 short paragraphs max.
   - **Design notes**:
     - Use existing accordion behavior; focus on clear, scannable copy.

8. **Related Products**
   - **Section type**: `related-products.liquid`
   - **Content**:
     - Heading: "You Might Also Like"
     - Use collection picker in the theme editor to choose related offers.
   - **Design notes**:
     - Keep grid layout as-is; no new styling required.

## 3. Copy Draft (AI-Friendly)

This section is meant to be rewritten/refined by AI, but provides a starting point.

### 3.1 Hero Copy

- **Headline**:  
  "Fix Your Slice in One Shot"

- **Subhead**:  
  "Discover a simple, field-tested system that straightens your ball flight and adds distance in a single focused range session."

- **Bullets**:
  - "Eliminate the banana slice that’s costing you fairways"
  - "Build a repeatable, reliable swing path you can trust under pressure"
  - "Get step-by-step drills you can run in under 45 minutes"
  - "Designed for everyday golfers, not tour pros"

- **Primary CTA button text**:  
  "Add One Shot Slice Fix to Cart"

### 3.2 CTA Strip Copy

- **Heading**:  
  "Ready to straighten your slice?"

- **Body**:  
  "You don’t need a brand-new swing or endless range sessions. Follow a clear, simple system that shows you exactly what to adjust and how to lock it in."

- **Button**:  
  "Start the One Shot Slice Fix Today"

### 3.3 Guarantee Copy

- **Heading**:  
  "60-Day Money-Back Guarantee"

- **Body**:  
  "Try the One Shot Slice Fix for a full 60 days. Watch the lessons, run through the drills, and take it to the course. If you don’t see a meaningful improvement in your ball flight, contact us and we’ll refund every penny. No hoops, no hassle, no risk to you."

## 4. Implementation Notes (for AI + Dev)

- **Template file**:
  - Create a new JSON template named `page.one-shot-slice.json` in `templates/`.
  - Structure:
    - Reference the sections in this order: `product-hero`, `logo-banner`, `hero-cta`, `bonuses`, `coach-bio`, `guarantee`, `faq-accordion`, `related-products`.
    - Use existing section IDs and block schemas; only change `settings` and `blocks` content.

- **Theme editor wiring**:
  - After pushing the template, create a new Shopify page using template `page.one-shot-slice`.
  - In the theme editor, connect:
    - The correct product to `product-hero`.
    - A "Slice Fix Bonuses" collection (or similar) to `related-products`.
    - Images for hero, coach, and logos.

- **Iteration loop**:
  1. Update this Markdown file with new copy/design notes.
  2. Use AI in Cursor to translate changes into:
     - JSON template edits in `templates/page.one-shot-slice.json`
     - Minor section tweaks in `sections/*.liquid` when necessary.
  3. Run `shopify theme push` to the development theme.
  4. Preview via `shopify theme dev` and adjust until the page matches the brief.

