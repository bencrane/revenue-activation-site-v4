# Project Context

Revenue Activation Site - A proposal/contract signing application built with Next.js 16.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4
- **UI**: shadcn/ui components, Radix UI primitives
- **Icons**: Lucide React
- **Signature**: signature_pad library

## Project Structure
```
src/
  app/
    page.tsx              # Landing page
    layout.tsx            # Root layout
    terms/page.tsx        # Terms of Service
    p/[proposal_id]/      # Proposal viewing/signing
      page.tsx
      SignatureSection.tsx
      not-found.tsx
  components/
    sections/             # Landing page sections
    shared/               # Reusable components
  lib/
    utils.ts              # Utility functions (cn helper)
```

## API
- Backend: `https://api.serviceengine.xyz`
- Public proposals: `GET /api/public/proposals/{proposal_id}`

## Test Data
- **Test Proposal ID**: `d0e3619d`
- **View at**: http://localhost:3002/p/d0e3619d

## Design System
- Dark theme (black background, white text)
- Accent color: Mint/teal green

## Running Locally
```bash
npm run dev -- -p 3002   # Port 3000/3001 often in use
```

---

## Learnings & Gotchas

<!-- Add learnings here as you encounter them -->

---

## Decisions Log

<!-- Document architectural decisions here -->
