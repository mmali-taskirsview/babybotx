import { PaymentProvider } from './interface';
export const bankOfAmericaProvider: PaymentProvider = { id: 'bank-of-america', name: 'Bank of America', logo: '/payments/boa.svg', currencies: ['usd'], countries: ['US'], isEnabled: () => !!process.env.BOA_KEY, createCheckout: async () => ({ url: 'https://bankofamerica.com/checkout' }), verifyWebhook: async () => true };
