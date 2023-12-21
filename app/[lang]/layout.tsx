import type { Metadata } from 'next';
import '../globals.css';

//TODO: Write a description
export const metadata: Metadata = {
  title: 'Luis Cervantes - Blog',
  description: '',
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
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
