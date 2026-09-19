import { PaymentProvider } from './interface';
export const wechatProvider: PaymentProvider = { id: 'wechat', name: 'WeChat Pay v3', logo: '/payments/wechat.svg', currencies: ['cny'], countries: ['CN'], isEnabled: () => !!process.env.WECHAT_KEY, createCheckout: async () => ({ url: 'https://wechat.com/checkout' }), verifyWebhook: async () => true };
