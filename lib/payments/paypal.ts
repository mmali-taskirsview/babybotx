import { PaymentProvider } from './interface';
export const paypalProvider: PaymentProvider = { id: 'paypal', name: 'PayPal', logo: '/payments/paypal.svg', currencies: ['usd','eur','gbp'], isEnabled: () => !!process.env.PAYPAL_CLIENT_ID, createCheckout: async () => ({ url: 'https://paypal.com/checkout' }), verifyWebhook: async () => true };
