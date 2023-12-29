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
    <main className='home-layout'>
      <div className='latest-container'>
        <h2 className='subtitle'>{dict.latest.subtitle}</h2>
        <LastestArticles lang={lang} />
      </div>
      <Aside lang={lang} />
    </main>
  );
};

export default Home;
