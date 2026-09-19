import { PaymentProvider } from './interface';
export const scotiabankProvider: PaymentProvider = { id: 'scotiabank', name: 'Scotiabank', logo: '/payments/scotiabank.svg', currencies: ['cad','usd'], countries: ['CA','US'], isEnabled: () => !!process.env.SCOTIABANK_KEY, createCheckout: async () => ({ url: 'https://scotiabank.com/checkout' }), verifyWebhook: async () => true };
