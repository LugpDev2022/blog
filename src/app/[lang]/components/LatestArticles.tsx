import Link from 'next/link';

import Article from './Article';
import Arrow from '@/src/icons/Arrow';
import { getDictionary } from '../utils/getDictionary';
import { buildArticleUrl, formatDate } from '../../utils';

import type { Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

const getArticles = async () => {
  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/latest`,
    { next: { revalidate: 60 } }
  );

  const { articles } = await resp.json();

  return articles;
};

const LatestArticles: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const articles = await getArticles();

  return (
    <>
      <ul>
        {articles.map((article: any) => {
          const { _id, createdAt, icon } = article;

          return (
            <li key={_id}>
              <Article
                title={article[lang].title}
                date={formatDate(createdAt, lang)}
                href={buildArticleUrl(lang, _id)}
                icon={icon}
              />
            </li>
          );
        })}
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

export default LatestArticles;
