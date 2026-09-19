import { PaymentProvider } from './interface';
export const midtransProvider: PaymentProvider = { id: 'midtrans', name: 'Midtrans', logo: '/payments/midtrans.svg', currencies: ['idr'], countries: ['ID'], isEnabled: () => !!process.env.MIDTRANS_KEY, createCheckout: async () => ({ url: 'https://midtrans.com/checkout' }), verifyWebhook: async () => true };
