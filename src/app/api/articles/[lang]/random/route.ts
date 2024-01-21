import { BlogArticle } from '@/src/app/types/shared.types';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const article: BlogArticle = {
    icon: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
      alt: 'JS Logo',
    },
    title: 'Other articles',
    date: '30/12/2023',
    href: '/articles/es/123',
  };

  return NextResponse.json({ articles: [article, article] });
};
