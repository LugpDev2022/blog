import Link from 'next/link';

import Article from './Article';
import Arrow from '@/app/components/Arrow';
import { getDictionary } from '../lib/getDictionary';
import type { LatestArticle, Locale } from '@/app/types/shared.types';

interface Props {
  lang: Locale;
}

const LastestArticles: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

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
          <li key={article.title}>
            <Article {...article} />
          </li>
        ))}
      </ul>
      <Link
        href={`/${lang === 'es' ? 'es/' : ''}articles`}
        className='see-more-link ml-[15px] mt-[10px]'
      >
        {dict.latest.seeMoreLink} <Arrow />
      </Link>
    </>
  );
};

export default LastestArticles;
