import { PaymentProvider } from './interface';
export const sonaliProvider: PaymentProvider = { id: 'sonali', name: 'Sonali Bank', logo: '/payments/sonali.svg', currencies: ['bdt'], countries: ['BD'], isEnabled: () => !!process.env.SONALI_KEY, createCheckout: async () => ({ url: 'https://sonalibank.com/checkout' }), verifyWebhook: async () => true };
