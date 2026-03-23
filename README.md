# Dinamic Landing Page

A Next.js 16 landing page for a learning center with Supabase-backed content and a small admin dashboard.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase SSR and Supabase Auth
- React Hook Form + Zod
- shadcn/ui components
- Embla Carousel
- Framer Motion

## What Is Implemented

### Public landing page

The homepage is composed from these sections:

- `Navigation`
- `Carousel`
- `About Us`
- `Features`
- `Testimonials`
- `FAQ`
- `Contact`
- `Footer`

Current data sources:

- `carousel_items` table powers the hero carousel
- `about_us` table powers the about section
- `contact_form_submissions` table stores contact form submissions

Current static sections:

- Features
- Testimonials
- FAQ
- Footer content
- Navbar links and branding

### Admin area

The dashboard lives under `/dashboard` and uses Supabase auth session state.

Implemented management screens:

- `/dashboard/about`
  - update about section title, description, and image
  - upload image to Supabase Storage bucket `images`
- `/dashboard/carousel`
  - list carousel items
  - create carousel items
  - edit carousel items
  - delete carousel items
- `/dashboard/contact-submissions`
  - list contact submissions
  - mark submissions as contacted

Placeholder routes that currently only render headings:

- `/dashboard/navbar`
- `/dashboard/features`
- `/dashboard/testimonials`
- `/dashboard/faqs`
- `/dashboard/footer`

## Project Structure

```text
app/
  page.tsx                        public landing page
  contact.tsx                     contact form client wrapper
  actions.ts                      server action for contact form submission
  login/                          login screen and auth action
  dashboard/                      admin area
components/                       landing page and dashboard UI
lib/supabase/                     browser/server/proxy Supabase clients
shared/types/                     shared TypeScript types
proxy.ts                          Supabase session refresh proxy
```

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

The app currently expects public Supabase access for reads and uses authenticated server-side calls for writes.

## Required Supabase Resources

Database tables used by the codebase:

- `about_us`
- `carousel_items`
- `contact_form_submissions`

Storage buckets used by the codebase:

- `images`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Useful scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Open `http://localhost:3000`.

## Notes

- Remote images are allowed from `placehold.co` and the configured Supabase project domain in [`next.config.ts`](/D:/Cursor/dinamic-landing-page/next.config.ts).
- The homepage assumes `about_us` has a single row and directly renders its image and content.
- The admin layout shows the signed-in user email in the sidebar when available.
- There is no seed script or schema migration in this repository yet, so Supabase tables and policies must be created manually.
