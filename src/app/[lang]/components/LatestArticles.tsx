import Link from 'next/link';

import type { ArticleType, Locale } from '@/src/types/shared.types';
import Article from '@/src/app/[lang]/components/Article';
import { getDictionary } from '@/src/app/[lang]/utils/getDictionary';
import { buildArticleUrl, formatDate } from '@/src/app/utils';
import Arrow from '@/src/icons/Arrow';

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
        {articles.map((article: ArticleType) => {
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
