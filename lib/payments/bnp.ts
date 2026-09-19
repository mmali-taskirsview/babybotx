import { PaymentProvider } from './interface';
export const bnpProvider: PaymentProvider = { id: 'bnp', name: 'BNP Paribas', logo: '/payments/bnp.svg', currencies: ['eur','usd'], countries: ['FR','BE','IT','DE','US'], isEnabled: () => !!process.env.BNP_KEY, createCheckout: async () => ({ url: 'https://bnpparibas.com/checkout' }), verifyWebhook: async () => true };
