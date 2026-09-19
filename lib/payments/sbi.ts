import { PaymentProvider } from './interface';
export const sbiProvider: PaymentProvider = { id: 'sbi', name: 'State Bank of India', logo: '/payments/sbi.svg', currencies: ['inr'], countries: ['IN'], isEnabled: () => !!process.env.SBI_KEY, createCheckout: async () => ({ url: 'https://sbi.co.in/checkout' }), verifyWebhook: async () => true };
