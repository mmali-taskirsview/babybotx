import { PaymentProvider } from './interface';
export const santanderProvider: PaymentProvider = { id: 'santander', name: 'Santander', logo: '/payments/santander.svg', currencies: ['eur','usd','mxn','brl'], countries: ['ES','MX','BR','US'], isEnabled: () => !!process.env.SANTANDER_KEY, createCheckout: async () => ({ url: 'https://santander.com/checkout' }), verifyWebhook: async () => true };
