import { PaymentProvider } from './interface';

export const universalBankProvider: PaymentProvider = {
  id: 'universal-bank',
  name: 'Universal Bank Transfer',
  logo: '/payments/bank.svg',
  currencies: ['usd','eur','gbp','bdt','inr','brl','mxn','ngn','zar','thb','idr','myr','php','vnd','krw','jpy','cny','hkd','sgd','aud','cad','chf','sek','nok','dkk','pln','czk','huf','ron','bgn','hrk','rsd','mkd','all'],
  countries: undefined,
  isEnabled: () => true,
  createCheckout: async () => ({ url: 'https://babybotx.com/bank-instructions' }),
  verifyWebhook: async () => true,
};
