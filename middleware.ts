import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'es'];
export const defaultLocale = 'en';

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request) ?? defaultLocale;
  const { pathname } = request.nextUrl;

  if (pathname === '/es' || pathname.includes('/es/'))
    return NextResponse.next();

  if (pathname === '/studio' || pathname.includes('/studio/')) {
    const token = request.cookies.get('authCookie');

    const isTokenValid = token ? true : false;

    if (!isTokenValid) {
      if (pathname !== '/studio/login') {
        return NextResponse.redirect(new URL('/studio/login', request.nextUrl));
      }

      return NextResponse.next();
    }

    if (pathname === '/studio/login') {
      return NextResponse.redirect(new URL('/studio', request.nextUrl));
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
