import { PaymentProvider } from './interface';
export const icbcProvider: PaymentProvider = { id: 'icbc', name: 'ICBC (China)', logo: '/payments/icbc.svg', currencies: ['cny'], countries: ['CN'], isEnabled: () => !!process.env.ICBC_KEY, createCheckout: async () => ({ url: 'https://icbc.com.cn/checkout' }), verifyWebhook: async () => true };
