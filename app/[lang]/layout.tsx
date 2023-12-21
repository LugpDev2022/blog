import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from './components/Header';
import '../globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'],
});

//TODO: Write a description
export const metadata: Metadata = {
  title: 'Luis Cervantes - Blog',
  description: '',
  robots: 'index, follow',
  alternates: {
    languages: {
      es: 'https://blog.luiscerv.tech/es',
      en: 'https://blog.luiscerv.tech',
    },
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className={poppins.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
