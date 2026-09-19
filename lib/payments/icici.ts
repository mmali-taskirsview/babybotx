import { PaymentProvider } from './interface';
export const iciciProvider: PaymentProvider = { id: 'icici', name: 'ICICI Bank', logo: '/payments/icici.svg', currencies: ['inr'], countries: ['IN'], isEnabled: () => !!process.env.ICICI_KEY, createCheckout: async () => ({ url: 'https://icicibank.com/checkout' }), verifyWebhook: async () => true };
