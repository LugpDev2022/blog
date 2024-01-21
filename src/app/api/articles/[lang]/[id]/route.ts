import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  const article = {
    header: {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      date: '4/nov/2023',
    },
  };

  return NextResponse.json({ article });
};
