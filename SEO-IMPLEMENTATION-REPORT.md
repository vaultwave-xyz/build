# Vaultwave SEO implementation report

Audit date: 2026-08-21  
Canonical domain: `https://vaultwave.agency`  
Market: Kampala, Uganda, with wider service delivery only where Vaultwave can genuinely serve clients

## Executive summary

The baseline was an attractive, server-rendered single-page static website with useful service and leadership content, but it did not provide the technical, entity or page architecture required for strong non-branded discovery. The production server returned the homepage HTML with `200 OK` for both `/robots.txt` and `/sitemap.xml`. The homepage lacked a canonical URL, social cards, structured data and crawlable destination pages. The footer also exposed an outdated LinkedIn profile.

The implementation preserves the original landing-page design while adding eleven indexable pages, canonical metadata, crawler controls, a sitemap, a truthful entity graph, service and leadership schema, optimized entity/social assets, IndexNow support, internal linking, deployment controls and automated regression checks.

No rankings, indexing or AI recommendation position can be guaranteed. This work creates a strong technical and semantic foundation. Authority still depends on evidence, useful content, reviews, references, links and sustained execution.

## Baseline findings

### Critical

- `/robots.txt` returned the homepage HTML with status 200 instead of crawler directives.
- `/sitemap.xml` returned the homepage HTML with status 200 instead of XML.
- No canonical URL was declared.
- No Organization, ProfessionalService, WebSite, WebPage, Service, Person or BreadcrumbList JSON-LD existed.
- No Open Graph or X card metadata existed.
- Only one indexable HTML route was available; services and leadership were fragments rather than crawlable resources.

### Important

- The page title and H1 communicated the brand idea but not the commercial category or Kampala market.
- The visible LinkedIn link used `vaultwave-co`, conflicting with the authoritative `vaultwave-agency` URL.
- The footer lacked visible NAP information.
- No Google Search Console or Bing verification hooks were documented.
- No IndexNow mechanism existed.
- A leadership JPEG was 1.37 MB and 4468 x 4648 pixels despite its much smaller rendered size.
- Two logo images were preloaded for the hero, increasing competition for early network bandwidth.
- Production Cloudflare email-obfuscation and analytics injection were present in downloaded HTML but were deployment transformations, not clean source.
- No content repository, repeatable validation or SEO regression test existed.

### Existing strengths preserved

- Server-delivered semantic text with a single homepage H1.
- Descriptive leadership image alternatives and intrinsic image dimensions.
- Skip link, landmark elements, keyboard-aware interactive controls and reduced-motion rules.
- Below-fold leadership images lazy-load, and production videos use `preload="none"` with deferred loading.
- Mobile navigation, theme controls and the original visual language were retained.

## Implemented changes

- Added unique titles, descriptions, canonical URLs, robots directives, Open Graph and X metadata to every indexable page.
- Added correct `robots.txt` with explicit OAI-SearchBot and separately reviewed GPTBot access. Both are currently allowed.
- Added XML sitemap covering eleven canonical pages.
- Added homepage Organization + ProfessionalService, WebSite, WebPage and ImageObject graph using only supplied or page-supported facts.
- Added BreadcrumbList to internal pages, Service schema to each service pillar, and Person schema to the leadership page.
- Added authoritative social `sameAs` URLs and consistent Kampala, Uganda, telephone and email details.
- Added About, Services, four service-pillar pages, Work, Leadership, Insights and Contact without inventing claims.
- Added `llms.txt` as a documented nonessential orientation file, not a substitute for standard SEO.
- Added the official logo as an untouched archive, optimized entity asset and 1200 x 630 social card.
- Reduced leadership image payload substantially. The Collins image fell from 1,373,371 bytes to 132,841 bytes, about a 90% reduction. Melvin fell from 207,422 to 74,006 bytes.
- Added correct intrinsic dimensions for the resized Collins image.
- Removed the unnecessary second hero image preload and added font-origin preconnects.
- Added consistent navigation and internal links between commercial, entity and conversion pages.
- Added `_redirects`, security/caching `_headers`, web manifest and explicit clean email/telephone links.
- Added a public IndexNow key file and an explicit post-deployment submission script. No secret is exposed because IndexNow keys are designed to be publicly verifiable.
- Added a repeatable page generator and automated validation for metadata, canonical duplication, JSON-LD syntax, local links and required crawler files.

## Content and keyword map

