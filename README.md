
# Grow My Therapy

A responsive therapy-practice website built with Next.js and Tailwind CSS. The project presents a counseling practice through a welcoming homepage, service information, an about section, office imagery, and frequently asked questions.

> **Project note:** This website was created as an internship assignment. Dr. Maya Reynolds is a fictional profile used for the project; the website should not be treated as a real therapy practice or as a source of clinical advice.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Homepage with a hero section and clear calls to action
- Counseling services and practice approach sections
- About/profile section
- Office image gallery
- FAQ page with expandable questions
- Shared header, footer, and reusable page sections
- Centralized content configuration for easier updates
- Image assets stored locally in the `public` directory

## Tech Stack

- **Next.js 14** — React framework
- **React** — UI components
- **TypeScript** — typed application code
- **Tailwind CSS** — styling and responsive design
- **PostCSS** — CSS processing

## Project Structure

```text
grow-my-therapy/
├── public/
│   └── images/
│       └── maya/
├── src/
│   ├── app/
│   │   ├── faqs/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── content/
│       ├── index.ts
│       ├── maya.ts
│       ├── original.ts
│       └── types.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

Install **Node.js** and **npm** before running the project.

### 1. Clone the repository

```bash
git clone https://github.com/Rksingh9546/grow-my-therapy.git
cd grow-my-therapy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run start` | Runs the production server |
| `npm run lint` | Runs linting, if configured in the project |

## Updating Website Content

Website content is organized in the `src/content/` directory. Update the relevant configuration and content types there to change profile details, sections, services, or other page information.

Images used by the website are stored in `public/images/`. Keep image paths consistent with the references in the components and content configuration.

Before publishing, verify that all profile information, contact details, office information, and booking links are accurate and authorized for use. Do not publish placeholder information as real practice details.

## Deployment

The project can be deployed to a Next.js-compatible hosting platform, such as Vercel.

Before deployment:

1. Install dependencies with `npm install`.
2. Confirm the site builds successfully with `npm run build`.
3. Check the homepage and FAQ page on mobile and desktop.
4. Verify all images and navigation links.
5. Replace or remove any assignment-only placeholder content.

## Assignment Context

This project was developed as a website design and implementation assignment. It demonstrates responsive page composition, reusable React components, centralized content, and a consistent visual presentation.

## License

No license has been specified for this project. Contact the repository owner before reusing or redistributing its code or assets.
