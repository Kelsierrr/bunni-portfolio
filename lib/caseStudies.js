// lib/caseStudies.js
export const caseStudies = {
  evanshills: {
    slug: "evanshills",
    title: "EvansHills Recruitment",
    summary:
      "Full-stack recruitment platform for Zimbabwean talent and global employers. Candidates browse/apply with resumes; employers request talent. Deployed (Vercel + Render).",
    role: [
      "Lead developer — architecture, frontend, API, DB, deployment, and tests"
    ],
    timeline: "~4–6 weeks in 2025 (iterative)",
    team: "Solo (with async guidance)",
    stack: [
      "React (Vite)",
      "React Router",
      "TanStack Query v5",
      "React Hook Form + Zod",
      "Node.js/Express",
      "MongoDB Atlas",
      "Multer",
      "JWT"
    ],
    problem: [
      "No streamlined way for Zimbabwean job seekers to apply to overseas roles or for employers to request vetted talent."
    ],
    goals: [
      "Enable end-to-end candidate application with resume upload.",
      "Capture employer and contact inquiries reliably to a database.",
      "Ship a responsive, fast UI and a secure API with JWT auth.",
      "Make it deployable with a clear CI/CD path."
    ],
    solution:
      "Frontend is a React (Vite) SPA using React Router and TanStack Query for server state. Forms use React Hook Form + Zod for validation. The backend is an Express API with JWT authentication, Mongoose models, and Multer for file uploads. In dev, Vite proxies /api; in production, the frontend reads an env-based API URL to hit the Render API. Deployed FE on Vercel, API on Render.",
    highlights: [
      "Apply flow with resume upload (Multer + MongoDB persistence).",
      "Validation via React Hook Form + Zod with inline errors.",
      "Service package request form persisted to DB.",
      "Employer & Contact inquiry intake with success/error toasts.",
      "JWT auth with protected endpoints and ‘My Applications’.",
      "Jest + RTL tests for key forms.",
      "Env-based config for API base URL (dev vs prod)."
    ],
    results: [
      "Clearer application flow; fewer steps with client-side validation.",
      "Forms persist to MongoDB with reliable error states and toasts.",
      "Lean Vite build with cached data reduces refetching.",
      "One-click deploys to Vercel/Render with safe API switching."
    ],
    next: [
      "Move resumes to S3 with signed URLs.",
      "Admin UI for CRUD job + application review.",
      "Cypress/Playwright tests for apply/request/auth flows.",
      "Email triggers (SendGrid) for new applications/inquiries."
    ],
    images: [
      { src: "/images/projects/evanshills/hero.PNG", alt: "EvansHills home hero", caption: "Landing page hero and nav" },
      { src: "/images/projects/evanshills/job-list.PNG", alt: "Jobs list", caption: "Browse jobs list view" },
      { src: "/images/projects/evanshills/job-detail.PNG", alt: "Job detail", caption: "Single job detail with Apply CTA" },
      { src: "/images/projects/evanshills/apply-form.PNG", alt: "Apply form", caption: "Candidate application form with validation" },
      { src: "/images/projects/evanshills/job-seeker.PNG", alt: "Service packages", caption: "Job seeker pricing and service packages" },
      { src: "/images/projects/evanshills/employer-inquiry.PNG", alt: "Employer inquiry form", caption: "Employer request form" }
    ],
    links: {
      live: "https://evanshills-app.vercel.app/",
      repo: "https://github.com/Kelsierrr/evanshillsApp"
    }
  },

  pennysense: {
    slug: "pennysense",
    title: "Pennysense Tracker",
    summary:
      "A responsive expense tracking web app for individuals who want a fast and mobile-friendly way to log and review personal spending. Separate flows for desktop and mobile.",
    role: [
      "Full-stack dev — UI, form logic, routing, backend API, and MongoDB integration"
    ],
    timeline: "~4 weeks (2025)",
    team: "Solo",
    stack: [
      "React (Vite)",
      "React Router",
      "Express.js",
      "Node.js",
      "MongoDB Atlas",
      "Render"
    ],
    problem: [
      "People struggle to manage expenses across devices in a clean, intuitive UI.",
      "Many trackers lack tailored mobile interactions or structured previews."
    ],
    goals: [
      "Fast add/view/update expense flows on all screen sizes.",
      "Clear separation between form, history, and preview.",
      "Mobile-first routing UX with persistent filters."
    ],
    solution:
      "Pennysense uses a Vite-powered React frontend with mobile routing logic (React Router) and dynamic filtering. The Express backend exposes REST APIs and persists data to MongoDB Atlas. Deployed with Vercel (frontend) and Render (backend).",
    highlights: [
      "Expense entry form with dynamic rows (date, category, amount, notes).",
      "Desktop layout: inline form + history + preview panel.",
      "Mobile layout: routed pages for form and preview.",
      "Month/year filtering with controlled updates.",
      "Toast notifications for feedback.",
      "Express API + MongoDB Atlas persistence."
    ],
    results: [
      "Instant form responsiveness across screen sizes.",
      "Smooth navigation without data loss after routing.",
      "Fast Vite builds with clean separation of concerns.",
      "Stable multi-device UX for logging and reviewing expenses."
    ],
    next: [
      "Backend validation + stronger client-side schemas.",
      "Edit/delete expenses and bulk actions.",
      "Export filtered history to CSV/PDF.",
      "User accounts with secure authentication."
    ],
    images: [

      { src: "/images/projects/pennysense/dashboard.PNG", alt: "Desktop dashboard layout", caption: "Form, history, and preview side-by-side" },
      { src: "/images/projects/pennysense/add-expense-mobile.PNG", alt: "Add expense on mobile", caption: "Add expense flow — mobile form" },
      { src: "/images/projects/pennysense/expense-preview-mobile.PNG", alt: "Expense preview on mobile", caption: "Preview view after selecting an item" },
      { src: "/images/projects/pennysense/expense-history-panel.PNG", alt: "Expense history panel", caption: "Filtered history showing monthly results" }
    ],
    links: {
      live: "https://pennysense-umber.vercel.app/",
      repo: "https://github.com/Kelsierrr/Pennysense"
    }
  },

         ekime: {
    slug: "ekime",
    title: "Ekime Digital Service",
    summary:
      "CMS-driven marketing site for a Nigerian digital agency. Fast pages with a blog/portfolio the client can publish, and a contact pipeline that stores + emails leads.",
    role: [
      "Solo dev — UX, frontend, serverless API, CMS, deployment, DNS"
    ],
    timeline: "~4 weeks (2025)",
    team: "Solo (client collab for content/brand)",
    stack: [
      "React 19 (Vite)",
      "React Router",
      "Plain CSS",
      "Sanity CMS",
      "Vercel Functions",
      "MongoDB Atlas",
      "Nodemailer",
      "GA4 / AdSense"
    ],
    problem: [
      "Client needed a modern site to showcase services, publish content quickly, and capture inquiries reliably."
    ],
    goals: [
      "Ship a fast, responsive site with solid meta foundations.",
      "Non-technical publishing via CMS for Blog & Portfolio.",
      "Contact form that stores in DB and sends email.",
      "Add monetization (AdSense) + analytics (GA4)."
    ],
    solution:
      "React 19 (Vite) SPA with route-level code splitting and plain CSS. Content in Sanity fetched via GROQ; images via Sanity CDN with responsive variants. Contact flow hits a Vercel serverless function that validates input, writes to MongoDB Atlas, and emails via Nodemailer. Deployed on Vercel with custom domain.",
    highlights: [
      "Sanity schemas (blogPost, portfolioItem) with alt text + hotspot.",
      "GROQ queries + @sanity/image-url for responsive images.",
      "Serverless /api/contact with connection reuse and error handling.",
      "Honeypot anti-spam, clear success/error UX.",
      "AdSlot component with safe placements; GA4 route tracking.",
      "Lighthouse-friendly image strategy (WebP, fixed dims, lazy)."
    ],
    results: [
      "Client publishes blog/portfolio without developer involvement.",
      "Leads stored in Mongo and emailed instantly.",
      "Shareable pages with consistent metadata.",
      "Code-split routes and optimized images improve load time."
    ],
    next: [
      "Categories/Tags + per-post OG image in Sanity.",
      "Consent Mode v2 + cookie banner for GA/Ads.",
      "Accessibility pass and unit tests for the API."
    ],
    images: [
      { src: "/images/projects/ekime/hero.PNG",       alt: "Ekime home hero",            caption: "Homepage hero and primary CTA" },
      { src: "/images/projects/ekime/services.PNG",   alt: "Services section",           caption: "Services layout with right-aligned imagery" },
      { src: "/images/projects/ekime/blog-list.PNG",  alt: "Blog list",                  caption: "CMS-powered blog list with images, excerpts, dates" },
      { src: "/images/projects/ekime/contact.PNG",    alt: "Contact page",               caption: "Two-column contact page with WhatsApp link" }
    ],
    links: {
      live: "https://ekime.vercel.app/",
      repo: "https://github.com/Kelsierrr/ekime"
    }
  }
}
