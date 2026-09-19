import { PaymentProvider } from './interface';
export const klarnaProvider: PaymentProvider = { id: 'klarna', name: 'Klarna', logo: '/payments/klarna.svg', currencies: ['eur','usd','gbp'], countries: ['DE','SE','NL','GB','US'], isEnabled: () => !!process.env.KLARNA_KEY, createCheckout: async () => ({ url: 'https://klarna.com/checkout' }), verifyWebhook: async () => true };
