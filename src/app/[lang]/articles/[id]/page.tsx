import { MDXRemote } from 'next-mdx-remote/rsc';

import { formatDate } from '@/src/app/utils';
import { Locale } from '@/src/types/shared.types';
import { getFileById } from '@/src/utils/googleDrive';

interface Props {
  params: { lang: Locale; id: string };
}

const fetchArticle = async (id: string, lang: string) => {
  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/${id}`,
    // Revalidate each day
    { next: { revalidate: 86400 } }
  );

  const data = await resp.json();

  if (resp.status !== 200) {
    throw new Error(data.message);
  }

  const content = await getFileById(data[lang].driveId);

  return { ...data, content };
};

const ArticlePage: React.FC<Props> = async ({ params: { lang, id } }) => {
  const article = await fetchArticle(id, lang);

  return (
    <>
      <h1 className='article-title'>{article[lang].title}</h1>
      <h2 className='article-info'>
        <time>{formatDate(article.createdAt, lang)}</time> - Luis Cervantes
      </h2>
      <hr />

      <MDXRemote source={article.content} />
    </>
  );
};

export default ArticlePage;
