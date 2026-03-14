import { NextResponse, NextRequest } from 'next/server';

// Emergency Revert: Removing all Cloudflare secret requirements.
// Basic path filtering only.

const BOT_PATHS = [
  '/wp-content',
  '/wp-admin',
  '/wp-login',
  '/wp-includes',
  '/wp-json',
  '/xmlrpc.php',
  '/admin',
  '/shop',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const botPath of BOT_PATHS) {
    if (pathname.startsWith(botPath)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
