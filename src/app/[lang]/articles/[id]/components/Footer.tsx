import Article from '@/src/app/[lang]/components/Article';
import { getDictionary } from '@/src/app/[lang]/utils/getDictionary';
import { buildArticleUrl, formatDate } from '@/src/app/utils';
import type { ArticleType, Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/random`,
    // Revalidate each day
    { next: { revalidate: 86400 } }
  );

  const { articles } = await resp.json();

  return (
    <footer className='article-footer'>
      <h4 className='footer-title'>{dict.article.otherArticles}</h4>

      <ul>
        {articles.map((article: ArticleType) => {
          const { _id, createdAt, icon } = article;

          return (
            <li key={_id}>
              <Article
                href={buildArticleUrl(lang, _id)}
                date={formatDate(createdAt, lang)}
                icon={icon}
                title={article[lang].title}
              />
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
