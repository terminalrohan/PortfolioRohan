# Rohan's Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS.

## Local development

```bash
pnpm install
$env:PORT="3000"; $env:BASE_PATH="/"   # PowerShell
pnpm --filter @workspace/portfolio run dev
```

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com).
2. Set **Root Directory** to `artifacts/portfolio`.
3. Leave Build / Output settings empty — `artifacts/portfolio/vercel.json` handles install, build, and output (`dist/public`).
4. Redeploy after pushing.
