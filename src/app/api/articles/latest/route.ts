import { NextResponse } from 'next/server';
import Article from '@/src/models/Article';
import { connectDB } from '@/src/utils/mongoose';
import { revalidatePath } from 'next/cache';

export const GET = async () => {
  try {
    connectDB();

    const articles = await Article.find().sort({ createdAt: -1 }).limit(5);

    revalidatePath('/api/articles/latest');

    return NextResponse.json({ articles });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
};
