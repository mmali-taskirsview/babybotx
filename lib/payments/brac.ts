import { PaymentProvider } from './interface';
export const bracProvider: PaymentProvider = { id: 'brac', name: 'BRAC Bank', logo: '/payments/brac.svg', currencies: ['bdt'], countries: ['BD'], isEnabled: () => !!process.env.BRAC_KEY, createCheckout: async () => ({ url: 'https://bracbank.com/checkout' }), verifyWebhook: async () => true };
