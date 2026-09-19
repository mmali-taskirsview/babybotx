import { PaymentProvider } from './interface';

export const nagadProvider: PaymentProvider = {
  id: 'nagad',
  name: 'Nagad',
  logo: '/payments/nagad.svg',
  currencies: ['bdt'],
  countries: ['BD'],
  isEnabled: () => !!process.env.NAGAD_API_KEY,
  createCheckout: async () => ({ url: 'https://nagad.com/checkout' }),
  verifyWebhook: async () => true,
};
