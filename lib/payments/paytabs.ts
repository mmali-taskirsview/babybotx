import { PaymentProvider } from './interface';
export const paytabsProvider: PaymentProvider = { id: 'paytabs', name: 'PayTabs', logo: '/payments/paytabs.svg', currencies: ['usd','sar','aed'], countries: ['SA','AE','EG','QA','MA'], isEnabled: () => !!process.env.PAYTABS_KEY, createCheckout: async () => ({ url: 'https://paytabs.com/checkout' }), verifyWebhook: async () => true };
