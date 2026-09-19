import { PaymentProvider } from './interface';
export const mizuhoProvider: PaymentProvider = { id: 'mizuho', name: 'Mizuho Bank', logo: '/payments/mizuho.svg', currencies: ['jpy'], countries: ['JP'], isEnabled: () => !!process.env.MIZUHO_KEY, createCheckout: async () => ({ url: 'https://mizuho-fg.co.jp/checkout' }), verifyWebhook: async () => true };
