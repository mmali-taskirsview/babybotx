import { PaymentProvider } from './interface';
export const caixabankProvider: PaymentProvider = { id: 'caixabank', name: 'CaixaBank', logo: '/payments/caixabank.svg', currencies: ['eur'], countries: ['ES','PT'], isEnabled: () => !!process.env.CAIXABANK_KEY, createCheckout: async () => ({ url: 'https://caixabank.com/checkout' }), verifyWebhook: async () => true };
