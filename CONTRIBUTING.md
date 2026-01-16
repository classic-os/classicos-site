# Contributing to ClassicOS Landing Site

Welcome! This guide will help you contribute to the ClassicOS landing site.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint and build (required before committing)
npm run lint
npm run build
```

Both lint and build **must pass** before committing.

---

## What Is This Site?

The ClassicOS landing site (classicos.org) is the **product marketing layer** in our ecosystem:

```
EthereumClassic.com → ClassicOS.org (THIS SITE) → app.classicos.org
```

**Purpose:** Market Classic OS. Explain what it is, what problems it solves, and convert visitors into app users.

---

## Key Principles

### 1. This Is Marketing, Not the App

❌ **Do NOT add:**
- Wallet integration
- Portfolio views
- DeFi interactions
- User accounts
- Live data displays

✅ **DO add:**
- Clear messaging about Classic OS
- CTAs to app.classicos.org
- Static content explaining features
- Subtle animations for polish

**Rule:** If it needs to be interactive, it belongs in the app, not here.

### 2. Fast and Focused

- **Mobile-first** - Optimize for mobile experience
- **Minimal dependencies** - Every dependency must be justified
- **Fast load times** - Optimize assets, minimize JS

### 3. Polished Product Messaging

Use the refined messaging:
- "Economic operating system for Ethereum Classic"
- Four modules: Produce, Portfolio, Deploy, Markets
- Value prop: Transform energy into yield on PoW chain
- Built by ETCswap founder (vertical integration)

See [.claude/instructions.md](.claude/instructions.md) for complete messaging guidelines.

---

## Development Workflow

### 1. Before You Start

Read these docs:
- [README.md](README.md) - Project overview
- [docs/README.md](docs/README.md) - Product context
- [/docs/ecosystem/phase-0/](../../docs/ecosystem/phase-0/) - Ecosystem context

### 2. Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make focused changes**
   - One logical change per commit
   - Keep diffs small and reviewable

3. **Test your changes**
   - View on mobile and desktop
   - Test all CTAs
   - Ensure fast load time

4. **Validate before committing**
   ```bash
   npm run lint    # Must pass
   npm run build   # Must succeed
   ```

5. **Commit with clear message**
   ```bash
   git commit -m "scope: brief description"
   ```

   Examples:
   - `hero: update headline to match polished product vision`
   - `modules: add four-module breakdown`
   - `footer: add docs link to docs.classicos.org`

### 3. Submitting Changes

1. Push your branch
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a pull request with:
   - Clear description of what changed
   - Why the change was made
   - Screenshots (if visual changes)

---

## Tech Stack

- **Next.js 16.1.1** (App Router)
- **React 19.2.3**
- **Tailwind CSS 4** for styling
- **Framer Motion 12.24.12** for animations
- **TypeScript 5**

---

## Component Patterns

### Page Structure

```typescript
// src/app/page.tsx
import Hero from '@/components/Hero'
import Modules from '@/components/Modules'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Modules />
    </>
  )
}
```

### Component with Animation

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
    >
      <h1>The Economic Operating System for Ethereum Classic</h1>
      <a href="https://app.classicos.org">Launch App</a>
    </motion.section>
  )
}
```

---

## Style Guidelines

### Tailwind CSS

Use utility classes:

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold text-white">Classic OS</h1>
</div>
```

### Responsive Design

Mobile-first:

```tsx
className="text-base md:text-lg lg:text-xl"
```

### Colors

- **ETC Green:** #33cc33
- **Dark backgrounds**
- **White/gray text**

---

## URL Structure

- **Landing:** classicos.org (THIS SITE)
- **App:** app.classicos.org
- **Docs:** docs.classicos.org (NOT classicos.org/docs)

Always link to docs at `https://docs.classicos.org`

---

## Common Tasks

### Update Copy

1. Find the component with the text
2. Update to match polished messaging
3. Test on mobile and desktop
4. Validate and commit

### Add New Section

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Style with Tailwind
4. Add subtle Framer Motion animation
5. Test responsive behavior
6. Validate: `npm run lint && npm run build`

---

## Getting Help

- **Product docs:** [docs/README.md](docs/README.md)
- **Ecosystem context:** [/docs/ecosystem/phase-0/](../../docs/ecosystem/phase-0/)
- **Agent instructions:** [.claude/instructions.md](.claude/instructions.md)

---

## Code Review

Reviewers will check for:
- ✅ Lint and build pass
- ✅ Mobile-responsive
- ✅ Fast load time
- ✅ Clear messaging (matches polished product vision)
- ✅ No interactive features beyond CTAs
- ✅ Small, focused diffs

---

## Thank You!

Your contributions help make Classic OS more accessible to the Ethereum Classic community.
