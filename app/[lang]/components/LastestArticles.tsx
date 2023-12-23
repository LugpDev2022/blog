import type { LatestArticle, Locale } from '@/app/types/shared.types';
import Article from './Article';
import Link from 'next/link';
import Arrow from '@/app/components/Arrow';

interface Props {
  lang: Locale;
}

const LastestArticles: React.FC<Props> = async ({ lang }) => {
  let pageArticles = [];

  try {
    const resp = await fetch(
      `${process.env.CURRENT_DOMAIN}/api/articles/${lang}/latest`,
      { next: { revalidate: 900 } }
    );
    const { articles } = await resp.json();
    pageArticles = articles;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <ul>
        {pageArticles.map((article: LatestArticle) => (
          <Article key={article.title} {...article} />
        ))}
      </ul>
      <Link
        href={`/${lang === 'es' ? 'es/' : ''}articles`}
        className='see-more-link ml-[15px] mt-[10px]'
      >
        See more <Arrow />
      </Link>
    </>
  );
};

export default LastestArticles;
