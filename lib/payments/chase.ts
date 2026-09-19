import { PaymentProvider } from './interface';
export const chaseProvider: PaymentProvider = { id: 'chase', name: 'Chase Bank', logo: '/payments/chase.svg', currencies: ['usd'], countries: ['US'], isEnabled: () => !!process.env.CHASE_KEY, createCheckout: async () => ({ url: 'https://chase.com/checkout' }), verifyWebhook: async () => true };
