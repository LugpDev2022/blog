export const formatDate = (dateString: string, lang: string): string => {
  const formattedDate = new Date(dateString).toLocaleDateString(lang);
  return formattedDate;
};
