export type Locale = 'es' | 'en';

export type LatestArticle = {
  title: string;
  icon: {
    src: string;
    alt: string;
  };
  date: string;
  href: string;
};
