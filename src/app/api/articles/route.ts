import { NextRequest, NextResponse } from 'next/server';
import Article from '@/src/models/Article';
import { connectDB } from '@/src/utils/mongoose';
import { revalidatePath } from 'next/cache';

export const GET = async () => {
  try {
    connectDB();

    const articles = await Article.find();

    revalidatePath('/api/articles');

    return NextResponse.json({ articles });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    connectDB();

    const body = await req.json();

    const resp = await Article.create(body);

    revalidatePath('/api/articles');
    return NextResponse.json({ article: resp });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
};
