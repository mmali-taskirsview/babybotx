import { PaymentProvider } from './interface';
export const hsbcProvider: PaymentProvider = { id: 'hsbc', name: 'HSBC', logo: '/payments/hsbc.svg', currencies: ['usd','gbp','eur','hkd','sgd'], countries: ['GB','US','HK','SG','CN','AU','CA'], isEnabled: () => !!process.env.HSBC_KEY, createCheckout: async () => ({ url: 'https://hsbc.com/checkout' }), verifyWebhook: async () => true };
