import Article from '@/src/models/Article';
import { connectDB } from '@/src/utils/mongoose';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  connectDB();

  const { lang, title } = await req.json();

  const query: Record<string, any> = {};
  query[`${lang}.title`] = { $regex: title };

  const articles = await Article.find({ $or: [query] }).limit(2);

  return NextResponse.json({ articles });
};
