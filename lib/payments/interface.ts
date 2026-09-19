export interface PaymentProvider {
  id: string;
  name: string;
  logo: string;
  currencies: string[];
  countries?: string[];
  isEnabled(): boolean;
  createCheckout(orderId: string, amount: number, currency: string): Promise<{ url: string }>;
  verifyWebhook(payload: unknown, signature: string): Promise<boolean>;
  refund?(orderId: string, amount?: number): Promise<boolean>;
}
