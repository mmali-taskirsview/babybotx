import { PaymentProvider } from './interface';

export const bankTransferProvider: PaymentProvider = {
  id: 'bank-transfer',
  name: 'Bank Transfer',
  logo: '/payments/bank.svg',
  currencies: ['usd','eur','gbp','bdt','inr','brl','mxn','ngn','zar'],
  countries: undefined,
  isEnabled: () => true,
  createCheckout: async () => ({ url: 'https://babybotx.com/bank-instructions' }),
  verifyWebhook: async () => true,
};
