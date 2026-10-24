# Dreams AI Data

The public landing page for **https://dreamsaidata.com**, hosted by GitHub Pages from `main` → `/docs`.

## Editing and publishing

Install Node.js 22 or later and pnpm 10.18.0. Run `pnpm install --frozen-lockfile`, edit `src/Home.tsx` or `src/index.css`, then run `pnpm check` and `pnpm build`. Commit both the source changes and generated `docs/` output, and push to `main`. GitHub Pages publishes the committed `/docs` folder automatically.

`pnpm dev` starts local development; `pnpm preview` previews the built site. The build prerenders the landing page into complete HTML and adds browser interactivity through React hydration.

## Hosting

Repository Settings → Pages must use **Deploy from a branch**, branch **main**, folder **/docs**, and custom domain **dreamsaidata.com**. Enable **Enforce HTTPS** once GitHub has issued the domain certificate. `public/CNAME` and `.nojekyll` are copied into the published folder during the build.

The hero, video cover, infographic, and favicon are stored in `public/` and served by GitHub Pages. Video playback remains embedded using DataSupply’s hosted MP4. Every “Join the network” button points to `https://datasupply.ai/w/p/y9eT8nN-` and opens in a new tab.

This site has no local signup fields, API server, database, login, or dependency on Manus hosting. No historical contact submissions, credentials, or server configuration are included in this repository.
