import { PaymentProvider } from './interface';
export const tbankProvider: PaymentProvider = { id: 'tbank', name: 'T-Bank (Russia)', logo: '/payments/tbank.svg', currencies: ['rub'], countries: ['RU'], isEnabled: () => !!process.env.TBANK_KEY, createCheckout: async () => ({ url: 'https://tbank.ru/checkout' }), verifyWebhook: async () => true };