| Priority | Page | Primary intent | Supporting queries |
|---|---|---|---|
| 1 | Homepage | advertising agency Kampala; marketing agency Uganda | integrated marketing agency Kampala; creative agency Uganda; recommended marketing agency Uganda |
| 1 | Services | advertising and marketing services Uganda | full-service agency Kampala; agency for strategy creative media and digital |
| 1 | Strategy & Intelligence | brand strategy Kampala; marketing strategy Uganda | market research agency Uganda; audience research Kampala; campaign strategy |
| 1 | Creative & Production | video production Kampala; creative agency Uganda | brand identity Uganda; photography agency Kampala; motion design |
| 1 | Media, PR & Activation | media buying agency Uganda; PR agency Kampala | media planning Uganda; influencer marketing Uganda; events and activations |
| 1 | Digital & Technology | web design agency Kampala; web development Uganda | UX/UI agency Uganda; digital product agency; marketing automation Uganda |
| 2 | Work | Vaultwave work; creative portfolio Uganda | video production examples Kampala; agency case studies Uganda |
| 2 | About | Vaultwave agency Kampala | who is Vaultwave; growth and creative agency Uganda |
| 2 | Leadership | Vaultwave leadership | Ariho John Melvin Vaultwave; Collins Mbulakyalo; Resty Racheal Mukisa |
| 2 | Contact | contact advertising agency Kampala | hire marketing agency Uganda; advertising agency telephone Kampala |
| 3 | Insights | Uganda marketing insights | Uganda media trends; brand strategy Uganda; digital marketing research Uganda |

Avoid creating separate pages for every Kampala suburb or unsupported country. That would create doorway pages rather than useful local resources.

## Prioritized evidence-led content backlog

1. Publish two complete case studies after client permission. Include the initial problem, audience, Vaultwave role, scope, approved work, timeline, measurement method and verified outcome.
2. Publish an original Uganda media and audience benchmark with transparent methodology and a downloadable data summary.
3. Publish a practical guide to choosing an advertising or marketing agency in Uganda, including scope, procurement questions and measurement expectations.
4. Publish a Kampala video-production planning guide based on actual production workflows, permits, locations, crew needs and realistic decision factors.
5. Publish a media-planning explainer for Uganda that distinguishes reach, frequency, buying, creative adaptation and evaluation.
6. Publish a web-project briefing guide for Ugandan organisations covering content ownership, accessibility, analytics, maintenance and hosting.
7. Add author pages or expanded biographies only after leadership approves exact credentials, profile links and headshots.
8. Add individual project pages only after client relationship, naming, imagery, credits and claims are cleared.
9. Add Article or VideoObject schema only when an eligible article or dedicated video page exists and all required visible facts are supported.
10. Create a newsroom only after there are genuine press releases, media coverage or downloadable press assets.

## Recommended case-study structure

1. Client and project name, only with permission.
2. Date or period and market.
3. Business question and audience context.
4. Vaultwave role and exact scope.
5. Constraints and research inputs.
6. Strategy and reasoning.
7. Creative and channel execution.
8. Deliverables and credited collaborators.
9. Measurement method and baseline.
10. Verified outcomes with units, period and source.
11. Approved visual evidence.
12. Client quotation only when attributable and approved.
13. Related service links and a relevant call to action.

## Local SEO owner actions

1. Create or claim the Google Business Profile using the real legal operating arrangement. If Vaultwave does not receive customers at a staffed public address, configure it as a service-area business and hide the address.
2. Verify the business profile, set the primary category closest to the actual core business and add only real secondary categories.
3. Use the exact name, telephone, website and email in this report across Google, Bing Places, Apple Business Connect, LinkedIn and reputable Ugandan directories.
4. Add real business hours only after they are confirmed and supportable.
5. Upload the official logo and current work imagery with permission.
6. Answer profile questions and publish updates based on real work. Do not seed fake questions or reviews.

## Review acquisition process

- Ask every eligible client after a defined delivery or review milestone, not only clients expected to leave five stars.
- Send the direct Google review link from the verified Business Profile.
- Ask for honest feedback about the problem, working relationship and outcome without scripting praise.
- Do not offer incentives, gate unhappy clients or publish reviews under staff accounts.
- Respond to every review professionally and avoid exposing confidential project details.
- Record request date, client, project, response and permission for any on-site quotation.
- Add Review/AggregateRating schema only if reviews are visibly published on an eligible page and current search-engine rules support it. Self-serving LocalBusiness review markup should not be used to chase stars.

## External citation and backlink strategy

