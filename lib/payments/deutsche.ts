import { PaymentProvider } from './interface';
export const deutscheProvider: PaymentProvider = { id: 'deutsche', name: 'Deutsche Bank', logo: '/payments/deutsche.svg', currencies: ['eur','usd'], countries: ['DE','US'], isEnabled: () => !!process.env.DEUTSCHE_KEY, createCheckout: async () => ({ url: 'https://db.com/checkout' }), verifyWebhook: async () => true };
