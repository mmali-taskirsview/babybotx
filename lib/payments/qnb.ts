import { PaymentProvider } from './interface';
export const qnbProvider: PaymentProvider = { id: 'qnb', name: 'QNB (Qatar)', logo: '/payments/qnb.svg', currencies: ['qar'], countries: ['QA'], isEnabled: () => !!process.env.QNB_KEY, createCheckout: async () => ({ url: 'https://qnb.com/checkout' }), verifyWebhook: async () => true };
