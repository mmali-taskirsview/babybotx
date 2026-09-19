import { PaymentProvider } from './interface';
export const barclaysProvider: PaymentProvider = { id: 'barclays', name: 'Barclays', logo: '/payments/barclays.svg', currencies: ['gbp','eur'], countries: ['GB','IE'], isEnabled: () => !!process.env.BARCLAYS_KEY, createCheckout: async () => ({ url: 'https://barclays.co.uk/checkout' }), verifyWebhook: async () => true };
