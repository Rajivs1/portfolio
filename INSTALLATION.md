# Installation Guide

Complete step-by-step installation guide for your portfolio website.

## Prerequisites

Before you begin, make sure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Git (optional, for version control)

## Step 1: Verify Node.js Installation

Open your terminal and run:
```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

## Step 2: Navigate to Project

```bash
cd portfolio
```

## Step 3: Install Dependencies

This will install all required packages (React, Tailwind CSS, Framer Motion, etc.):

```bash
npm install
```

Wait for the installation to complete. This may take a few minutes.

## Step 4: Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v7.3.1  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 5: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

You should see your portfolio website running!

## Common Installation Issues

### Issue: "npm: command not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "EACCES: permission denied"
**Solution**: 
- On Mac/Linux: Use `sudo npm install` (not recommended) or fix npm permissions
- On Windows: Run terminal as Administrator

### Issue: Port 5173 already in use
**Solution**: 
- Close other Vite projects
- Or change port in `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    port: 3000, // Change to any available port
  },
})
```

### Issue: Styles not loading
**Solution**:
1. Stop the dev server (Ctrl+C)
2. Delete `node_modules` folder
3. Run `npm install` again
4. Run `npm run dev`

### Issue: Build fails
**Solution**:
1. Make sure all dependencies are installed
2. Check for syntax errors: `npm run lint`
3. Clear cache: Delete `node_modules/.vite` folder
4. Try again: `npm run build`

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Next Steps

1. ✅ Installation complete
2. 📝 Customize content in `src/data/portfolioData.js`
3. 🎨 Adjust colors and styles
4. 🖼️ Add your own images
5. 🚀 Deploy to production

See `QUICKSTART.md` for customization guide!

## Need Help?

- Check `README.md` for detailed documentation
- Check `QUICKSTART.md` for quick customization
- Check `CUSTOMIZATION_EXAMPLES.md` for templates

---

Happy coding! 🚀
