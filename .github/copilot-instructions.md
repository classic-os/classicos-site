# GitHub Copilot Instructions: ClassicOS Landing Site

## Product

ClassicOS landing site (classicos.org) - Product marketing layer

## Tech Stack

- Next.js 16.1.1 (App Router)
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.24.12
- TypeScript 5.x

## Key Rules

1. **This is marketing, not the app** - No wallet integration, no DeFi interactions
2. **Stateless site** - No user accounts, no live data
3. **Router** - Every section should have CTAs to app.classicos.org
4. **Fast and focused** - Mobile-first, minimal dependencies

## Messaging

**Classic OS is the economic operating system for Ethereum Classic.**

Four modules by economic intent:
- **Produce** - Create capital (Mining OS)
- **Portfolio** - Observe capital (DeFi dashboard)
- **Deploy** - Allocate capital (DeFi automation)
- **Markets** - Access liquidity (DEX + Brale)

**Value prop:** Transform global energy into yield-bearing assets on the only mature PoW chain with smart contracts.

## Protected Files

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `.env.local`

## Validation

Before committing:
```bash
npm run lint
npm run build
```

Both must pass.

## URL Structure

- Landing: classicos.org
- App: app.classicos.org
- Docs: docs.classicos.org (NOT /docs)

## Style

- Use Tailwind utility classes
- Use Framer Motion for subtle animations
- Dark backgrounds, ETC green (#33cc33) accents
- Mobile-first responsive

## CTAs

Primary: "Launch App" → app.classicos.org
Secondary: "Read Docs" → docs.classicos.org

## What NOT to Add

- No wallet connection
- No portfolio views
- No DeFi interactions
- No blog/CMS
- No user accounts

If it's interactive, it belongs in the app.
