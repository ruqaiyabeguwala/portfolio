# 🚀 Ruqaiya Beguwala — Portfolio (v2) 🎨


Welcome to the second version of my portfolio created using Next.js. 💼✨

## Tech Stack 🧩

- **Next.js** (React framework) ⚛️
- **Tailwind CSS** (utility-first styling) 🎛️
- **Vercel** (deployment) ☁️
- **OpenAI SDK** (Vercel / OpenAI features) 🤖
- **Radix UI** (accessible primitives) ♿
- **GSAP** (animations) 🎬
- **TypeScript** (typed JS) 💠

## Requirements ✅

- Node.js **18.18.0** or higher (recommended) 🟩
- Yarn (this project uses `yarn` instead of `npm`) 🧶

## Getting Started (Local) 🧭

1. Clone the repository:

```bash
git clone https://github.com/ruqaiyabeguwala/portfolio.git
cd portfolio
```

2. Install dependencies with **yarn**:

```bash
yarn install
```

1. Create a `.env.local` file for secrets (see .env.example for reference) 🔐

2. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🖱️👀

## Available Scripts 🛠️

Scripts in `package.json` (use `yarn`):

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Usage examples:

```bash
# start dev server
yarn dev

# build for production
yarn build

# start production server (after build)
yarn start

# run linter
yarn lint
```

## Deployment 🚀

This site is intended to be deployed on **Vercel**. Connect the repository to Vercel, add the required environment variables in the project settings, and Vercel will run `yarn build` automatically.

- **Build command:** `yarn build`
- **Output directory:** Managed by Next.js

### GitHub Pages (static export)

This repository is also configured to deploy a static export to **GitHub Pages**.

- Static export: Next.js uses `output: 'export'` to generate the site in `out/`.
- Base path: The workflow sets `NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH` to the repo name so assets/routes resolve under `/<repo-name>/`.
- Deployment: The workflow at `.github/workflows/deploy.yml` builds and deploys with official Pages actions.

Steps:
- Push to `main` or run the workflow via “Run workflow”.
- In Settings → Pages, set Source to “GitHub Actions”.
- Your site will be available at `https://<username>.github.io/<repo-name>/`.

Notes:
- Server-side features and API routes are not available on GitHub Pages; they are excluded in the static export.
- For user/org pages at the root (`<username>.github.io`), set the base path env to empty in the workflow.

## Connect With Me

- [Linkedin](https://www.linkedin.com/in/ruqaiya-beguwala-859136121/)
- ruqaiya.beguwala@gmail.com
