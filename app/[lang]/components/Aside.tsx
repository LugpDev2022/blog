import Image from 'next/image';

import me from '@/public/me.jpg';
import { Locale } from '@/app/types/shared.types';

interface Props {
  lang: Locale;
}

const Aside: React.FC<Props> = ({ lang }) => {
  return (
    <aside className='border-[1px] border-cyan-300 rounded-[15px] max-w-xs mx-auto md:mx-0'>
      <Image
        src={me}
        alt='avatar'
        height={100}
        width={100}
        className='rounded-full mx-auto'
      />
    </aside>
  );
};

export default Aside;
