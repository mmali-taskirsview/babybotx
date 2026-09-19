import { PaymentProvider } from './interface';
export const afterpayProvider: PaymentProvider = { id: 'afterpay', name: 'Afterpay', logo: '/payments/afterpay.svg', currencies: ['usd','aud'], countries: ['US','AU'], isEnabled: () => !!process.env.AFTERPAY_KEY, createCheckout: async () => ({ url: 'https://afterpay.com/checkout' }), verifyWebhook: async () => true };
