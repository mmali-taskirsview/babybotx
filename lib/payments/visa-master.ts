import { PaymentProvider } from './interface';

export const visaMasterProvider: PaymentProvider = {
  id: 'visa-master',
  name: 'Visa / Mastercard',
  logo: '/payments/visa.svg',
  currencies: ['usd','eur','gbp','bdt','inr','brl','mxn','ngn'],
  isEnabled: () => true,
  createCheckout: async () => ({ url: 'https://stripe.com/checkout' }),
  verifyWebhook: async () => true,
};
