import Article from '@/src/models/Article';
import { connectDB } from '@/src/utils/mongoose';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  res: { params: { id: string } }
) => {
  try {
    connectDB();

    const article = await Article.findById(res.params.id);

    revalidatePath('/[lang]', 'page');

    if (!article) throw new Error('Article not found');

    const { icon, es, en, createdAt } = article;
    const returnedArticle = { icon, es, en, createdAt };

    return NextResponse.json(returnedArticle);
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 });
  }
};
