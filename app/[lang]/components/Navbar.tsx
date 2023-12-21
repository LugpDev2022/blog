import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitch from './LanguageSwitch';
import SearchBox from './SearchBox';
import type { Locale } from '@/app/types/shared.types';

import logo from '@/public/logo.svg';

interface Props {
  lang: Locale;
}

const Navbar: React.FC<Props> = ({ lang }) => {
  return (
    <header className='px-[10px] sm:px-[25px] md:px-[75px] lg:px-[100px] py-[15px]'>
      <nav className='flex justify-between'>
        <Link href={`/${lang === 'en' ? '' : 'es'}`}>
          <Image src={logo} alt='logo' width={55} height={55} />
        </Link>

        <div className='flex items-center gap-[30px] text-lg font-light'>
          <SearchBox />
          <LanguageSwitch lang={lang} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
