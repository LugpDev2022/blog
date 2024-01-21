import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitch from './LanguageSwitch';
import SearchBox from './SearchBox';
import type { Locale } from '@/src/app/types/shared.types';

import logo from '@/public/logo.svg';

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

        <div className='flex items-center gap-[30px] text-lg font-light'>
          <SearchBox isSpanish={isSpanish} />
          <LanguageSwitch isSpanish={isSpanish} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
