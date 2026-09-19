import { PaymentProvider } from './interface';
export const wiseProvider: PaymentProvider = { id: 'wise', name: 'Wise', logo: '/payments/wise.svg', currencies: ['usd','eur','gbp'], countries: undefined, isEnabled: () => !!process.env.WISE_KEY, createCheckout: async () => ({ url: 'https://wise.com/checkout' }), verifyWebhook: async () => true };
