import { MDXRemote } from 'next-mdx-remote/rsc';

import { formatDate } from '@/src/app/utils';
import { fetchArticle } from './utils/fetchArticle';
import { Locale } from '@/src/types/shared.types';

interface Props {
  params: { lang: Locale; id: string };
}

export async function generateMetadata({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const article = await fetchArticle(id, lang);

  return {
    title: article[lang].title,
  };
}

const ArticlePage: React.FC<Props> = async ({ params: { lang, id } }) => {
  const article = await fetchArticle(id, lang);

  return (
    <>
      <h1 className='article-title'>{article[lang].title}</h1>
      <h2>
        <time>{formatDate(article.createdAt, lang)}</time> - Luis Cervantes
      </h2>
      <hr />

      <div className='article-wrapper'>
        <MDXRemote source={article.content} />
      </div>
    </>
  );
};

export default ArticlePage;
