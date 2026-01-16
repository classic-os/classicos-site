# ClassicOS Landing Site Documentation

Product marketing site for Classic OS.

---

## Product Purpose

The ClassicOS landing site ([classicos.io](https://classicos.io)) is the **product marketing layer** in the three-product ecosystem:

1. **EthereumClassic.com** - Primary funnel (awareness & legitimacy)
2. **ClassicOS Landing Site** - Product marketing (this site)
3. **Classic OS App** - The actual product

**Goal:** Convert awareness into intent. Explain what Classic OS is, what problems it solves, and route visitors to the app.

---

## Ecosystem Context

**Read first:** [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md)

This site is part of a coordinated launch orchestrated by **Christopher Mercer**:
- ETCswap V2/V3/Launchpad founder
- Classic USD (USC) primary organizer
- Ethereum Classic core developer
- Fukuii client contributor

**Strategic advantage:** Vertical integration (protocols + interface by same architect)

---

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS 4
- **Motion:** Framer Motion 12.24.12
- **TypeScript:** 5.x
- **Node:** 22.x

---

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

---

## Site Structure

### v0.1 Scope

Simple marketing site with clear messaging:

1. **Hero** - What is Classic OS?
2. **Problem/Solution** - Why it exists
3. **Features** - What it does (Produce, Portfolio, Deploy, Markets)
4. **CTA** - Route to app
5. **Footer** - Links and legitimacy

**Positioning:**
- Complete economic operating system for Ethereum Classic
- Mining OS + DeFi Automation + Multi-EVM + Stablecoin access
- Built by ETCswap founder

---

## Development Guidelines

### What This Site Is

- **Marketing site** - Explain the vision, convert visitors
- **Stateless** - No wallet connection, no user data
- **Router** - Direct visitors to the app
- **Fast** - Optimized for speed and mobile

### What This Site Is Not

- **Not the app** - No portfolio, no wallet connection, no DeFi interactions
- **Not docs** - No tutorials or technical guides
- **Not a blog** - No content engine or CMS

### Design Principles

- **Clear messaging** - Visitors understand what Classic OS is in 30 seconds
- **Action-oriented** - Every section routes to the app
- **Mobile-first** - Optimized for mobile experience
- **Subtle motion** - Polish and professionalism, not distraction
- **Fast load** - Minimal dependencies, optimized assets

---

## Relationship to Other Products

### From EthereumClassic.com
Visitors come from ethereumclassic.com having learned about Ethereum Classic. They're now asking "What can I actually do on ETC?"

**This site answers:** Classic OS is a complete economic operating system that lets you mine, manage capital, deploy strategies, and access markets.

### To Classic OS App
After understanding what Classic OS does, visitors click through to the app to actually use it.

**Routing:** Clear CTAs throughout the site direct to app.classicos.io

---

## File Structure

```
/src
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   └── ...
└── lib/                   # Utilities
    └── ...

/docs
├── README.md             # This file
└── ...

/public
└── ...                   # Static assets
```

---

## For AI Agents

### Starting Work

1. **Read ecosystem context:** [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md)
2. **Read agent instructions:** [`.claude/instructions.md`](../.claude/instructions.md)
3. **Understand positioning:** This is marketing, not the app itself

### Key Constraints

- **No wallet integration** - Marketing site only
- **No interactive features** - Route to app instead
- **Keep it simple** - Fast, clear, mobile-optimized
- **Respect scope** - Don't add features beyond marketing

---

## References

- **Ecosystem docs:** [`/docs/ecosystem/phase-0/`](../../../docs/ecosystem/phase-0/)
- **Classic OS app:** [Classic OS App docs](../classicos-app/docs/)
- **EthereumClassic.com:** [ETC site docs](../ethereumclassic-com/docs/)
