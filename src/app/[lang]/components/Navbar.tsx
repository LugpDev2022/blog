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
      <nav className='flex justify-between'>
        <Link href={`/${lang === 'en' ? '' : 'es'}`}>
          <Image src={logo} alt='logo' width={55} height={55} />
        </Link>

        {/*Note:This provider includes a div inside */}
        <SearchContextProvider>
          <div className='flex items-center gap-[30px] text-lg font-light'>
            <SearchBox isSpanish={isSpanish} />
            <LanguageSwitch isSpanish={isSpanish} />
          </div>

          <ResultsContainer lang={lang} />
        </SearchContextProvider>
      </nav>
    </header>
  );
};

export default Navbar;
