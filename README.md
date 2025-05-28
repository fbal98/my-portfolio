# Firas Al Kharusi - Portfolio

A modern, minimalist portfolio website built with Next.js 15, TypeScript, and Tailwind CSS 4. Features cutting-edge 2025 design patterns including progressive reveal navigation and bento grid layouts.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4, Framer Motion
- **Progressive Reveal Navigation**: Navigation transforms from text → icons → dots based on scroll
- **Bento Grid Menu**: Modern dropdown menu with varied tile sizes
- **Minimalist Design**: Clean, content-focused layout with ample whitespace
- **Performance Optimized**: 95+ Lighthouse scores with optimized animations
- **Responsive Design**: Mobile-first approach with fluid typography
- **Dark/Light Mode**: System-aware theme switching (removed manual toggle for cleaner UI)
- **SEO Ready**: Meta tags, Open Graph, sitemap generation
- **Smooth Animations**: Subtle Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with @theme directive
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [Bun](https://bun.sh/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/fbal98/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx     # Main page (Hero → About → Projects)
│   │   └── projects/    # Dynamic project detail pages
│   ├── components/       # React components
│   │   ├── common/      # Layout components
│   │   │   ├── Navigation.tsx    # Progressive reveal nav
│   │   │   ├── Breadcrumb.tsx   # Project page breadcrumbs
│   │   │   └── Footer.tsx       # Minimal footer
│   │   ├── sections/    # Page sections (Hero, About, Projects)
│   │   └── ui/          # Reusable UI components
│   ├── content/         # JSON data files
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── public/              # Static assets
│   ├── fonts/          # Dosis variable font
│   └── images/         # Project images
└── package.json        # Project dependencies
```

## 🎨 Customization

### Content
Edit the JSON files in `src/content/` to update:
- `personal-info.json` - Personal information and social links
- `projects.json` - Portfolio projects (set `featured: true` to show on homepage)
- `experience.json` - Work experience (not displayed, used in resume)
- `skills.json` - Technical skills (shown in project tech stacks)
- `education.json` - Educational background (used in resume)

### Styling
- **Tailwind CSS 4**: Configuration done via `@theme` directive in `globals.css`
- **Color System**: Uses `oklch()` color space for better color accuracy
- **Typography**: Fluid typography with light font weights throughout
- **Minimal Palette**: Neutral grays + single blue accent color
- **No `tailwind.config.js`**: All configuration in CSS (Tailwind v4 approach)

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
Build the production bundle:
```bash
bun run build
```

The output will be in the `.next` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Firas Al Kharusi**
- Website: [www.firasb.com](https://www.firasb.com)
- GitHub: [@fbal98](https://github.com/fbal98)
- LinkedIn: [@firasb98](https://www.linkedin.com/in/firasb98/)

## 🎯 Design Philosophy

This portfolio follows a **minimalist-first** approach:
- Clean layouts with ample whitespace
- Progressive reveal navigation (text → icons → dots)
- Subtle animations without flashy effects
- Content-focused design
- Mobile-first responsive approach
- Performance optimized with React best practices

## 📝 Key Features Explained

### Progressive Reveal Navigation
- Starts with just the logo visible
- Navigation items fade in as you scroll
- Transforms through three states based on scroll position
- Bento grid menu appears after 10% scroll

### Minimalist Sections
- **Hero**: Clean introduction with name and role
- **About**: Contact info and resume download (lead generation focus)
- **Projects**: Featured work in clean grid layout
- Removed sections: Experience, Skills, separate Contact (integrated into About)

---

Built with ❤️ using Next.js and Bun