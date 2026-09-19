import { PaymentProvider } from './interface';
export const paystackProvider: PaymentProvider = { id: 'paystack', name: 'Paystack', logo: '/payments/paystack.svg', currencies: ['ngn','ghs'], countries: ['NG','GH'], isEnabled: () => !!process.env.PAYSTACK_KEY, createCheckout: async () => ({ url: 'https://paystack.com/checkout' }), verifyWebhook: async () => true };
