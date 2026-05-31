# Zachary Zai — Personal Portfolio

My personal portfolio site, built to showcase projects, skills, and experience as a Year 2 Software Engineering student at SMU.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion (scroll-triggered reveals, staggered entrance animations, spring physics)
- **3D Background** — Three.js (animated dot-wave canvas rendered via `background-paths.tsx`)
- **Icons** — Lucide React, React Icons (Simple Icons for tech logos)
- **Theme** — next-themes (forced dark mode)
- **Navigation** — Custom gooey nav component (`gooey-nav.tsx`)

## Sections

- **Hero** — Full-screen landing with a per-character spring animation on the name, availability badge, tagline, social links (GitHub, LinkedIn, Email), and an animated scroll indicator.
- **About** — Two-column layout with a bio paragraph and a 2×2 highlights grid (Clean Code, Problem Solver, Team Player, Perpetual Learner), each card with a Lucide icon and hover state.
- **Projects** — Responsive card grid showcasing FinFlow (AI finance platform), Campus Event Board (WAD1 group project, graded A-), and two additional projects. Cards include tech tag pills, featured/ongoing/grade badges, and GitHub / live-demo links.
- **Experience** — Vertical timeline with animated entries, differentiating work (briefcase icon) and education (graduation cap icon) entries.
- **Skills** — Full-width auto-scrolling logo ticker (15 tech icons, hover to slow), followed by a 3-column card grid grouping skills into Languages, Frontend, Backend, Database, Tools & Platforms, and Currently Learning.
- **Contact** — Two-column layout with social link cards on the left and a name/email/message form on the right, with a loading spinner and a spring-animated success state on submission.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel. Push to `main` to trigger a new deployment.
