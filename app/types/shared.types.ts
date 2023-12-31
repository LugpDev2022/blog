export type Locale = 'es' | 'en';

export type BlogArticle = {
  title: string;
  icon: {
    src: string;
    alt: string;
  };
  date: string;
  href: string;
};
