import { PaymentProvider } from './interface';
export const alipayProvider: PaymentProvider = { id: 'alipay', name: 'Alipay Global', logo: '/payments/alipay.svg', currencies: ['cny','usd'], countries: ['CN'], isEnabled: () => !!process.env.ALIPAY_KEY, createCheckout: async () => ({ url: 'https://alipay.com/checkout' }), verifyWebhook: async () => true };
