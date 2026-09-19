import { PaymentProvider } from './interface';
export const xenditProvider: PaymentProvider = { id: 'xendit', name: 'Xendit', logo: '/payments/xendit.svg', currencies: ['idr','php','thb','vnd','myr'], countries: ['ID','PH','TH','VN','MY'], isEnabled: () => !!process.env.XENDIT_KEY, createCheckout: async () => ({ url: 'https://xendit.com/checkout' }), verifyWebhook: async () => true };
