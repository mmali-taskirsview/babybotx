import { PaymentProvider } from './interface';
export const adyenProvider: PaymentProvider = { id: 'adyen', name: 'Adyen', logo: '/payments/adyen.svg', currencies: ['usd','eur','gbp'], isEnabled: () => !!process.env.ADYEN_KEY, createCheckout: async () => ({ url: 'https://adyen.com/checkout' }), verifyWebhook: async () => true };
