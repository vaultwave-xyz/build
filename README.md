# Vaultwave website

Production source for [vaultwave.agency](https://vaultwave.agency/). The site is static HTML, CSS and JavaScript and can be deployed on Cloudflare Pages or another static host.

## Commands

- `npm run build` regenerates the core content pages from `scripts/build-pages.mjs`.
- `npm test` validates metadata, canonical uniqueness, JSON-LD syntax, internal file references and required crawler assets.
- `npm run indexnow` submits canonical URLs after a successful production deployment. Do not run it before the IndexNow key file is publicly reachable.

## Verification and analytics hooks

Do not invent tokens or IDs. When available, add the exact Google Search Console and Bing Webmaster verification meta tags to the homepage `<head>`. Add GA4 only after a Measurement ID and consent requirements are confirmed. GA4 automatically exposes referral hosts; use a comparison/filter for `chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `copilot.microsoft.com` and other verified AI referrers rather than rewriting inbound links.

## Deployment

Configure the host to deploy the repository root. `_redirects` and `_headers` are included for Cloudflare Pages-compatible hosting. After deployment, verify `/robots.txt`, `/sitemap.xml`, all canonical pages, response codes, headers and the IndexNow key file on production.
