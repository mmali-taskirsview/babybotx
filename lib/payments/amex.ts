import { PaymentProvider } from './interface';
export const amexProvider: PaymentProvider = { id: 'amex', name: 'American Express', logo: '/payments/amex.svg', currencies: ['usd','eur','gbp'], isEnabled: () => true, createCheckout: async () => ({ url: 'https://stripe.com/checkout' }), verifyWebhook: async () => true };
