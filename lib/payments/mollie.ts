import { PaymentProvider } from './interface';
export const mollieProvider: PaymentProvider = { id: 'mollie', name: 'Mollie', logo: '/payments/mollie.svg', currencies: ['eur'], countries: ['NL','BE'], isEnabled: () => !!process.env.MOLLIE_KEY, createCheckout: async () => ({ url: 'https://mollie.com/checkout' }), verifyWebhook: async () => true };
