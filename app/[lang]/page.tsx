import Aside from './components/Aside';
import { getDictionary } from './lib/getDictionary';
import type { Locale } from '../types/shared.types';

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
      <Aside lang={lang} />
    </main>
  );
};

export default Home;
