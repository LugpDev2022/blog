import Link from 'next/link';

import Article from './Article';
import Arrow from '@/src/icons/Arrow';
import { getDictionary } from '../lib/getDictionary';
import { formatDate, buildArticleUrl } from '../../utils';
import type { Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

type ArticleData = {
  translations: any;
  createdAt: string;
  _id: string;
};

const getArticles = async () => {
  const resp = await fetch(`http://localhost:3000/api/articles/latest`, {
    next: { revalidate: 600 },
  });

  console.log(await resp.json());
  // const { articles } = await resp.json();
  return [];
};

const LatestArticles: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const articles = await getArticles();

  return (
    <>
      <ul>
        {/* //TODO: Pass icon data  */}
        {articles.map(({ translations, createdAt, _id }: ArticleData) => (
          <li key={_id}>
            <Article
              title={translations[lang].title}
              date={formatDate(createdAt, lang)}
              href={buildArticleUrl(lang, _id)}
              icon={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
                alt: 'xd',
              }}
            />
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

export default LatestArticles;