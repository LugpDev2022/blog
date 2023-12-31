import Article from '@/app/[lang]/components/Article';
import { getDictionary } from '@/app/[lang]/lib/getDictionary';
import type { BlogArticle, Locale } from '@/app/types/shared.types';

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/${lang}/random`,
    { cache: 'no-store' }
  );

  const { articles } = await resp.json();

  return (
    <footer className='article-footer'>
      <h4 className='footer-title'>{dict.article.otherArticles}</h4>

      <ul>
        {articles.map((article: BlogArticle) => (
          <li key={article.title}>
            <Article {...article} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
