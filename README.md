# Advanced AI/ML Portfolio

Modern personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It is designed for GitHub Pages and keeps content in editable data files instead of hardcoding projects into components.

## Local Development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
npm run preview
```

## Content Files

Edit these files for most updates:

- `src/data/profile.ts` for name, role, intro, email, resume URL, SEO copy, and homepage stats.
- `src/data/projects.ts` for project cards, categories, links, icons, status, images, and modal details.
- `src/data/experience.ts` for work history timeline cards.
- `src/data/skills.ts` for skill groups.
- `src/data/education.ts` for education timeline content.
- `src/data/socials.ts` for GitHub, LinkedIn, email, and resume links.
- `src/data/research.ts` for papers, blogs, notebooks, reports, and future work.

## Adding Projects

Add a new object to `src/data/projects.ts`:

```ts
{
  slug: "new-project",
  title: "New Project",
  shortDescription: "One-line summary.",
  longDescription: "Longer modal description.",
  category: "AI",
  tags: ["Python", "RAG", "React"],
  icon: "Sparkles",
  image: "gradient-ai",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  paperUrl: "https://...",
  date: "2026",
  status: "In Progress",
  featured: true,
  highlights: ["Impact bullet one.", "Impact bullet two."]
}
```

Valid categories are `ML`, `AI`, `Data`, `Web`, `Research`, and `Tools`.

## Changing Icons

Icons are string keys mapped in `src/lib/icons.tsx`. To add another Lucide icon:

1. Import it from `lucide-react`.
2. Add it to the `icons` object.
3. Use the string key in any data file, for example `icon: "BrainCircuit"`.

## Changing Theme Colors

Theme tokens live in `tailwind.config.js`. The main visual styling is in:

- `src/styles/index.css`
- `src/components/AnimatedBackground.tsx`
- Tailwind classes across page and card components

The UI supports dark and light themes through the toggle in the navbar.

## Resume PDF

Replace:

```text
public/resume/Aman-Pratap-Singh-Resume.pdf
```

Then update `resumeUrl` in `src/data/profile.ts` if you rename the file.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`. To deploy:

1. Push the project to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow builds `dist` and publishes it to GitHub Pages.

`vite.config.ts` automatically sets the correct base path for project pages using `GITHUB_REPOSITORY`. For a user/organization site or a custom domain, set this repository variable if needed:

```text
VITE_BASE_PATH=/
```

## Adding a Custom Domain Later

1. Add your domain in **Settings > Pages > Custom domain**.
2. Create the required DNS records with your domain provider.
3. Add a `public/CNAME` file containing only your domain, for example:

```text
www.yourdomain.com
```

4. Commit and push.

## Visitor Analytics / Ping Options

GitHub Pages is static, so analytics and real-time notifications need the right tool:

1. GitHub repository traffic is basic, limited, and not real-time.
2. Privacy-friendly analytics options include Plausible, GoatCounter, Umami, and Cloudflare Web Analytics.
3. Real-time pings to Discord, Telegram, or email require a backend or serverless function because GitHub Pages cannot securely run server-side code.
4. A site cannot automatically know a visitor's real name. Analytics may show approximate page, timestamp, browser, referrer, country/city estimate, and IP-derived metadata depending on the provider and privacy laws.
5. A visitor's name can be known with consent if they submit the contact form or log in through OAuth.

## Production Notes

- The contact form is currently a static UI. Connect it to Formspree, Basin, Netlify Forms, or a serverless endpoint for live submissions.
- Project images use named gradient treatments to avoid asset bloat. You can replace them with real screenshots by changing the card rendering or mapping image keys to files in `public`.
- The app uses `HashRouter` so refreshes work reliably on GitHub Pages without custom 404 routing.
