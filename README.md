# 👓 Paradise Optics | Luxury Eyewear Showroom in Ludhiana

Paradise Optics is a premium optical retail showroom located in Ludhiana, Punjab. This repository houses the source code for the high-end digital catalog and store administration panel. The platform provides a visual showcase of international designer frames, premium sunglasses, contact lenses, and computerized optical diagnostics.

---

## ✨ Features

- **📱 Fully Responsive Design**: Seamless premium user experience from mobile screens to 2K desktop displays.
- **🛍️ Complete Digital Catalog**: Interactive showcases for Eyeglasses, Sunglasses, and Contact Lenses with granular filtering options (Shape, Material, Gender, Size).
- **🔒 Admin Dashboard**: Dedicated administrative panels for real-time inventory tracking, catalog editing, and WhatsApp analytics, featuring a **Developer Login Bypass** toggle for local configuration.
- **💬 Direct CTAs**: Inline WhatsApp checkout, direct-call hotlines, and quick showroom appointment scheduling.
- **✨ Smooth Visuals**: Continuous linear marquee animations for luxury brand partnerships, framed with Tailwind CSS transition components and Framer Motion.
- **🌐 SEO & Social Sharing Cards (OG)**: Fully optimized meta headers to output high-fidelity rich link previews on WhatsApp, Facebook, Instagram, and Twitter.

---

## 🛠️ Tech Stack

- **Frontend Core**: React.js (v18+) with Vite bundler
- **Styling**: Tailwind CSS & PostCSS
- **State & Routing**: React Router DOM & React Context API
- **Animations**: Framer Motion & Swiper.js
- **Database / Auth Backend**: Supabase API client
- **Icons**: React Icons (Fa, Fi, Io)

---

## 🚀 Local Installation & Setup

To run this project on your local computer, follow these simple steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/paradise-optics.git
cd paradise-optics
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a file named `.env` in the root directory of the project and paste your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```
> ⚠️ **IMPORTANT**: Never commit or upload this `.env` file to GitHub. It is already added to `.gitignore` to protect your database credentials.

### 5. Start Development Server
```bash
npm run dev
```
The application will run locally at: **`http://localhost:5173/`**

### 6. Build for Production
To bundle and compile the project for deployment:
```bash
npm run build
```

---

## 📁 Folder Structure

```text
├── public/                # Static assets (favicons, product/service images)
├── src/
│   ├── assets/            # Global styling resources and fonts
│   ├── components/        # Reusable UI controls (layout, headers, forms, cards)
│   ├── context/           # React Context state providers (Auth, Products)
│   ├── data/              # Default fallback database records (productsData.js)
│   ├── pages/             # Page views (Home, About, Brands, Contact, Admin)
│   ├── App.jsx            # Main app router definition
│   ├── index.css          # Tailwind directives and custom marquee overrides
│   └── main.jsx           # Main entry script
├── index.html             # Shell index page (holds SEO meta & Open Graph tags)
├── tailwind.config.js     # Tailwind setup
├── vite.config.js         # Vite bundler parameters
└── package.json           # Node project manifest
```

---

## 🌐 Production Deployment

You can host this project easily on modern serverless deployment platforms:

### Deploying to Netlify / Vercel:
1. Connect your GitHub repository to **Netlify** or **Vercel**.
2. Set the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Add your environment variables in the dashboard:
   - Key: `VITE_SUPABASE_URL`
   - Key: `VITE_SUPABASE_ANON_KEY`
4. Deploy! Your site will compile and be online instantly.

---

## 📄 License
Designed for **Paradise Optics Showroom**. All Rights Reserved.
