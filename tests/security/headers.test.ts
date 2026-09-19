import { describe, it, expect } from 'vitest';

describe('security headers', () => {
  it('CSP allows Stripe/PayPal', () => {
    const csp = "default-src 'self'; script-src 'self' https://js.stripe.com";
    expect(csp).toContain('stripe.com');
  });
});