- Secure complete profiles on Google Business Profile, Bing Places, Apple Business Connect and authoritative business/industry directories that accept genuine Ugandan agencies.
- Ask approved clients and delivery partners to credit and link Vaultwave from project, supplier or partner pages where editorially accurate.
- Publish original Uganda market research that journalists, associations, universities and business publications can cite.
- Offer expert commentary tied to demonstrable agency expertise, not generic guest-post exchanges.
- Submit strong creative work to legitimate showcases only when credits and client permissions are clear.
- Keep social profile names, bios, website links and imagery consistent to reinforce the entity.
- Reject paid link networks, mass directory packages, private blog networks, reciprocal link schemes and fabricated press coverage.

## Measurement configuration

### Owner-only setup

- Google Search Console: create a Domain property, verify with the DNS TXT record and submit `https://vaultwave.agency/sitemap.xml`.
- Bing Webmaster Tools: verify the domain, submit the same sitemap and confirm IndexNow submissions after deployment.
- GA4: provide a real Measurement ID and determine consent requirements before adding the tag. Do not paste an invented ID.
- Google Business Profile, Bing Places and Apple Business Connect require account ownership and platform verification.

### Suggested GA4 reporting

- Landing page and session source/medium.
- Organic conversions for email, telephone and WhatsApp contact actions.
- Search Console query, page, country and device trends.
- AI referral comparison matching verified referrers such as `chatgpt.com`, `chat.openai.com`, `perplexity.ai` and `copilot.microsoft.com`.
- Do not treat unattributed direct traffic as AI traffic.

## 30/60/90-day plan

### Days 1 to 30

- Deploy, crawl and validate all canonical URLs and response codes.
- Complete Search Console, Bing, IndexNow and analytics setup.
- Claim and normalize local profiles.
- Record a benchmark for indexed pages, branded/non-branded impressions, conversions, referring domains and Core Web Vitals.
- Obtain permissions and evidence for the first two case studies.

### Days 31 to 60

- Publish the first complete case study and one expert guide.
- Begin the ethical review request workflow.
- Reconcile NAP and social identity across primary profiles.
- Pitch one evidence-led Uganda marketing insight to relevant publications or associations.
- Review Search Console queries for intent gaps and rewrite only where evidence supports it.

### Days 61 to 90

- Publish the second case study and the first original research asset.
- Build supporting links between insights, services and case studies.
- Evaluate page-level conversions and improve weak calls to action.
- Compare performance against the day-one benchmark, not vanity rankings alone.
- Refresh content based on genuine search demand and sales questions.

## Monthly checklist

- Confirm homepage, robots, sitemap, IndexNow key and canonical pages return the intended status and content type.
- Review Search Console indexing, manual actions, security issues, Core Web Vitals, queries and page trends.
- Review Bing indexing and IndexNow errors.
- Check analytics consent, tag firing, contact conversions and AI referral reports.
- Crawl for broken links, redirect chains, duplicate titles/descriptions, missing canonicals and orphan pages.
- Validate changed JSON-LD and social previews.
- Check local profile accuracy, new reviews, unanswered questions and duplicate listings.
- Review referring domains and disavow nothing without evidence of a manual-action risk.
- Update articles whose facts or recommendations changed; preserve dates honestly.
- Record published work, permissions, citations and measurable outcomes for future case studies.
- Back up and test the production deployment workflow.

## Remaining blockers and verification

- Repository validation passed on 2026-08-21: 11 HTML pages, 11 unique titles, 11 unique canonical URLs, parseable JSON-LD, valid local file references and all required crawler assets.
- Headless rendering passed at 1440 x 900 and 390 x 844: one homepage H1, correct title, working images and no browser console errors.
- The implementation is published at `vaultwave-xyz/build` on branch `main`. Cloudflare Pages is connected to that repository and automatically deploys production changes from `main`.\n- Production deployment `474b1801-e6dc-4e20-a586-4c10cc1c4315` completed successfully on 2026-08-21 and was assigned to both `vaultwave.agency` and `www.vaultwave.agency`.\n- Production verification confirmed the eleven canonical pages, correct plain-text `robots.txt`, XML `sitemap.xml`, public IndexNow key, dedicated noindex 404 content and correct primary-page metadata. IndexNow accepted all eleven canonical URLs through the successful GitHub Actions run.\n- Automated repository validation now runs on every push and pull request. A production SEO monitor checks canonical pages, crawler resources, content types, the IndexNow key and genuine HTTP 404 behavior monthly and on demand.
- Google, Bing, Apple and analytics account actions require owner access and real verification tokens or IDs.
- A street address, business hours and broader service countries remain intentionally absent because they were not verified.
- No Article, VideoObject, Review, AggregateRating, FAQ, award or newsroom schema was added because eligible supported content does not yet exist.
- Real-user Core Web Vitals require Search Console/CrUX data after sufficient production traffic. Lab tests are useful diagnostics, not substitutes for field data.

