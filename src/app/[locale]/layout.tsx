import '../globals.css';
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import BouncingBackGround from '@/components/BouncingBackGround';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// メタデータ
export const metadata = {
  title: 'JIHO RYUU | PORTFOLIO',
  description: "jiho's portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

// ✅ locale ルートの静的生成
export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  //   children,
  //   params: { locale }
  // }: {
  //   children: React.ReactNode;
  //   params: { locale: string };
  // }) {
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // 無効な言語の場合は404ページを表示
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // if (!routing.locales.includes(locale)) {
  //   notFound();
  // }

  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div id="background-layer" className="fixed inset-0 pointer-events-none" />
          <BouncingBackGround />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}