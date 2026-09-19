import { PaymentProvider } from './interface';
export const monzoProvider: PaymentProvider = { id: 'monzo', name: 'Monzo', logo: '/payments/monzo.svg', currencies: ['gbp'], countries: ['GB'], isEnabled: () => !!process.env.MONZO_KEY, createCheckout: async () => ({ url: 'https://monzo.com/checkout' }), verifyWebhook: async () => true };
