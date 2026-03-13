import { NextResponse, NextRequest } from 'next/server';

// Common bot attack paths targeting WordPress/PHP vulnerabilities.
// This is a Next.js site — none of these paths are valid here.
// Cloudflare WAF also blocks these at the edge before they reach Vercel.
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

  // Block known WordPress/PHP bot exploit paths.
  // These paths can never exist on a Next.js site.
  for (const botPath of BOT_PATHS) {
    if (pathname.startsWith(botPath)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  return NextResponse.next();
}

// Run this on all paths to ensure total protection
export const config = {
  matcher: '/:path*',
};
