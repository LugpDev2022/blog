'use client';

import { useEffect, useState } from 'react';

import Article from '@/src/app/[lang]/components/Article';
import { buildArticleUrl, formatDate } from '@/src/app/utils';
import type { ArticleType, Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = ({ lang }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const resp = await fetch('/api/articles/random', { cache: 'no-cache' });

      const { articles } = await resp.json();

      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <footer className='article-footer'>
      <h4 className='footer-title'>
        {lang == 'es' ? 'Otros artículos' : 'Other articles'}
      </h4>

      <ul>
        {articles.map((article: ArticleType) => {
          const { _id, createdAt, icon } = article;

          return (
            <li key={_id}>
              <Article
                href={buildArticleUrl(lang, _id)}
                date={formatDate(createdAt, lang)}
                icon={icon}
                title={article.title[lang]}
              />
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
