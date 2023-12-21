import Link from 'next/link';

import enFlag from '@/public/en.png';
import esFlag from '@/public/es.png';

import { Locale } from '@/app/types/shared.types';
import Image from 'next/image';

interface Props {
  lang: Locale;
}

const LanguageSwitch: React.FC<Props> = ({ lang }) => {
  const isSpanish = lang === 'es';

  return (
    <Link
      href={isSpanish ? '/' : '/es'}
      className='inline-flex py-[9px] px-[14px] gap-[30px] border-[1px] border-cyan-300 rounded-full hover:text-cyan-300 transition'
    >
      <Image
        src={isSpanish ? esFlag : enFlag}
        className={`${isSpanish ? 'order-2' : ''} w-[30px]`}
        alt={isSpanish ? 'bandera españa' : 'England flag'}
        width={30}
        height={30}
      />

      <span className='uppercase w-[22px]'>{lang}</span>
    </Link>
  );
};

export default LanguageSwitch;
