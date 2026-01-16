# Claude Code Instructions: ClassicOS Landing Site

## Product Context

You're working on the **ClassicOS landing site** (classicos.org), the product marketing layer in a coordinated ecosystem:

```
EthereumClassic.com
    ↓ (awareness)
ClassicOS.org (THIS SITE)
    ↓ (consideration)
app.classicos.org
    ↓ (conversion)
docs.classicos.org
    ↓ (documentation / onboarding)
```

**Your role:** Market Classic OS as the complete economic operating system for Ethereum Classic. Convert visitor interest into app usage.

**Architect:** Christopher Mercer (ETCswap V2/V3/Launchpad founder, USC primary organizer, ETC core dev, Fukuii contributor)

---

## Tech Stack

- **Next.js:** 16.1.1 (App Router)
- **React:** 19.2.3
- **Tailwind CSS:** 4.x
- **Framer Motion:** 12.24.12
- **TypeScript:** 5.x
- **Node:** 22.x

---

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

---

## Product Positioning (Polished Messaging)

### What Classic OS Is

**Classic OS is the economic operating system for Ethereum Classic.**

It combines four interconnected modules organized by economic intent:

1. **Produce** - Create capital through mining (Mining OS)
2. **Portfolio** - Observe capital and positions (DeFi dashboard)
3. **Deploy** - Allocate capital into strategies (DeFi automation)
4. **Markets** - Access liquidity and stablecoins (DEX + Brale integration)

### Unique Value Proposition

Classic OS enables the **only pathway where global energy sources can be converted into a yield-bearing asset on a single Proof-of-Work chain**, maintaining ETC's non-custodial security properties while generating sustainable yields through DeFi.

**Economic Flywheel:**
1. Miners produce ETC (capital creation)
2. Mining OS directs capital into DeFi strategies (capital deployment)
3. Increased DeFi activity generates transaction fees (miner revenue increases)
4. ETC holders earn protocol fees via liquidity provision (capital retention)
5. Higher yields attract more capital (positive feedback loop)

### What We're Building

- **Mining OS** - Custom-built (inspired by HiveOS), not a fork
- **DeFi Automation** - Custom-built (inspired by DeFi Saver), not a fork
- **Stablecoin Integration** - Brale business partnership (not building our own stablecoin)
- **Multi-EVM Interface** - Distribution layer for cross-chain capital flows

### Vertical Integration Advantage

Built by the architect of:
- ETCswap V2/V3/Launchpad (DEX protocols)
- Classic USD (USC) - ETC-native stablecoin
- Fukuii ETC client - First-class enterprise client with no upstream dependencies
- Ethereum Classic core development

**Why this matters:** Single architect building both protocols AND interface = deep integration, no compromises.

---

## Core Principles

### This Is a Marketing Site

- **Stateless** - No wallet connection, no user accounts
- **Informational** - Explain the vision, not execute it
- **Router** - Direct visitors to the app
- **Fast** - Optimized for speed and mobile

### What NOT to Add

❌ **No wallet integration** - Marketing only, not an app
❌ **No portfolio views** - Route to app instead
❌ **No DeFi interactions** - That's the app's job
❌ **No content engine** - No blog, no CMS
❌ **No user accounts** - Stateless marketing site

If it's interactive beyond scrolling and clicking CTAs, **it belongs in the app, not here**.

---

## Site Structure (Target Sections)

### 1. Hero
- **Headline:** "The Economic Operating System for Ethereum Classic"
- **Subhead:** Transform global energy into yield-bearing assets on the only mature PoW chain with smart contracts
- **Primary CTA:** "Launch App" → app.classicos.org
- **Secondary CTA:** "Read Docs" → docs.classicos.org

### 2. Problem / Solution
- **Problem:** Mining produces capital that exits the ecosystem. DeFi is fragmented.
- **Solution:** Classic OS creates a unified system for capital production, observation, deployment, and access.

### 3. Four Modules (Organized by Economic Intent)
Each module gets a section:

**Produce**
- Create capital through mining
- Mining OS with payout detection
- Direct pathway from earned ETC to yield opportunities

**Portfolio**
- Observe capital across all DeFi positions
- Unified dashboard, transaction history, P&L tracking
- Real-time health monitoring

**Deploy**
- Allocate capital into DeFi strategies
- Automated position management, liquidation protection
- Strategy builder with execution simulation

**Markets**
- Access liquidity and stablecoins
- DEX aggregation, Brale stablecoin integration
- Fiat on-ramp via ACH, cross-chain bridging

### 4. Economic Flywheel
Visualize the capital flow cycle:
Mining → Portfolio → Deploy → Markets → Mining (loop)

### 5. Vertical Integration
- Built by ETCswap founder
- Same architect building protocols (ETCswap, USC, Fukuii) AND interface (Classic OS)
- No compromise, deep integration

### 6. Social Proof / Ecosystem
- Part of cohesive ETC product suite
- Links to EthereumClassic.com, ETCswap, Classic USD
- Fukuii client infrastructure

### 7. Final CTA
- "Launch Classic OS" → app.classicos.org
- "Read Documentation" → docs.classicos.org
- "Explore Ethereum Classic" → ethereumclassic.com

### 8. Footer
- Links: Docs, GitHub, Ecosystem sites
- Legitimacy signals: ETC client contributor, ETCswap founder

---

## Messaging Guidelines

### Tone

- **Confident** - This is mature infrastructure, not a startup
- **Clear** - No jargon, explain complexity simply
- **Action-oriented** - Every section drives forward
- **Technical but accessible** - Explain what it does and why it matters

