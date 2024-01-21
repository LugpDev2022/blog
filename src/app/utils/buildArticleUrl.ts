export const buildArticleUrl = (lang: string, articleId: string): string => {
  const languagePrefix = lang === 'es' ? 'es/' : '';
  const url = `${process.env.CURRENT_DOMAIN}/${languagePrefix}articles/${articleId}`;
  return url;
};
