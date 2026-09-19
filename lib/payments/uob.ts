import { PaymentProvider } from './interface';
export const uobProvider: PaymentProvider = { id: 'uob', name: 'UOB Bank', logo: '/payments/uob.svg', currencies: ['sgd'], countries: ['SG'], isEnabled: () => !!process.env.UOB_KEY, createCheckout: async () => ({ url: 'https://uob.com.sg/checkout' }), verifyWebhook: async () => true };
