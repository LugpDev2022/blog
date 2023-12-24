import Aside from './components/Aside';
import LastestArticles from './components/LastestArticles';
import { getDictionary } from './lib/getDictionary';
import type { Locale } from '../types/shared.types';

interface Props {
  params: { lang: Locale };
}

const Home: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div className='home-layout'>
      <div className='mb-[50px]'>
        <h2 className='text-[22px] mb-[10px]'>{dict.latest.subtitle}</h2>
        <LastestArticles lang={lang} />
      </div>
      <Aside lang={lang} />
    </div>
  );
};

export default Home;
