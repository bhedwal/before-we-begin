# Meridian Systems — Automation Audit Landing Page

Single scrolling page at `/` for Meridian Systems (founder DJ Wright, Las Vegas, NV). Goal: get visitors to request an automation audit. Calm, practical tone, no hype.

## Design
- Dark graphite base (#0e0f11 / #1a1c1f), muted gray text (#8a8f98), orange accent (#ff6a1a) only on CTAs and key highlights.
- Fonts: Space Grotesk (headings) + DM Sans (body).
- Systems feel: thin grid lines, numbered steps, mono-style labels and tags.
- Mobile-first; sticky header with an always-visible "Request Your Automation Audit" button.

## Sections
1. **Hero** — headline on operational leverage, one supporting line, orange CTA, "See Our Approach" link that scrolls to the process section, workspace image.
2. **Audit Process / Services** — 3–4 numbered system cards: name, focus (Workflow Automation / AI Systems / Process Optimization), impact tag, scope, and a "Request audit" button on each.
3. **Trust** — DJ Wright portrait, 3 credibility bullets, workspace and dashboard images.
4. **Social Proof** — 3–4 short testimonials (first name, role, business type) with workflow imagery.
5. **Logistics** — based in Las Vegas, remote and on-site consulting, audit length, what happens during the audit, who it's for and not for.
6. **Final CTA** — large section that restates the audit offer, with an orange button.
7. Minimal footer.

## CTA behavior
All audit buttons are demo buttons for now. Clicking one shows a short confirmation message ("Audit request received — we'll be in touch"). No forms and no email capture. A real booking link can be connected later.

## Images (AI-generated, realistic, not stock-like)
- Hero: consultant at a multi-monitor workspace with dashboards.
- Founder portrait: approachable, professional.
- Workspace detail with workflow diagrams on screens.
- Team collaboration over a business systems dashboard.
- Close-up of an operations dashboard / workflow board.

## Placeholder content
Testimonials, credibility bullets, and audit length are written by me as realistic placeholders. Send the real ones later and I'll swap them in.

## Technical details
- Rewrite `src/routes/index.tsx` with its own head() metadata. Section components go in `src/components/landing/`.
- Theme tokens in `src/styles.css`; fonts loaded via a link tag in `__root`; sonner Toaster mounted in the root.
- Images saved to `src/assets/` as optimized JPGs.
