import Article from '@/app/[lang]/components/Article';
import { getDictionary } from '@/app/[lang]/lib/getDictionary';
import { Locale } from '@/app/types/shared.types';

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <footer className='article-footer'>
      <h4 className='footer-title'>{dict.article.otherArticles}</h4>

      <ul>
        <li>
          <Article
            date='19/nov/2023'
            href='/'
            icon={{
              alt: 'js',
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
            }}
            title='FDSfsf'
          />
        </li>
        <li>
          <Article
            date='19/nov/2023'
            href='/'
            icon={{
              alt: 'js',
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
            }}
            title='FDSfsf'
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
