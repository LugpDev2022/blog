import { NextRequest, NextResponse } from 'next/server';
import { getLocale } from './utils/getLocale';

export function middleware(request: NextRequest) {
  const locale = getLocale(request);
  const { pathname } = request.nextUrl;

  if (pathname === '/es' || pathname.includes('/es/'))
    return NextResponse.next();

  const token = request.cookies.get('authCookie');
  const isTokenValid = true;

  if (pathname === '/login') {
    if (isTokenValid) {
      return NextResponse.redirect(new URL('/studio', request.nextUrl));
    }
    return NextResponse.next();
  }

  if (pathname === '/studio' || pathname.includes('/studio/')) {
    if (!isTokenValid) {
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
