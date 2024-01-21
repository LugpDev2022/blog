import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  if (email !== 'luiscerv2023@gmail.com' || password !== '#JMld1992') {
    return NextResponse.json({ error: 'Login Failed' }, { status: 401 });
  }

  cookies().set('access-token', 'we did it');

  return NextResponse.json({ message: 'Login Succesfull' });
};
