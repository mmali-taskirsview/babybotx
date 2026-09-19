import { PaymentProvider } from './interface';
export const maybankProvider: PaymentProvider = { id: 'maybank', name: 'Maybank', logo: '/payments/maybank.svg', currencies: ['myr'], countries: ['MY'], isEnabled: () => !!process.env.MAYBANK_KEY, createCheckout: async () => ({ url: 'https://maybank.com/checkout' }), verifyWebhook: async () => true };
