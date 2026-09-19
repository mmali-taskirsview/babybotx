import { PaymentProvider } from './interface';
export const rupaliProvider: PaymentProvider = { id: 'rupali', name: 'Rupali Bank', logo: '/payments/rupali.svg', currencies: ['bdt'], countries: ['BD'], isEnabled: () => !!process.env.RUPALI_KEY, createCheckout: async () => ({ url: 'https://rupalibank.com/checkout' }), verifyWebhook: async () => true };
