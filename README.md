# Firas Al Kharusi - Portfolio

A modern, performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with fluid typography
- **Dark/Light Mode**: System-aware theme switching
- **Performance Optimized**: 95+ Lighthouse scores
- **SEO Ready**: Meta tags, Open Graph, sitemap generation
- **Smooth Animations**: Framer Motion for delightful interactions
- **Project Showcase**: Dynamic project pages with detailed information
- **Professional Timeline**: Experience section with visual timeline

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [Bun](https://bun.sh/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/fbal98/my-portfolio.git
cd my-portfolio/modern
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
modern/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── common/      # Shared components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── content/         # JSON data files
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   └── images/         # Images and icons
└── package.json        # Project dependencies
```

## 🎨 Customization

### Content
Edit the JSON files in `src/content/` to update:
- `personal-info.json` - Personal information and social links
- `projects.json` - Portfolio projects
- `experience.json` - Work experience
- `skills.json` - Technical skills
- `education.json` - Educational background

### Styling
- Colors and theme variables are defined in `src/app/globals.css`
- Tailwind configuration uses CSS custom properties for easy theming
- Fluid typography scales automatically based on viewport size

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

---

Built with ❤️ using Next.js and Bun