# India Eurasia Research Forum (IERF)

![IERF Branding Overview](public/logo.svg)

**India Eurasia Research Forum (IERF)** is an independent flagship initiative and public diplomacy platform dedicated to strengthening strategic dialogue, scholarly rigour, and cultural cooperation between India and the broader Eurasian region (comprising Russia, Central Asia, and the Caucasus).

This repository contains the completely modernized, high-performance frontend web application for the IERF platform.

## 🌟 Key Features

The IERF platform has been meticulously crafted to project a premium, authoritative, and institutional aesthetic:

- **Voiceflow-Inspired Navigation**: A cutting-edge, 3-island to 1-pill dynamic sticky navbar. As users scroll, the expansive branding fluidly collapses into a centered, glassmorphic UI pill, maximizing readable screen estate while retaining accessibility.
- **Premium Typography System**: An elegant font pairing utilizing **Playfair Display** for high-impact editorial headings and **Outfit** for crisp, modern sans-serif body text and UI elements.
- **Glassmorphism & Depth**: Extensive use of `backdrop-blur`, subtle transparencies, and multi-layered drop shadows (`backdrop-blur-md`, `bg-white/10`) to create a fluid, layered design.
- **Framer Motion Animations**: Silky smooth micro-interactions, spring layouts, scale interpolations, and orchestrated entrance animations across all pages to elevate the user experience.
- **Fully Responsive**: Architected with Tailwind CSS to perfectly scale from ultra-wide 4K monitors down to mobile devices with custom off-canvas mobile menus.

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v7

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhisheksingh214/india-eurasia-research-forum.git
   cd india-eurasia-research-forum
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000` (or `http://localhost:5173` depending on your Vite config).*

### Building for Production

To generate a highly optimized production build:
```bash
npm run build
```
You can preview the built static files locally using:
```bash
npm run preview
```

## 📂 Project Structure

- `/src/components` - Reusable UI widgets (Header, Footer, SubHero, scroll utilities).
- `/src/pages` - Top-level route components (Home, About, Contact, Team, Publications, Write For Us, Volga to Ganga).
- `/src/data` - Local JSON/TS data structures powering the content.
- `/public` - Static optimized assets (WebP backgrounds, SVG logos).

## 📄 License & Copyright
© 2026 India Eurasia Research Forum. All rights reserved.
   