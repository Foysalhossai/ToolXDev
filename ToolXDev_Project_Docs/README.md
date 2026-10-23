# ToolXDev — Project Documentation Pack

**Project:** ToolXDev (`toolxdev.org`)  
**Purpose:** A fast, mobile-first collection of useful online tools and practical tutorials.  
**Audience:** Worldwide, English-first.  
**Owner model:** One owner at launch.  
**Budget target:** £0/month equivalent / ৳0 per month wherever feasible, using free tiers. Free-tier availability and limits can change.

## Included documents

- `docs/PRD.md` — Product requirements and scope.
- `docs/ARCHITECTURE.md` — System architecture, components, data flow, security boundaries, and technology choices.
- `docs/SRS.md` — Software requirements, functional and non-functional requirements, acceptance criteria.
- `docs/UI_UX_SPEC.md` — Design system, page layouts, responsive behavior, accessibility, and content design.
- `docs/DEVELOPMENT_PLAN.md` — Repository structure, implementation phases, testing, deployment, and AI-coding workflow.
- `docs/DECISIONS_AND_OPEN_QUESTIONS.md` — Key decisions, assumptions, and items to verify.

## Read order

1. PRD
2. Architecture
3. SRS
4. UI/UX Specification
5. Development Plan
6. Decisions and Open Questions

## Important implementation rule

These documents are the project baseline, not proof that services or free-tier limits will remain unchanged. Before deployment, verify current Cloudflare, GitHub, Decap CMS, and AI-provider pricing and limits. Do not enable paid services without the owner's explicit approval.

## Product principle

The CMS manages content and safe configuration. Executable tool implementations live in version-controlled code. Never execute arbitrary code entered into the CMS.
