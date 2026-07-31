# Anand Anto · Aspiring Data Scientist Portfolio

A premium, animated personal portfolio built with **React + Vite + Three.js**.
Dark glassmorphism theme, a live 3D "data core" background, a bento-style project
grid, scroll animations (Framer Motion), and a docked mini-avatar.

**Live site:** https://arcs08.github.io/e-portfolio/  ← *(after you deploy, see below)*

---

## 🛠 Tech stack

- **React 18** + **Vite 5** (fast dev + build)
- **Three.js** via **@react-three/fiber** and **@react-three/drei** (3D background)
- **Framer Motion** (scroll + entrance animations)
- Plain CSS (no Tailwind), all in `src/index.css`

## 📂 Structure

```
├── index.html              # Vite entry
├── vite.config.js          # base: './' so it works on GitHub Pages
├── public/                 # static files copied as-is
│   ├── anand-hero.jpg      # hero portrait
│   ├── anand-avatar.jpg    # nav + mini avatar
│   └── .nojekyll           # tells GitHub Pages not to run Jekyll
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # page composition
│   ├── data.js             # ← ALL your content lives here (edit this)
│   ├── index.css           # all styles
│   └── components/         # Navbar, Hero, Scene3D, Projects, Sections, etc.
└── .github/workflows/deploy.yml   # auto-build & deploy to GitHub Pages
```

> ✏️ **To change any text, project, or link, edit `src/data.js`.** You don't need
> to touch the components.

---

## 💻 Run it locally

### 1. Install Node.js (one time)
Download the **LTS** version from https://nodejs.org and install it.
Verify in a terminal:
```bash
node -v      # should print v18 or higher
npm -v
```

### 2. Install project dependencies (one time, inside this folder)
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```
Open the URL it prints (usually http://localhost:5173). Edits reload live.

### 4. Build for production (optional, the deploy does this for you)
```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

---

## 🚀 Deploy to GitHub Pages (free, gives you a shareable link)

This repo ships with a GitHub Actions workflow that **builds and deploys
automatically every time you push to `main`**. You never run a build by hand.

### One-time setup

1. **Create a GitHub repo** named `e-portfolio` under your account `arcs08`.
   *(You can pick another name; if you do, your live URL changes to
   `https://arcs08.github.io/<that-name>/`.)*

2. **Push this folder to it.** In a terminal inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio: React + Vite + Three.js"
   git branch -M main
   git remote add origin https://github.com/arcs08/e-portfolio.git
   git push -u origin main
   ```

3. **Turn on Pages with GitHub Actions.** On GitHub:
   `Settings` → `Pages` → under **Build and deployment**, set
   **Source = GitHub Actions**. (Not "Deploy from a branch".)

4. Go to the **Actions** tab and watch the "Deploy to GitHub Pages" run finish
   (~1–2 min). When it's green, your site is live at:

   **https://arcs08.github.io/e-portfolio/**

That URL is what you share, and anyone can click it to open the site. 🎉

### Updating later
Just edit files (e.g. `src/data.js`), then:
```bash
git add .
git commit -m "update content"
git push
```
The site rebuilds and redeploys itself automatically.

---

## 📝 Notes

- The contact button opens your email client (`mailto:`), so no backend is needed,
  which is what keeps hosting free on GitHub Pages.
- The hero portrait and avatar are your real photo. Swap them by replacing the
  files in `public/` (keep the same filenames).
- Built and maintained by [@arcs08](https://github.com/arcs08).
