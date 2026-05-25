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
2. Settings are in `vercel.json` (build output: `artifacts/portfolio/dist/public`).
3. Add environment variables: `BASE_PATH=/` and `PORT=3000`.
