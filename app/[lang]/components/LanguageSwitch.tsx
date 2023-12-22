import Link from 'next/link';
import Image from 'next/image';

import enFlag from '@/public/en.png';
import esFlag from '@/public/es.png';

interface Props {
  isSpanish: boolean;
}

const LanguageSwitch: React.FC<Props> = ({ isSpanish }) => {
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

      <span className='uppercase w-[22px]'>{isSpanish ? 'es' : 'en'}</span>
    </Link>
  );
};

export default LanguageSwitch;
