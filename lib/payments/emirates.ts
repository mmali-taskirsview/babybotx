import { PaymentProvider } from './interface';
export const emiratesProvider: PaymentProvider = { id: 'emirates', name: 'Emirates NBD', logo: '/payments/emirates.svg', currencies: ['aed'], countries: ['AE','QA','BH'], isEnabled: () => !!process.env.EMIRATES_KEY, createCheckout: async () => ({ url: 'https://emiratesnbd.com/checkout' }), verifyWebhook: async () => true };
