import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  let lang = req.nextUrl.href.includes('/es/') ? 'es' : 'en';

  const articles = [];
  const article = {
    icon: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
      alt: 'javascript logo',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur.',
    date: '14/dic/2023',
    href: `${lang === 'es' ? '/es' : ''}/articles/123`,
  };

  for (let i = 0; i < 12; i++) {
    articles.push(article);
  }

  return Response.json({ articles });
};
