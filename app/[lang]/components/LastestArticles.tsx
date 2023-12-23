import type { LatestArticle, Locale } from '@/app/types/shared.types';
import Article from './Article';
import Link from 'next/link';

interface Props {
  lang: Locale;
}

const LastestArticles: React.FC<Props> = async ({ lang }) => {
  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/${lang}/latest`,
    { cache: 'no-store' }
  );
  const { articles } = await resp.json();

  return (
    <>
      <ul>
        {articles.map((article: LatestArticle) => (
          <Article key={article.title} {...article} />
        ))}
      </ul>
      <Link href={`/${lang === 'es' ? 'es/' : ''}articles`}>See more</Link>
    </>
  );
};

export default LastestArticles;
