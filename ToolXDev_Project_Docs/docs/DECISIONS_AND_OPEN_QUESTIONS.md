# Decisions, Assumptions, and Open Questions

## 1. Confirmed product decisions

- Start the website fresh.
- Domain: `toolxdev.org`.
- Budget target: ৳0/month for as long as practical.
- Audience: worldwide, English-first.
- Tool categories: image, text/files, developer, website, and AI.
- Owner manages the website alone at launch.
- Visitors do not need accounts at launch; accounts may be considered later.
- Visitors can request tools and report broken tools.
- Monetization preference: free tools with possible display advertising later.
- Prefer the easiest safe approach to adding tools.
- Tools and blog posts both need SEO-friendly pages.
- Admin manages content; executable implementations stay in code.

## 2. Recommended baseline decisions

- Astro + TypeScript for the public site.
- Cloudflare Workers Static Assets for deployment, subject to a successful proof-of-concept.
- GitHub for source and Git-backed content.
- Decap CMS for the first admin interface, after verifying authentication/backend configuration and current plan terms.
- Browser-side processing by default.
- Cloudflare Worker APIs only for necessary server operations.
- D1 for feedback only if a database-backed review workflow is implemented.
- R2 only when file storage needs justify it.
- No paid AI service or automatic paid fallback.
- No user accounts in the MVP.
- No arbitrary code execution from CMS fields.

## 3. Items to verify before implementation

1. Current Cloudflare Workers free limits, static asset configuration, build requirements, and custom-domain setup.
2. Current Decap CMS and Decap Turbo plan, authentication, editor limits, and GitHub backend configuration.
3. Whether the selected Decap workflow supports the desired preview and editorial experience.
4. How the owner will securely review D1 feedback; Decap does not manage arbitrary D1 records by default.
5. Whether feedback storage needs D1 at launch or can begin with a simpler secure workflow.
6. Current Turnstile terms and server-side verification requirements.
7. Current Workers AI models, free allowance, and terms before choosing an AI tool.
8. Privacy/cookie/consent requirements applicable to the audience and any advertising provider.
9. Browser support and tested limits for image compression and conversion.
10. The exact deployment pipeline for Astro static output and Worker API routes.

## 4. Decisions deliberately postponed

- User accounts and saved history.
- Premium features.
- Advertising integration.
- Multi-author support.
- A custom database-backed CMS.
- Background job queues.
- Large-file server-side processing.
- AI-generated publishing without owner review.
- Advanced analytics or visitor profiling.

## 5. Risk register

| Risk | Mitigation |
|---|---|
| Free-tier limits change | Verify before launch, monitor usage, avoid paid fallback |
| CMS authentication misconfigured | Test repository permissions and admin access before production |
| CMS content executes code | Use schema validation and fixed implementation registry |
| URL tool becomes SSRF proxy | Narrow allowlist, destination checks, redirect validation, timeouts and size limits |
| User uploads exhaust browser resources | File and pixel limits, workload limits, graceful errors |
| AI costs become unpredictable | Optional AI, quotas, server-side secrets, no paid fallback |
| SEO pages are thin/duplicated | Publish only useful pages with distinct purpose and accurate content |
| Feedback inbox is exposed | Protected review endpoint, server-side authorization, data minimization |
| Admin preview exposes drafts | Test production output and ensure preview authentication |
| Tool reports are spammed | Turnstile, validation, rate limiting, moderation |

## 6. Definition of “ready to code”

Begin implementation only after:
- The first three tools and their exact features are agreed.
- The Cloudflare static deployment proof-of-concept succeeds.
- The Decap authentication workflow is confirmed.
- Tool and blog schemas are reviewed.
- The owner understands how content publishing and code deployment differ.
