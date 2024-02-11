export const buildArticleUrl = (lang: string, articleId: string): string => {
  const languagePrefix = lang === 'es' ? 'es/' : '';
  const url = `/${languagePrefix}articles/${articleId}`;
  console.log(url);
  return url;
};
