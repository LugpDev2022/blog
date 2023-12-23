import Image from 'next/image';

import type { Locale } from '../types/shared.types';
import { getDictionary } from './lib/getDictionary';

import me from '@/public/me.jpg';

interface Props {
  params: { lang: Locale };
}

const Home: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='home-layout'>
      <div>
        <h1>Blog</h1>
        <p>{dict.example}</p>
      </div>
      <aside>
        <Image
          src={me}
          alt='avatar'
          height={100}
          width={100}
          className='rounded-full'
        />
      </aside>
    </main>
  );
};

export default Home;
