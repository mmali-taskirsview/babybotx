import { PaymentProvider } from './interface';
export const alrajhiProvider: PaymentProvider = { id: 'alrajhi', name: 'Al Rajhi Bank', logo: '/payments/alrajhi.svg', currencies: ['sar'], countries: ['SA'], isEnabled: () => !!process.env.ALRAJHI_KEY, createCheckout: async () => ({ url: 'https://alrajhibank.com.sa/checkout' }), verifyWebhook: async () => true };
