import ArticlesSection from './components/ArticlesSection';
import { getDictionary } from '../lib/getDictionary';
import { Locale } from '@/src/app/types/shared.types';

interface Props {
  params: { lang: Locale };
}

const ArticlesPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main>
      <h2 className='subtitle'>{dict.allArticles.subtitle}</h2>
      <ArticlesSection lang={lang} />
    </main>
  );
};

export default ArticlesPage;
