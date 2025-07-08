# Banti Gheneti - Personal Website

[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=http://gheneti.com)](http://gheneti.com)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/bgheneti/bgheneti.github.io/deploy.yml?branch=template&style=for-the-badge&logo=github-actions&label=Deploy)](https://github.com/bgheneti/bgheneti.github.io/actions/workflows/deploy.yml)

Personal portfolio website built with Astro, featuring projects, links, and a clean, responsive design.

The design was adapted from the [Gridsome x Forestry starter template](https://github.com/itsnwa/gridsome-forestry-starter) for Vue.js. This repo only uses Astro.

## ✨ Features

- **Responsive Design** - Mobile-first with hamburger navigation
- **Content Collections** - Markdown-based projects and links
- **Code Highlighting** - Prism.js syntax highlighting
- **Modern CSS** - Custom properties, animations, and utilities
- **Touch-Friendly** - Proper mobile interactions and hover states
- **Fast Performance** - Static site generation with Astro

## 🚀 Project Structure

```text
/
├── public/                     # Assets referenced in project
│   ├── code-highlight.css      # Prism.js styling
│   ├── favicon.svg
|   └── uploads/                # Images and other assets for individual pages
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation with mobile menu
│   │   ├── Hero.astro          # Home page hero section
│   │   ├── Footer.astro        # Site footer
│   │   ├── ProjectsGrid.astro  # Project display grid
│   │   └── LinksGrid.astro     # Links display grid
│   ├── content/
│   │   ├── config.ts           # Content collections config
│   │   ├── projects/           # Project markdown files
│   │   └── links/              # Link markdown files
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with global styles
│   └── pages/
│       ├── index.astro         # Home page
│       ├── projects/
│       │   ├── index.astro     # Projects listing
│       │   └── [...slug].astro # Individual project pages
│       └── links/
│           └── index.astro     # Links page
├── data/
│   └── theme.json              # Site configuration and content
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages deployment
└── astro.config.mjs            # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deploying           |
| `npm run astro check`     | Run type checking                                |

## 🔧 Configuration

### Content Management
- **Projects**: Add `.md` files to `/src/content/projects/`
- **Links**: Add `.md` files to `/src/content/links/`
- **Site Data**: Edit `/data/theme.json` for site settings

### Styling
- **Global Styles**: `/src/layouts/Layout.astro`
- **CSS Variables**: Defined in Layout.astro for consistent theming
- **Component Styles**: Scoped styles in each `.astro` component

### Deployment
- **Auto-deploy**: Pushes to `template` branch trigger GitHub Actions
- **Build**: Creates static files in `/dist/`
- **Deploy**: Files deployed to `gh-pages` branch
- **Live**: Available at <https://bgheneti.github.io>

## 🎨 Design System

The site uses a custom CSS design system with:
- **Color tokens**: `--color-base`, `--color-accent`, etc.
- **Typography scale**: `--font-size-xs` to `--font-size-3xl`
- **Spacing system**: `--spacing-xs` to `--spacing-3xl`
- **Animation utilities**: Fade-in animations with staggered delays
- **Responsive utilities**: Mobile-first breakpoints
