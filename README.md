# Modern Portfolio Website of Rajiv

A stunning, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism design, and a modern dark theme.

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Powered by Framer Motion for buttery smooth transitions
- **Sections**:
  - Hero with animated introduction
  - About with skills showcase
  - Projects grid with hover effects
  - Experience timeline
  - Contact form with social links
- **Performance Optimized**: Fast loading and smooth scrolling
- **Easy to Customize**: All content in a single configuration file

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository or navigate to the portfolio folder:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolioData.js` to customize all content:

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio...",
  // ... update all sections
};
```

### Change Colors

Modify `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections as needed.

## 📧 Contact Form Setup (Optional)

To enable the contact form with EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS:
```bash
npm install @emailjs/browser
```
4. Update `src/sections/Contact.jsx` with your EmailJS credentials

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist` folder.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Performance Tips

- Replace placeholder images with optimized images
- Use WebP format for images
- Lazy load images below the fold
- Minimize bundle size by removing unused dependencies

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
