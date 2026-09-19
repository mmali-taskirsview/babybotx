# BabyBotX — Vercel Deploy Guide (Beginner)

1. Login: `vercel login` (already done)
2. Deploy: `vercel --prod`
3. When asked:
   - Link to existing project? Choose "Create new project"
   - Project name: `babybotx`
   - Framework: Next.js
4. After deploy, copy the URL (e.g., `babybotx-xyz.vercel.app`)
5. Add custom domain:
   - Vercel Dashboard → Project → Settings → Domains
   - Add `babybotx.com`
   - Follow DNS instructions (add A/CNAME records at your registrar)
6. Verify HTTPS (SSL auto-provided by Vercel)

Run `npm run build` locally first to confirm no errors.
