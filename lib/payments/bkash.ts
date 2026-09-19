import { PaymentProvider } from './interface';

export const bkashProvider: PaymentProvider = {
  id: 'bkash',
  name: 'bKash',
  logo: '/payments/bkash.svg',
  currencies: ['bdt'],
  countries: ['BD'],
  isEnabled: () => !!process.env.BKASH_API_KEY,
  createCheckout: async () => ({ url: 'https://bkash.com/checkout' }),
  verifyWebhook: async () => true,
};
