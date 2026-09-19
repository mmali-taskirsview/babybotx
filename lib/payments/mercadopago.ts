import { PaymentProvider } from './interface';
export const mercadopagoProvider: PaymentProvider = { id: 'mercadopago', name: 'MercadoPago', logo: '/payments/mercadopago.svg', currencies: ['brl','mxn'], countries: ['BR','MX'], isEnabled: () => !!process.env.MERCADOPAGO_KEY, createCheckout: async () => ({ url: 'https://mercadopago.com/checkout' }), verifyWebhook: async () => true };
