import { NextRequest, NextResponse } from 'next/server';
import Article from '@/src/app/models/Article';
import { connectDB } from '@/src/app/utils/mongoose';

export const GET = async () => {
  try {
    connectDB();

    const articles = await Article.find().sort({ createdAt: -1 }).limit(5);

    return NextResponse.json({ articles });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
};
