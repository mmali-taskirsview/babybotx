import { PaymentProvider } from './interface';
export const natwestProvider: PaymentProvider = { id: 'natwest', name: 'NatWest', logo: '/payments/natwest.svg', currencies: ['gbp'], countries: ['GB'], isEnabled: () => !!process.env.NATWEST_KEY, createCheckout: async () => ({ url: 'https://natwest.com/checkout' }), verifyWebhook: async () => true };
