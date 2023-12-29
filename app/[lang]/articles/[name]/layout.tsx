import Footer from './components/Footer';
import './article.css';

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata() {
  return {
    title: 'Lorem ipsum dolor sit amet, consectetur',
  };
}

const ArticleLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className='article-layout'>
      {children}

      <Footer />
    </main>
  );
};

export default ArticleLayout;
