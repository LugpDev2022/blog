import Article from './Article';
import { Locale } from '@/app/types/shared.types';

interface Props {
  lang: Locale;
}

const ArticlesSection: React.FC<Props> = async ({ lang }) => {
  let pageArticles: any = [];

  try {
    const resp = await fetch(
      `${process.env.CURRENT_DOMAIN}/api/articles/${lang}`,
      { cache: 'no-store' }
    );

    const { articles } = await resp.json();

    pageArticles = articles;
  } catch (e) {
    console.log(e);
  }

  return (
    <section className='flex flex-wrap justify-between'>
      {pageArticles.map((article: any) => (
        <Article key={article.title} {...article} />
      ))}
    </section>
  );
};

export default ArticlesSection;
