# Abhishek Kumar: portfolio

React + Vite single-page site styled as an accounting ledger. No UI libraries: only React and plain CSS.

## Run it

```bash
# delete the old node_modules and package-lock.json first (dependencies changed)
npm install
npm run dev      # http://localhost:5173
npm run build    # output goes to dist/
```

## Edit your content

Everything you would normally change is in `src/data.js`: profile links, ratings, projects, the TalentPilot
workflow steps, experience and stack. Colours and fonts are CSS variables at the top of `src/index.css`.

| What | Where |
| --- | --- |
| Resume file the button downloads | `public/Abhishek_Kumar_Resume.pdf` (replace it, keep the name) |
| Project screenshots | `public/` (names are set per project in `src/data.js`) |
| Contact form key | `WEB3FORMS_KEY` in `src/data.js` |
| Payment demo | `src/components/PaymentDemo.jsx` |
| Workflow explorer | `src/components/PipelineExplorer.jsx` (steps live in `src/data.js`) |

## Features

- Live payment demo: send a payment, retry it, and switch the idempotency check on and off.
- Click a project to expand it. TalentPilot opens an interactive workflow explorer.
- Quick actions palette: `Ctrl K` (or `⌘K`) to jump to a section, open a profile, copy the email or switch theme.
- Light and dark theme, remembered between visits.
- Keyboard friendly, respects reduced motion, works down to phone width.

## Deploy (Vercel)

Push to GitHub and import the repo in Vercel. Framework preset: Vite. Build command `npm run build`, output `dist`.
