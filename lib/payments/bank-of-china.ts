import { PaymentProvider } from './interface';
export const bankOfChinaProvider: PaymentProvider = { id: 'bank-of-china', name: 'Bank of China', logo: '/payments/boc.svg', currencies: ['cny'], countries: ['CN'], isEnabled: () => !!process.env.BOC_KEY, createCheckout: async () => ({ url: 'https://boc.cn/checkout' }), verifyWebhook: async () => true };