### Key Phrases to Use

✅ "Economic operating system"
✅ "Capital production, observation, deployment, access"
✅ "The only pathway to convert energy into yield on a PoW chain"
✅ "Vertical integration advantage"
✅ "Non-custodial security properties"
✅ "Mining OS directs capital into DeFi strategies"

### Phrases to Avoid

❌ "Just another wallet"
❌ "DEX aggregator" (it's more than that)
❌ "DeFi dashboard" (too generic)
❌ "Inspired by HiveOS/DeFi Saver" (marketing copy, not docs)

---

## Design Principles

### Visual Language

- **Protocol-grade aesthetic** - Professional, not "Web3 startup"
- **Subtle motion** - Polish without distraction
- **Component-based** - Modern layouts, not long static sections
- **Mobile-first** - Optimized for mobile experience
- **Dark mode** - Ethereum Classic green accents on dark backgrounds

### Motion Guidelines

- **Use Framer Motion** - Already in package.json
- **Subtle transitions** - Fade-ins, slide-ups on scroll
- **Performance-conscious** - No heavy animations
- **Accessibility** - Respect prefers-reduced-motion

**Inspiration:** aura.build (protocol-grade, subtle motion, clear CTAs)

---

## Protected Files

These files define the project structure and shouldn't be modified without explicit request:

- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind configuration (if exists)
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables

---

## Development Workflow

### Before Making Changes

1. **Read the scope** - Understand what this site is (marketing) and isn't (the app)
2. **Check existing code** - Understand patterns before adding
3. **Prefer small changes** - Focused, reviewable diffs

### When Adding Features

1. **Ask:** Does this belong on a marketing site?
   - If it needs wallet connection → **belongs in app**
   - If it shows live data → **belongs in app**
   - If it's interactive beyond CTAs → **belongs in app**

2. **Keep it simple** - Marketing sites should be fast and focused

### Validation Requirements

Before committing:

```bash
npm run lint         # Must pass
npm run build        # Must succeed
```

**Both must pass.** Fix errors before committing.

---

## Component Patterns

### Page Structure

```typescript
// src/app/page.tsx
import Hero from '@/components/Hero'
import Modules from '@/components/Modules'
import EconomicFlywheel from '@/components/EconomicFlywheel'
// ...

export default function HomePage() {
  return (
    <>
      <Hero />
      <Modules />
      <EconomicFlywheel />
      {/* ... */}
    </>
  )
}
```

### Component Example

```typescript
// src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="..."
    >
      <h1>The Economic Operating System for Ethereum Classic</h1>
      <p>Transform global energy into yield-bearing assets on the only mature PoW chain with smart contracts</p>
      <a href="https://app.classicos.org">Launch App</a>
    </motion.section>
  )
}
```

---

## URL Structure

- **Landing site:** classicos.org (THIS SITE)
- **App:** app.classicos.org
- **Documentation:** docs.classicos.org (NOT classicos.org/docs)

When linking to documentation, always use `https://docs.classicos.org`

---

## CTA Strategy

### Primary CTA
**"Launch App"** → app.classicos.org
- Prominent in hero
- Repeated before footer

### Secondary CTAs
- **"Read Docs"** → docs.classicos.org
- **"View on GitHub"** → GitHub repo
- **"Explore Ethereum Classic"** → ethereumclassic.com

---

## Ecosystem Context

### Read This First

**Before working on any task**, read:
- [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md) - Ecosystem context
- [`/docs/README.md`](docs/README.md) - Product-specific context
- [`/products/classicos-app/docs/product/000-product-model.md`](../classicos-app/docs/product/000-product-model.md) - Polished product vision

### How This Site Fits

Visitors coming from EthereumClassic.com know about Ethereum Classic. Now they're asking "What can I do?"

**Your answer:** Classic OS - the economic operating system that transforms mining into sustainable yield.

---

## Commit Guidelines

### Format

```
scope: brief description

Longer explanation if needed.

Examples:
- hero: update headline to match polished product vision
- modules: add four-module breakdown with economic intent
- footer: add docs link to docs.classicos.org
```

### Commit Discipline

- **Small, focused commits** - One logical change per commit
- **Clear messages** - Explain what and why
- **Validated code** - Lint and build must pass

---

## Common Tasks

### Update Copy to Match Polished Vision

1. Read the polished messaging in this file
2. Find component with outdated copy
3. Update to match refined product vision
4. Test clarity and tone
5. Validate: `npm run lint && npm run build`

### Add Animation

1. Use Framer Motion
2. Keep subtle - fade-ins, slide-ups
3. Respect `prefers-reduced-motion`
4. Test performance

---

## Getting Help

### Documentation

- **Product context:** [`docs/README.md`](docs/README.md)
- **Ecosystem context:** [`/docs/ecosystem/phase-0/`](../../../docs/ecosystem/phase-0/)
- **Polished product vision:** [`/products/classicos-app/docs/product/`](../classicos-app/docs/product/)
- **Classic OS docs:** docs.classicos.org

### External Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## Summary

**Remember:**
1. This is **marketing**, not the app
2. Use the **polished product messaging** (economic OS, four modules, flywheel)
3. Keep it **fast** and **focused**
4. Every section **routes to the app**
5. **Validate before committing** - lint and build must pass
6. Read **ecosystem context first** - understand the bigger picture
7. Docs link to **docs.classicos.org** (not /docs)

You're building the consideration layer in a coordinated product ecosystem. Make Classic OS compelling with the refined messaging that positions it as the complete economic operating system for Ethereum Classic.
