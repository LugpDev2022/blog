import '../../globals.css';
import { poppins } from '../../fonts';
import Aside from './components/Aside';
import './studio.css';

export const metadata = {
  title: 'Luis Cervantes - Studio',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={poppins.className}>
      <body className='studio-body'>
        <Aside />
        <main className='col-start-2'>{children}</main>
      </body>
    </html>
  );
}
