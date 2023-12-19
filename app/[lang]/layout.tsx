import type { Metadata } from 'next';
import '../globals.css';

//TODO: Write a description
export const metadata: Metadata = {
  title: 'Luis Cervantes - Blog',
  description: '',
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }];
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  console.log(params.lang);

  return (
    <html lang={params.lang}>
      <body>{children}</body>
      <span>{params.lang}</span>
    </html>
  );
}
