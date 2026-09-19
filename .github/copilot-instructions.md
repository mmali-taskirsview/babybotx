# BabyBotX — Copilot Rules

- Use Prisma (never raw SQL).
- Hosted checkout ONLY; never store card data.
- Verify ALL webhook signatures.
- Zod `.strict()` on every API route / server action.
- Re-fetch prices from DB; never trust client.
- Rate-limit public endpoints (Upstash Redis).
- Redact PII in logs; never log passwords / tokens / cards.
- Translate all new UI strings; no hardcoded English.
- Handle RTL (Arabic) with logical CSS properties.
- Format currency/dates via `Intl` with user's locale.
- Auto-detect locale by country; respect `NEXT_LOCALE` cookie.
- Mock external APIs in tests.
- Build step-by-step; stop after each step for review.
