import type { Locale } from '../types/shared.types';
import { getDictionary } from './lib/getDictionary';

interface Props {
  params: { lang: Locale };
}

const Home: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <h1>Blog</h1>
      <p>{dict.example}</p>
    </>
  );
};

export default Home;
