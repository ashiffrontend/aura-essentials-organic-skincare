# Aura Essentials Organic Skincare 🌿

A luxury, Apple-inspired e-commerce frontend demonstration website built exclusively with **pure HTML5, CSS3, and Vanilla JavaScript (ES6)**.

---

## 🌟 Features

- **Pure Static Frontend**: Zero build tools, zero frameworks, zero external dependencies required for deployment.
- **Vercel-Ready**: Deploys instantly on Vercel as a Static Website with **No Build Command** and **No Install Command** (`vercel.json` configured).
- **Apple-Inspired Luxury Design**:
  - Soft green gradients (`#2E7D32`, `#81C784`) and gold luxury accents (`#C8A96A`).
  - Glassmorphic navigation with scroll blur and dynamic scroll progress bar.
  - Full Dark Mode Toggle with persistence in `localStorage`.
- **E-Commerce Showcase**:
  - Interactive product catalog with 12 organic botanical formulations.
  - Real-time search, category filtering, skin type selection, price range slider, and sorting.
  - Interactive Product Quick View Modal with image gallery thumbnails, clinical benefits, and ritual usage instructions.
  - Slide-in Shopping Cart Drawer with free shipping progress bar, promo code validation (`AURA20`), and quantity controls.
  - **Direct WhatsApp Checkout**: Automatically formats customer name, itemized order list, quantities, subtotal, and special delivery notes, launching directly via WhatsApp (`https://wa.me/919999999999?text=...`).
  - Wishlist management with badge counter.
  - Farm-to-Bottle Ingredient Transparency showcase (9 botanical active cards with quick-filter triggers).
  - Auto-sliding Testimonial Carousel with customer ratings and verified buyer tags.
  - Instagram Showcase `#AuraGlowRitual` with hover interaction.
  - Interactive FAQ Accordion categorized by topic.
  - Contact Section with stylized Kerala Sanctuary map preview and validated inquiry form.

---

## 📁 Project Structure

```text
/
├── index.html         # Pure Semantic HTML5 layout & components
├── style.css          # Master responsive CSS3 stylesheet with design tokens & dark mode
├── script.js          # Modular Vanilla JavaScript (ES6) logic & state management
├── vercel.json        # Static deployment configuration for Vercel
├── .vercelignore      # Ignores extraneous development artifacts on Vercel
├── images/            # Static imagery directory
├── assets/            # Static media and branding assets
├── icons/             # Custom SVG brand and action icons
├── robots.txt         # Search engine crawl directives
├── sitemap.xml        # XML Sitemap
└── README.md          # Project documentation
```

---

## 🚀 How to Deploy on Vercel

### Option 1: Automatic Detection (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import this repository.
4. Vercel automatically detects the project settings from `vercel.json`:
   - **Framework Preset**: `Other`
   - **Build Command**: `None`
   - **Install Command**: `None`
   - **Output Directory**: `.`
5. Click **Deploy**. Your website will be live in seconds without running `npm install`.

### Option 2: Local Static Preview
You can open `index.html` directly in any modern browser, or run any static HTTP server:
```bash
# Python 3
python3 -m http.server 3000

# or npx serve
npx serve -l 3000 .
```

---

## 👨‍💻 Developer Credit

- **Designed & Developed by**: Mohammad Ashif 💙
- **Company**: Ashif Web Studio
- **Portfolio**: [https://ashif-web-studio.vercel.app/](https://ashif-web-studio.vercel.app/)
- **Contact Email**: ashif233014@gmail.com

---

## ⚖️ Demo Disclaimer

This website is a fictional organic skincare e-commerce frontend demonstration created for educational, portfolio, and showcase purposes only. All products, prices, reviews, ingredients, shopping cart, and WhatsApp checkout are sample content. No real orders, payments, or transactions are processed.

© 2026 Aura Essentials Organic Skincare. All Rights Reserved.
