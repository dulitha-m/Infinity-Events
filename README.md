# Infinity Events & Entertainment — Website

A modern, fully-responsive React website for **Infinity Events & Entertainment Pvt Ltd** — Total Event Solutions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd infinity-events

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/build` folder, ready to deploy.

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, stats, mission, clients |
| About | `/about` | Company story, 5 segments, values, global presence |
| Services | `/services` | Interactive tabs for each service category |
| Gallery | `/gallery` | Filterable photo gallery with lightbox + video cards |
| Clients | `/clients` | Full client list (60+), testimonials, sectors |
| Contact | `/contact` | Quote request form + contact info + quick channels |

---

## 🎨 Design

- **Color Palette:** Gold (#F5A623), Magenta (#C2185B), Purple (#7B1FA2), Dark (#0a0a0a)
- **Fonts:** Montserrat (headings), Inter (body), Playfair Display (accents)
- **Style:** Dark luxury theme with gradient accents, glassmorphism cards, scroll animations
- **Responsive:** Fully mobile-friendly with hamburger navigation

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   └── Footer.js / Footer.css
├── pages/
│   ├── Home.js / Home.css
│   ├── About.js / About.css
│   ├── Services.js / Services.css
│   ├── Gallery.js / Gallery.css
│   ├── Clients.js / Clients.css
│   └── Contact.js / Contact.css
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## 📞 Company Info

- **Company:** Infinity Events & Entertainment Pvt Ltd
- **WhatsApp:** +1 (332) 222-4827
- **Email:** info@infinityeventsint.com
- **Website:** www.infinityeventsint.com
- **Offices:** USA · Dubai · Maldives · Indonesia · Sri Lanka

---

## 🌐 Deployment

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `/build` folder to [netlify.com/drop](https://netlify.com/drop)

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to cPanel / Shared Hosting
1. Run `npm run build`
2. Upload the contents of `/build` to your `public_html` folder
3. Add an `.htaccess` file for React Router:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

*Built with React 18 · react-router-dom v6 · Pure CSS (no external UI framework)*
