import Aside from './components/Aside';
import LatestArticles from './components/LatestArticles';
import { getDictionary } from './utils/getDictionary';
import type { Locale } from '@/src/types/shared.types';

interface Props {
  params: { lang: Locale };
}

const Home: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='home-layout'>
      <div className='latest-container'>
        <h2 className='subtitle'>{dict.latest.subtitle}</h2>
        <LatestArticles lang={lang} />
      </div>
      <Aside lang={lang} />
    </main>
  );
};

export default Home;
