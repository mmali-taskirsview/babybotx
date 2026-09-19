import { PaymentProvider } from './interface';
export const sberbankProvider: PaymentProvider = { id: 'sberbank', name: 'Sberbank', logo: '/payments/sberbank.svg', currencies: ['rub'], countries: ['RU','BY','KZ'], isEnabled: () => !!process.env.SBERBANK_KEY, createCheckout: async () => ({ url: 'https://sberbank.ru/checkout' }), verifyWebhook: async () => true };
