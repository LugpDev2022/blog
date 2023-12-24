import '../globals.css';
import { poppins } from '../fonts';

export const metadata = {
  title: 'Luis Cervantes - Studio',
  description: '',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
