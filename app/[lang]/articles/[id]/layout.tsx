import Footer from './components/Footer';
import './article.css';
import { Locale } from '@/app/types/shared.types';

interface Props {
  children: React.ReactNode;
  params: { lang: Locale };
}

export async function generateMetadata() {
  return {
    title: 'Lorem ipsum dolor sit amet, consectetur',
  };
}

const ArticleLayout: React.FC<Props> = ({ children, params: { lang } }) => {
  return (
    <main className='article-layout'>
      {children}

      <Footer lang={lang} />
    </main>
  );
};

export default ArticleLayout;
