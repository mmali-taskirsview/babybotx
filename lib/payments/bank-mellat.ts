import { PaymentProvider } from './interface';
export const bankMellatProvider: PaymentProvider = { id: 'bank-mellat', name: 'Bank Mellat', logo: '/payments/bankmellat.svg', currencies: ['irr'], countries: ['IR'], isEnabled: () => !!process.env.BANKMELLAT_KEY, createCheckout: async () => ({ url: 'https://bankmellat.ir/checkout' }), verifyWebhook: async () => true };
