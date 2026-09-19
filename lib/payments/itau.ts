import { PaymentProvider } from './interface';
export const itauProvider: PaymentProvider = { id: 'itau', name: 'Itaú Unibanco', logo: '/payments/itau.svg', currencies: ['brl'], countries: ['BR'], isEnabled: () => !!process.env.ITAU_KEY, createCheckout: async () => ({ url: 'https://itau.com.br/checkout' }), verifyWebhook: async () => true };
