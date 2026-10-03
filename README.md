# DevPath Complete

Modular React + TypeScript learning roadmap app. Features searchable paths, Role/Skill filters, detail pages, collapsible topic trees, completion tracking, per-roadmap reset, and localStorage persistence.

## Requirements
Node.js 20+ and npm.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Structure
```text
src/
  app/                 Routing and app composition
  components/layout/   Shared shell and navigation
  components/roadmap/  Cards and interactive topic tree
  data/                Roadmap content
  hooks/               Progress state and persistence
  pages/               Home, detail, and not-found pages
  styles/              Responsive global styling
  types/               TypeScript domain types
  utils/               Topic traversal and progress calculations
  main.tsx             React entry point
```

## Production note
This is a frontend application foundation, not a hosted multi-user service or a complete copy of roadmap.sh. Progress is browser-local. Add backend persistence/authentication, automated tests, monitoring, and reviewed curriculum before offering it as a multi-user production service. Content and styling are independently authored.
