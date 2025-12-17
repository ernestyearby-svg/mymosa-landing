import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const verified = req.cookies.get('mymosa_age_verified')?.value === 'true';

  if (pathname === '/verify') return NextResponse.next();

  if (!verified) {
    const url = req.nextUrl.clone();
    url.pathname = '/verify';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image).*)'] };
