import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitch from './LanguageSwitch';
import SearchBox from './SearchBox';
import ResultsContainer from './ResultsContainer';
import type { Locale } from '@/src/types/shared.types';

import logo from '@/public/logo.svg';
import SearchContextProvider from '../context/SearchContext';

interface Props {
  lang: Locale;
}

const Navbar: React.FC<Props> = ({ lang }) => {
  const isSpanish = lang === 'es';

  return (
    <header className='navbar backdrop-blur-sm'>
      <nav className='flex justify-between flex-wrap md:justify-end md:items-center'>
        <Link
          href={`/${lang === 'en' ? '' : 'es'}`}
          className='w-[46px] md:me-auto md:w-auto'
        >
          <Image src={logo} alt='logo' width={55} height={55} />
        </Link>

        <LanguageSwitch isSpanish={isSpanish} />
        <SearchBox isSpanish={isSpanish} />
      </nav>
    </header>
  );
};

export default Navbar;
