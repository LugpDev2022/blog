import ArticlesSection from './components/ArticlesSection';
import { getDictionary } from '../utils/getDictionary';
import { Locale } from '@/src/types/shared.types';

interface Props {
  params: { lang: Locale };
}

const ArticlesPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main>
      <h2 className='subtitle'>{dict.allArticles.subtitle}</h2>
      {/* <ArticlesSection lang={lang} /> */}
    </main>
  );
};

export default ArticlesPage;
