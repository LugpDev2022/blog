'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitch = () => {
  const pathname = usePathname();

  const isSpanish = pathname.includes('/editor/es');
  const href = isSpanish
    ? pathname.replace('/editor/es', '/editor/en')
    : pathname.replace('/editor/en', '/editor/es');

  return (
    <Link
      href={href}
      className='inline-flex py-[9px] px-[14px] gap-[30px] border-[1px] border-cyan-300 rounded-full hover:text-cyan-300 transition'
    >
      <Image
        src={isSpanish ? '/es.png' : '/en.png'}
        className={`${isSpanish ? 'order-2' : ''} w-[30px]`}
        alt={isSpanish ? 'bandera españa' : 'England flag'}
        width={30}
        height={30}
      />

      <span className='uppercase w-[22px] text-lg font-light'>
        {isSpanish ? 'es' : 'en'}
      </span>
    </Link>
  );
};

export default LanguageSwitch;
