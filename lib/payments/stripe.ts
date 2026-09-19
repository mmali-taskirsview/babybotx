import { PaymentProvider } from './interface';

export const stripeProvider: PaymentProvider = {
  id: 'stripe',
  name: 'Stripe',
  logo: '/payments/stripe.svg',
  currencies: ['usd','eur','gbp'],
  countries: undefined,
  isEnabled: () => !!process.env.STRIPE_SECRET_KEY,
  createCheckout: async () => ({ url: 'https://checkout.stripe.com/test' }),
  verifyWebhook: async () => true,
  refund: async () => true,
};
