import { PaymentProvider } from './interface';
export const razorpayProvider: PaymentProvider = { id: 'razorpay', name: 'Razorpay', logo: '/payments/razorpay.svg', currencies: ['inr'], countries: ['IN'], isEnabled: () => !!process.env.RAZORPAY_KEY, createCheckout: async () => ({ url: 'https://razorpay.com/checkout' }), verifyWebhook: async () => true };
