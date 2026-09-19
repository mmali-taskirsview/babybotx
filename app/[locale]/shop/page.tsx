import { useTranslations } from 'next-intl';

export default function ShopPage() {
  const t = useTranslations('nav');
  return (
    <main className="min-h-screen bg-[#0A0E27] text-[#F8FAFC] px-6 py-16">
      <h1 className="text-4xl font-bold text-[#00E5FF] mb-8">{t('shop')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/shop/cleaning-bot" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition">Cleaning Bot</a>
        <a href="/shop/delivery-bot" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition">Delivery Bot</a>
        <a href="/shop/security-bot" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition">Security Bot</a>
      </div>
    </main>
  );
}
