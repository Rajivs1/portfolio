# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Customize Your Content
Edit `src/data/portfolioData.js` and update:
- Your name and role
- Bio and about description
- Skills (frontend, backend, tools)
- Projects (add your own projects with images, descriptions, links)
- Work experience
- Social media links

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 🎨 Quick Customization Tips

### Change Your Name in Navbar
The navbar shows "JD" as initials. Update in `src/components/Navbar.jsx`:
```jsx
<motion.a href="#home" className="text-2xl font-bold text-gradient">
  YourInitials
</motion.a>
```

### Update Profile Image
In `src/data/portfolioData.js`, replace the image URL:
```javascript
about: {
  image: "your-image-url-here",
}
```

### Add Your Own Projects
Replace the placeholder projects in `portfolioData.js`:
```javascript
projects: [
  {
    id: 1,
    title: "Your Project",
    description: "Description...",
    image: "project-image-url",
    tech: ["React", "Node.js"],
    github: "your-github-link",
    demo: "your-demo-link",
  },
]
```

### Change Color Scheme
Edit `tailwind.config.js` to use different colors:
```javascript
colors: {
  primary: {
    500: '#your-color',
    // ...
  },
}
```

Or update the gradient in `src/index.css`:
```css
.text-gradient {
  @apply bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}
```

## 📱 Test Responsiveness

Open DevTools (F12) and test different screen sizes:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

## 🏗️ Build for Production

```bash
npm run build
```

Test the production build:
```bash
npm run preview
```

## 🚀 Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 💡 Tips

- Use high-quality images (WebP format recommended)
- Keep descriptions concise and impactful
- Update social links to your actual profiles
- Test on real devices before deploying
- Add Google Analytics for tracking (optional)

## 🆘 Common Issues

**Issue**: Styles not loading
**Fix**: Make sure Tailwind is properly configured and `npm install` completed

**Issue**: Images not showing
**Fix**: Use absolute URLs for images or place them in the `public` folder

**Issue**: Build fails
**Fix**: Run `npm run lint` to check for errors

## 📚 Next Steps

1. Replace placeholder content with your real information
2. Add your actual projects with screenshots
3. Update social media links
4. Optimize images for web
5. Test on multiple devices
6. Deploy to production
7. Share your portfolio! 🎉

---

Need help? Check the main README.md for detailed documentation.
