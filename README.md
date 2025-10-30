# Kurniawan MC & Event Organizer (Frontend)

Next.js 14 (App Router) + Tailwind CSS frontend-only site with dummy data and client-side forms. Ready for Vercel.

## Local Development

```bash
# install deps
npm i # or pnpm i / yarn

# run dev
npm run dev
```

## Deploy to Vercel
- Push this repo to GitHub/GitLab/Bitbucket
- Import in Vercel → Next.js auto-detected
- Build: `next build` (default)
- Deploy

## Structure
- `app/` pages and layouts
- `components/` shared UI
- `data/` dummy JSON

Notes: Forms simulate API delay and save last submission to localStorage.
