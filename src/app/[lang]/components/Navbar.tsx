import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitch from './LanguageSwitch';
import SearchBox from './SearchBox';
import type { Locale } from '@/src/types/shared.types';

import logo from '@/public/logo.svg';
import SearchResult from './SearchResult';

interface Props {
  lang: Locale;
}

const Navbar: React.FC<Props> = ({ lang }) => {
  const isSpanish = lang === 'es';

  return (
    <header className='navbar backdrop-blur-sm'>
      <nav className='flex justify-between'>
        <Link href={`/${lang === 'en' ? '' : 'es'}`}>
          <Image src={logo} alt='logo' width={55} height={55} />
        </Link>

        <div className='relative'>
          <div className='flex items-center gap-[30px] text-lg font-light'>
            <SearchBox isSpanish={isSpanish} />
            <LanguageSwitch isSpanish={isSpanish} />
          </div>

          <ul className='absolute top-16 left-0 border border-cyan-300 bg-[#090F3F]/95 w-full p-2 rounded-lg hidden lg:flex-col gap-2 lg:flex'>
            <SearchResult
              href='/es/articles'
              title=' Mi titulo del articulo 710. Intentando ver como se veria si fuera más'
              icon={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
                alt: 'JS LOGO',
              }}
            />
            <SearchResult
              href='/es/articles'
              title=' Mi titulo del articulo 710. Intentando ver como se veria si fuera más'
              icon={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
                alt: 'JS LOGO',
              }}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
