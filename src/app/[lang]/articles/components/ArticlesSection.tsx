import { buildArticleUrl } from '@/src/app/utils';
import Article from './Article';
import type { ArticleType, Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

const getArticles = async () => {
  const resp = await fetch(`${process.env.CURRENT_DOMAIN}/api/articles`, {
    next: { revalidate: 60 },
  });

  const { articles } = await resp.json();

  return articles;
};

const ArticlesSection: React.FC<Props> = async ({ lang }) => {
  const articles = await getArticles();

  return (
    <section className='flex flex-wrap justify-between'>
      {articles.map((article: ArticleType) => (
        <Article
          key={article._id}
          href={buildArticleUrl(lang, article._id)}
          title={article.title[lang]}
          icon={article.icon}
        />
      ))}
    </section>
  );
};

export default ArticlesSection;
