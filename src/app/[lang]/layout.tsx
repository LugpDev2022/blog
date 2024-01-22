import type { Metadata } from 'next';

import Navbar from './components/Navbar';
import { poppins } from '../../fonts';
import { Locale } from '@/src/types/shared.types';

import '../../globals.css';
import './blog.css';

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

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;

  return (
    <html lang={lang} className={poppins.className}>
      <body className='pt-[85px]'>
        <Navbar lang={lang} />

        {children}
      </body>
    </html>
  );
}
