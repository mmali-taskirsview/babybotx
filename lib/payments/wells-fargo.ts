import { PaymentProvider } from './interface';
export const wellsFargoProvider: PaymentProvider = { id: 'wells-fargo', name: 'Wells Fargo', logo: '/payments/wellsfargo.svg', currencies: ['usd'], countries: ['US'], isEnabled: () => !!process.env.WELLSFARGO_KEY, createCheckout: async () => ({ url: 'https://wellsfargo.com/checkout' }), verifyWebhook: async () => true };
