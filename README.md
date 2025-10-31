# MattWang Personal Site

A minimal, aesthetic personal website built with Vite + React + TypeScript and Tailwind CSS.

## Features

- Clean, modern design focused on projects
- Light/dark theme toggle with localStorage persistence
- Fully responsive and accessible
- Static build - no backend required
- Easy content editing via `/src/content` files

## Tech Stack

- **Vite** - Build tool
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **clsx & tailwind-merge** - Conditional styling utilities

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output: `dist/`

### Preview Production Build

```bash
npm run preview
```

### Lint & Format

```bash
npm run lint
npm run format
```

## Editing Content

### Site Information

Edit `src/content/site.ts` to update:
- Name, role, tagline
- Links (email, GitHub, LinkedIn)
- Meta information

### Projects

Edit `src/content/projects.ts` to:
- Add/remove projects
- Update descriptions and tags
- Link to live sites or GitHub repos

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Framework auto-detects Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Custom Domain

1. Add your domain in Vercel settings
2. Create DNS records as provided by Vercel
3. Wait for DNS propagation

## Project Structure

```
src/
├── main.tsx                 # Entry point
├── App.tsx                  # Main app component
├── index.css                # Global styles + theme
├── content/
│   ├── site.ts              # Site configuration
│   └── projects.ts          # Projects data
├── components/
│   ├── ThemeProvider.tsx    # Theme context
│   ├── ThemeToggle.tsx      # Theme switcher
│   ├── Container.tsx        # Layout wrapper
│   ├── Section.tsx          # Section wrapper
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card component
│   ├── ProjectCard.tsx     # Project card
│   └── Tag.tsx              # Tag component
├── sections/
│   ├── Hero.tsx             # Landing section
│   ├── Projects.tsx         # Projects section
│   ├── About.tsx            # About section
│   └── Contact.tsx          # Contact section
└── lib/
    └── utils.ts             # Utility functions
```

## License

MIT




