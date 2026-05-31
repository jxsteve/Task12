# Workspace — Notion edition

Multi-page React + TypeScript app with role-gated routes. Notion design system, light mode.

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:5173>. Pick a role on `/login` and you're in.

## Routes

| Path         | Access                       |
| ------------ | ---------------------------- |
| `/login`     | Public                       |
| `/dashboard` | Any signed-in account        |
| `/profile`   | Any signed-in account        |
| `/settings`  | Admin only                   |
| `*`          | Redirects to `/dashboard`    |

## Design notes

This is the third pass — Notion's design language, light mode throughout.

**Layout.** Left sidebar (260px, off-white `rgb(247,247,245)`) with workspace switcher at the top, nav items in groups with subtle labels ("Workspace"), and a user chip at the bottom. Thin breadcrumb topbar above each page. Main content capped at 880px with generous side padding (64px). Mobile collapses the sidebar.

**Color.** Warm dark text on white — `rgb(55, 53, 47)` rather than pure black. Hairline borders at `rgba(55, 53, 47, 0.09)`. Hover states are 4–8% black tints, not boxes with borders. Notion's signature tag palette is present as CSS vars: gray, brown, orange, yellow, green, blue, purple, pink, red — each with the correct text + background pairing.

**Typography.** Inter via Google Fonts with `cv11` and `ss01` enabled. H1 at 40/48 weight 700, body at 14/20. Tracking tightens slightly on larger sizes.

**Components.**
- **Radio rows** for the role picker — Notion-style radios (small outlined circle that fills with primary on select, no card frame). Hover tint, selected gets a `bg-selected` blue wash.
- **Tag chips** with the full Notion palette — used for role, status, category.
- **Property rows** (`prop`) — the key-value pattern from Notion's database row view. 140px label column, value column, subtle hover tint.
- **Database list** (`db`) — bordered table with grid-template-columns set per panel. Hairline row dividers, emoji as the row icon, tags in their own column.
- **Callout** — the info block, soft-tinted background, leading emoji.
- **Switch** — Notion's small slider (26×14, blue when on), used in Settings.
- **Buttons** — quiet by default (no fill), `--primary` is Notion blue (`rgb(35, 131, 226)`), `--ghost` for chrome controls.

**Dashboard simplification.** Replaced the metric card grid with a single horizontal summary strip (label / number / delta separated by 32px gaps, hairline top + bottom). Below it, a database-style member/draft/report list with tag columns. Quick actions are property rows. Far fewer panels and frames than the M3 version — the page reads like a Notion document.

**Profile simplification.** Avatar block at the top, name as H1, role tag in a meta line. Below it, a single column of property rows. No banner, no two-column layouts, no sub-cards. Just the data.

## Tokens

`src/index.css` `:root` holds the entire system — text alphas, tag color pairs, radii (3 / 4 / 6 / 8 / pill), motion easing. Swap a few vars to reskin.
