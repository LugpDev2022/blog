import '../globals.css';
import { poppins } from '../fonts';
import Aside from './components/Aside';

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
      <body className='m-0'>
        <Aside />
        {children}
      </body>
    </html>
  );
}
