import { PaymentProvider } from './interface';
export const dutchBanglaProvider: PaymentProvider = { id: 'dutch-bangla', name: 'Dutch Bangla Bank', logo: '/payments/dutchbangla.svg', currencies: ['bdt'], countries: ['BD'], isEnabled: () => !!process.env.DUTCHBANGLA_KEY, createCheckout: async () => ({ url: 'https://dutchbanglabank.com/checkout' }), verifyWebhook: async () => true };
