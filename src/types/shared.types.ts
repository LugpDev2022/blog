export type Locale = 'es' | 'en';

export type ArticleType = {
  icon: Icon;
  title: {
    en: string;
    es: string;
  };
  baseUrl: string;
  createdAt: string;
  _id: string;
};

export type Icon = {
  src: string;
  alt: string;
};
