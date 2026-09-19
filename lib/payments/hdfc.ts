import { PaymentProvider } from './interface';
export const hdfcProvider: PaymentProvider = { id: 'hdfc', name: 'HDFC Bank', logo: '/payments/hdfc.svg', currencies: ['inr'], countries: ['IN'], isEnabled: () => !!process.env.HDFC_KEY, createCheckout: async () => ({ url: 'https://hdfcbank.com/checkout' }), verifyWebhook: async () => true };
