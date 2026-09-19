import { PaymentProvider } from './interface';
export const starlingProvider: PaymentProvider = { id: 'starling', name: 'Starling Bank', logo: '/payments/starling.svg', currencies: ['gbp'], countries: ['GB'], isEnabled: () => !!process.env.STARLING_KEY, createCheckout: async () => ({ url: 'https://starlingbank.com/checkout' }), verifyWebhook: async () => true };
