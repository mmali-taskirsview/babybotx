import { PaymentProvider } from './interface';
export const commonwealthProvider: PaymentProvider = { id: 'commonwealth', name: 'Commonwealth Bank', logo: '/payments/commonwealth.svg', currencies: ['aud'], countries: ['AU'], isEnabled: () => !!process.env.COMMONWEALTH_KEY, createCheckout: async () => ({ url: 'https://commbank.com.au/checkout' }), verifyWebhook: async () => true };
