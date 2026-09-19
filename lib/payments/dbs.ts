import { PaymentProvider } from './interface';
export const dbsProvider: PaymentProvider = { id: 'dbs', name: 'DBS Bank', logo: '/payments/dbs.svg', currencies: ['sgd'], countries: ['SG'], isEnabled: () => !!process.env.DBS_KEY, createCheckout: async () => ({ url: 'https://dbs.com/checkout' }), verifyWebhook: async () => true };
