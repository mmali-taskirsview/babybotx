import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');
  return (
    <main className="min-h-screen bg-[#0A0E27] text-[#F8FAFC]">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#00E5FF] mb-6">{t('title')}</h1>
        <p className="text-xl md:text-2xl text-[#F8FAFC]/80 max-w-2xl mb-10">{t('subtitle')}</p>
        <a href="/shop" className="inline-flex items-center rounded-full bg-[#7C3AED] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#6D28D9] transition">{t('cta')}</a>
      </section>
    </main>
  );
}
