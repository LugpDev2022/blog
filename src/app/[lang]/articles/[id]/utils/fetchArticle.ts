import { getFileById } from '@/src/utils/googleDrive';

export const fetchArticle = async (id: string, lang: string) => {
  const resp = await fetch(
    `${process.env.CURRENT_DOMAIN}/api/articles/${id}`,
    // Revalidate each day
    { next: { revalidate: 86400 } }
  );

  const data = await resp.json();

  if (resp.status !== 200) {
    throw new Error(data.message);
  }

  const content = await getFileById(data[lang].driveId);

  return { ...data, content };
};
