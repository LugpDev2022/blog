import Image from 'next/image';

import me from '@/public/me.jpg';
import { Locale } from '@/app/types/shared.types';
import { getDictionary } from '../lib/getDictionary';

import linkedin from '@/public/contacts/linkedin.svg';
import github from '@/public/contacts/github.svg';
import twitter from '@/public/contacts/twitter.svg';
import fiverr from '@/public/contacts/fiverr.svg';

interface Props {
  lang: Locale;
}

const Aside: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <aside className='border-[1px] text-center border-cyan-300 rounded-[15px] mx-auto p-5 md:mx-0 text-lg'>
      <Image
        src={me}
        alt='avatar'
        height={100}
        width={100}
        className='rounded-full mx-auto mb-5'
      />
      <h4>{dict.aside.author}</h4>

      <p className='my-[25px] font-light'>{dict.aside.about}</p>

      <ul className='flex gap-[30px] justify-center items-center'>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://mx.linkedin.com/in/luiscerv'
          >
            <Image src={linkedin} alt='linkedin' width={30} height={30} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/LugpDev2022'
          >
            <Image src={github} alt='github' width={30} height={30} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/LugpDev2022'
          >
            <Image src={twitter} alt='twitter' width={30} height={30} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.fiverr.com/lugpdev2022'
          >
            <Image src={fiverr} alt='fiverr' width={30} height={30} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
