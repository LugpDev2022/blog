import type { Metadata } from 'next';
import './globals.css';

//TODO: Write a description
export const metadata: Metadata = {
  title: 'Luis Cervantes - Blog',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
