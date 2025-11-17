# MATMAZEL - Official Hair & Make Up Studio

A premium, fully responsive static website for MATMAZEL, a luxury hair and makeup studio in İzmit, Turkey.

## Features

- 🎨 Modern, elegant, and minimal design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🎯 SEO optimized
- ⚡ Built with Next.js 14 (App Router)
- 💅 Styled with TailwindCSS
- 🔤 Premium typography (Montserrat, Poppins, Inter)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
matmazel/
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── gallery/        # Gallery page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Header/Navigation component
│   └── Logo.tsx        # Logo component
├── public/             # Static assets
└── ...config files
```

## Pages

1. **Home** (`/`) - Hero section, about preview, services highlights, gallery preview, testimonials, contact preview
2. **About** (`/about`) - Studio mission, professional background, vision, values
3. **Services** (`/services`) - Hair styling, coloring, cuts, bridal hair, professional makeup
4. **Gallery** (`/gallery`) - Instagram-style gallery with masonry layout
5. **Contact** (`/contact`) - Contact form, address, Google Maps embed, social links

## Design System

### Colors
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Champagne**: `#D4C2A8`
- **Light Grey**: `#CFCFCF`

### Typography
- **Headings**: Montserrat / Poppins
- **Body**: Inter

## Customization

### Instagram Link
Update the Instagram link in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`
- `app/gallery/page.tsx`

Current: `https://www.instagram.com/ekipmatmazelizmit`

### Contact Information
Update contact details in:
- `app/contact/page.tsx`
- `components/Footer.tsx`

### Google Maps
Update the Google Maps embed URL in `app/contact/page.tsx` with your actual studio location.

## SEO

The website includes SEO meta tags optimized for:
- "Women Hair Studio in İzmit"
- "MATMAZEL Official Hair & Make Up Studio"

## License

Private project for MATMAZEL Studio.
