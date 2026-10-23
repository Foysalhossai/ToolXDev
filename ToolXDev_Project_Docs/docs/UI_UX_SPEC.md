# UI/UX Design Specification

**Product:** ToolXDev  
**Version:** 1.0  
**Audience:** Worldwide, English-first  
**Design goal:** Fast, useful, clear, trustworthy, mobile-first

## 1. Design principles

1. Show the utility before promotional content.
2. Keep the interface calm and uncluttered.
3. Use consistent spacing, typography, controls, and feedback states.
4. Make privacy and limitations understandable.
5. Avoid intrusive ads, popups, and unnecessary account prompts.
6. Ensure all controls work with keyboard and touch.
7. Provide clear empty, loading, success, and error states.

## 2. Visual direction

Recommended initial direction:
- Clean, modern, light-first interface with a dark text color and restrained blue accent.
- Neutral page background and clear content surfaces.
- Consistent border and radius system; avoid excessive shadows and gradients.
- Strong typography hierarchy and readable line lengths.
- Icons should supplement labels, not replace important labels.
- Dark mode can be added after the light theme is consistent and accessible.

Suggested starting tokens (adjust after visual testing):
- Page background: `#F8FAFC`
- Surface: `#FFFFFF`
- Main text: `#0F172A`
- Secondary text: `#475569`
- Border: `#E2E8F0`
- Accent: `#2563EB`
- Success: `#15803D`
- Warning: `#B45309`
- Error: `#B91C1C`
- Body font: system font stack or one optimized self-hosted font.
- Base spacing: 4px increments.
- Content max width: about 1120–1200px.
- Article reading width: about 680–760px.

These are initial design tokens, not strict branding constraints.

## 3. Global navigation

Desktop:
- Logo / ToolXDev wordmark.
- Tools menu.
- Categories or Explore.
- Blog.
- Search.
- Optional theme toggle.

Mobile:
- Compact logo.
- Search access.
- Menu button with accessible label.
- Avoid a large header that pushes the tool below the fold.

Footer:
- About, Contact, Privacy, Terms.
- Tool categories.
- Blog.
- Feedback links.
- Copyright and any required disclosures.

## 4. Homepage layout

1. Header/navigation.
2. Hero with a clear promise and tool search.
3. Popular/featured tools grid.
4. Browse by category.
5. Recently added or useful tools.
6. Selected practical articles.
7. Tool request call-to-action.
8. Footer.

Do not show fabricated ratings, usage counts, or “most popular” claims. Only label tools as popular when there is real supporting data.

## 5. Tool directory and category pages

- Page title and short category description.
- Search/filter controls if useful.
- Tool cards with name, concise purpose, and category or lightweight badge.
- Clear empty state when no results match.
- Paginate or use progressive loading if the catalogue becomes large.
- Use semantic links so crawlers and keyboard users can navigate.

## 6. Individual tool page layout

Recommended order:
1. Breadcrumb.
2. H1 / tool name.
3. Short value proposition.
4. Tool interface.
5. Status/error/progress region.
6. How to use.
7. Features and supported inputs.
8. Real examples and limitations.
9. Privacy and processing explanation.
10. FAQs.
11. Related tools and tutorials.
12. Optional ad placement only after usability testing and policy review.

On mobile, the main tool should be usable without scrolling through a long marketing introduction. Avoid sticky ads that cover controls.

## 7. Tool interface patterns

### Text tools
- Labeled textarea or editor.
- Clear, Format, Validate, or Copy actions as appropriate.
- Character/word counts where relevant.
- Copy success feedback.
- Error messages adjacent to the input.

### Image tools
- File picker and drag-and-drop as an enhancement.
- Explain supported formats and limits before processing.
- Show selected file name and size.
- Show progress when processing takes noticeable time.
- Provide before/after size and a clear download action.
- Revoke temporary object URLs when no longer needed.
- Never upload files unless required and disclosed.

### Developer tools
- Monospaced input/output.
- Preserve whitespace.
- Clear validation errors with line/position details where feasible.
- Avoid executing submitted code.
- Provide copy/download actions with accessible feedback.

### Website tools
- Explain what URLs are supported.
- Display loading and timeout states.
- Explain when a remote website blocks access.
- Do not imply the tool can bypass access controls.

### AI tools
- Show the type of data sent to the model.
- State input limits and usage quotas.
- Provide a clear submit/cancel/retry pattern.
- Do not claim output is guaranteed accurate.
- Do not send inputs to third parties without disclosure.

## 8. Content and SEO layout

Each tool page must support:
- Unique SEO title and meta description.
- One clear H1.
- Helpful introduction.
- Instructions with meaningful headings.
- Examples that reflect actual tool behavior.
- Supported formats and limitations.
- Accurate privacy note.
- FAQs based on genuine user needs.
- Internal links to related tools and articles.
- Canonical URL and appropriate structured data where applicable.

Avoid keyword stuffing and repeated boilerplate that adds no value. The tool should be visible early in the page.

## 9. Forms and feedback

Tool request form:
- Tool idea/title (required).
- What problem it solves (required).
- Optional example or reference URL.
- Optional email, only if follow-up is desired.
- Consent/privacy note where appropriate.
- Turnstile challenge when configured.
- Success message with no promise that the tool will be built.

Broken-tool report:
- Tool URL/slug (pre-filled when possible).
- What went wrong (required).
- Steps to reproduce (optional).
- Browser/device details only if useful and disclosed.
- Optional email.
- Turnstile and server-side validation.

Never accept code execution instructions or automatically turn submissions into CMS content.

## 10. Admin UX

Use Decap CMS's established interface instead of building a custom CMS visual system initially.

Organize collections with clear labels and help text:
- Tools.
- Blog posts.
- Categories.
- Pages / homepage settings.
- Redirects, if needed.

Use dropdowns for execution mode and status, structured repeatable fields for FAQs/features, and validation for slugs and required SEO fields.

Feedback review is a separate protected capability; do not imply Decap can manage D1 submissions without an integration.

## 11. Responsive behavior

Test at widths around:
- 320–375px narrow phones.
- 390–430px common phones.
- 768px tablet.
- 1024px small desktop.
- 1280px+ desktop.

Requirements:
- No unintended horizontal scrolling.
- Touch targets preferably around 44×44 CSS pixels.
- Form controls fit the viewport.
- Tool outputs wrap or scroll intentionally.
- Tables have a mobile-friendly alternative.
- Navigation and dialogs work by keyboard and screen reader.

## 12. Accessibility

Target WCAG 2.2 AA where practical:
- Semantic HTML.
- Visible focus states.
- Labels and instructions for inputs.
- Keyboard operability.
- Sufficient contrast.
- Error messages programmatically associated with fields.
- Status announcements for asynchronous results.
- Meaningful alt text for informative images.
- Respect reduced-motion settings.

## 13. Ads and future accounts

- No ads in MVP.
- Reserve optional ad areas without creating empty awkward gaps.
- Never disguise ads as tool controls.
- Do not place ads where accidental clicks are likely.
- No visitor login or signup prompts in MVP.
- Future accounts must be optional and justified by a real feature need.
