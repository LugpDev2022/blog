import { NextRequest, NextResponse } from 'next/server';
import { getLocale } from './utils/getLocale';
import { getToken } from 'next-auth/jwt';

export default async function middleware(request: NextRequest) {
  const locale = getLocale(request) ?? 'en';
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/es')) return NextResponse.next();

  const token = await getToken({ req: request });

  if (pathname === '/login') {
    if (token) {
      return NextResponse.redirect(new URL('/studio', request.nextUrl));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith('/studio')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
    return NextResponse.next();
  }

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
