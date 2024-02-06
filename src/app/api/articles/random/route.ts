import Article from '@/src/models/Article';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const count = await Article.countDocuments();

  // Generate two random indices
  const randomIndices = Array.from({ length: 2 }, () =>
    Math.floor(Math.random() * count)
  );

  // Fetch two random documents from the collection
  const randomArticles = await Article.aggregate([
    { $skip: randomIndices[0] },
    { $limit: 2 },
  ]);

  revalidatePath('/api/random');
  return NextResponse.json({ articles: randomArticles });
};
