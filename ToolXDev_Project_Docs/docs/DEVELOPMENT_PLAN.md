# Development Plan and AI-Coding Workflow

**Project:** ToolXDev  
**Version:** 1.0  
**Approach:** Small, testable increments; owner approves every meaningful release.

## 1. Suggested repository structure

```text
toolxdev/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── tools/
│   │   ├── content/
│   │   └── forms/
│   ├── content/
│   │   ├── blog/
│   │   ├── tools/
│   │   └── categories/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ToolLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── tools/
│   │   ├── categories/
│   │   ├── blog/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   ├── lib/
│   │   ├── schemas/
│   │   ├── seo/
│   │   └── tool-registry/
│   └── styles/
├── functions-or-worker/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── tools/
│   │   └── validation/
│   └── tests/
├── public/admin/
│   ├── index.html
│   └── config.yml
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── scripts/
│   ├── validate-content.ts
│   └── check-links.ts
├── wrangler.jsonc
├── package.json
├── tsconfig.json
├── README.md
└── docs/
```

The exact Worker/static asset routing and Decap authentication layout must be aligned with current framework and provider documentation during setup. Avoid maintaining two separate deployment systems unless a specific integration requires it.

## 2. Development phases

### Phase 0 — Verify foundations
- Confirm domain access and Cloudflare account.
- Create a private GitHub repository.
- Verify current Workers, GitHub, Decap, and Turnstile free-plan details.
- Confirm build/deploy flow with a tiny Astro page.
- Document secrets and environment setup.
**Exit criteria:** a simple HTTPS page deploys successfully and no paid plan is required.

### Phase 1 — Design system and public shell
- Create typography, spacing, color, and component tokens.
- Build header, navigation, footer, card, button, form, alert, and page layouts.
- Test mobile, keyboard navigation, and contrast.
**Exit criteria:** homepage and empty directory pages work across target widths.

### Phase 2 — Content model and SEO
- Define schemas for tools, posts, categories, and settings.
- Add sample tool entries and articles.
- Implement metadata, canonical URLs, sitemap, robots rules, breadcrumbs, and internal links.
- Add content validation.
**Exit criteria:** generated HTML includes unique headings and metadata; drafts do not ship.

### Phase 3 — Three client-side tools
- Implement Word Counter.
- Implement JSON Formatter/Validator.
- Implement Image Compressor.
- Add unit tests and safe error handling.
- Document input limits and privacy behavior.
**Exit criteria:** all tools work offline after page assets load, within their documented limits, without sending inputs to a backend.

### Phase 4 — Admin CMS
- Configure Decap collections and GitHub backend/auth.
- Restrict repository editing to the owner.
- Add preview and content workflow as supported by the selected configuration.
- Test create/edit/publish/rollback.
**Exit criteria:** owner can update content without editing layout code, and production builds validate it.

### Phase 5 — Feedback and protected API
- Add tool-request and bug-report forms.
- Add Turnstile and server-side verification.
- Add D1 only after verifying the required database setup and limits.
- Add a protected review workflow; do not assume Decap automatically manages D1 records.
- Add rate limits and input length constraints.
**Exit criteria:** spam/malformed requests are rejected; anonymous visitors cannot access submitted feedback.

### Phase 6 — QA and launch
- Run unit, integration, build, accessibility, and end-to-end checks.
- Check redirects, sitemap, canonical URLs, broken links, and 404s.
- Verify security headers, secret handling, and API limits.
- Test mobile network conditions and error states.
- Confirm backup/recovery steps.
**Exit criteria:** all release-blocking checks pass.

### Phase 7 — Add one server-side tool
- Select a tool with a clear use case.
- Write a threat model and input schema.
- Implement a fixed handler.
- Test abuse cases, timeout, redirects, and quota exhaustion.
**Exit criteria:** the endpoint is bounded, observable, documented, and does not expose secrets.

### Phase 8 — Optional AI
- Evaluate Workers AI or another provider's current free terms.
- Add explicit input/output limits.
- Provide privacy disclosure and usage limits.
- No paid fallback without owner approval.
**Exit criteria:** AI is optional, quota-aware, and cannot block the core website.

## 3. Tool registry pattern

Use a typed registry of known implementations. Conceptual example:

```ts
export const toolRegistry = {
  "word-counter": {
    executionMode: "client",
    version: 1,
  },
  "json-formatter": {
    executionMode: "client",
    version: 1,
  },
  "image-compressor": {
    executionMode: "client",
    version: 1,
  },
} as const;
```

This is a design example, not a complete implementation. The registry should map identifiers to actual imported handlers in reviewed code. CMS content may reference an ID but must not supply executable code.

## 4. Testing strategy

### Unit tests
- Pure tool logic.
- Input schemas and content schemas.
- Slug and metadata validation.
- Output formatting and error handling.

### Integration tests
- Worker input validation.
- Turnstile verification behavior.
- Rate limiting.
- D1 storage and authorization, if used.
- URL-fetch restrictions and redirect behavior.

### End-to-end tests
- Homepage navigation.
- Run each tool with valid and invalid input.
- Submit feedback.
- Verify mobile navigation and forms.
- Verify draft content is absent from production.
- Verify public pages and sitemap.

### Manual checks
- Keyboard-only use.
- Screen-reader labels.
- Narrow phone widths.
- Slow connections.
- Browser compatibility for image APIs.
- Privacy claims against actual network requests.

## 5. CI pipeline

Recommended checks:
1. Install locked dependencies.
2. Run formatting/lint.
3. Run TypeScript checks.
4. Validate content schemas and slugs.
5. Run unit tests.
6. Run security-sensitive API tests.
7. Build Astro site and Worker.
8. Check generated metadata, sitemap, and links.
9. Deploy preview.
10. Owner reviews and approves production release.

Do not place production secrets in build logs. Use platform secret storage and least-privilege tokens.

## 6. AI coding assistant rules

Put these rules in the repository's agent instructions (for example, `AGENTS.md`):

- Read all project docs before coding.
- Follow the architecture; do not swap frameworks or add services without asking.
- Keep client-side and server-side execution separate.
- Never execute code from CMS content.
- Never expose secrets in frontend code.
- Add tests for each new tool and security boundary.
- Keep dependencies minimal and explain new dependencies.
- Do not activate paid services or paid APIs.
- Do not claim a tool works until implementation and tests exist.
- Make small changes, run checks, summarize files changed, and list remaining risks.
- Preserve mobile-first design and accessible interaction.
- Make privacy statements match actual network behavior.

## 7. Release checklist

- [ ] Domain uses HTTPS.
- [ ] Public pages render correctly.
- [ ] CMS authentication and repository permissions are verified.
- [ ] No secrets committed or exposed.
- [ ] Content validation and build tests pass.
- [ ] Tool registry contains only approved implementations.
- [ ] Tool inputs have documented limits.
- [ ] URL fetching has SSRF protections, if applicable.
- [ ] Feedback submissions are validated and spam-protected.
- [ ] Feedback review is private.
- [ ] Sitemap contains published canonical pages only.
- [ ] Privacy and terms pages are accurate.
- [ ] Mobile and keyboard checks pass.
- [ ] Usage quotas and failure behavior are understood.
- [ ] No paid service is enabled without owner approval.
