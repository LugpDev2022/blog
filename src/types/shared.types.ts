export type Locale = 'es' | 'en';

export type ArticleType = {
  en: {
    title: string;
    content: string;
  };
  es: {
    title: string;
    content: string;
  };
  icon: {
    src: string;
    alt: string;
  };
  createdAt: string;
  _id: string;
};
