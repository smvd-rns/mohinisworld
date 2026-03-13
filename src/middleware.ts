import { NextResponse, NextRequest } from 'next/server';

// Common bot attack paths targeting WordPress/PHP vulnerabilities.
// This is a Next.js site — none of these paths are valid here.
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

  // Permanently block known bot/exploit paths
  for (const botPath of BOT_PATHS) {
    if (pathname.startsWith(botPath)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // Cloudflare automatically adds 'cf-connecting-ip' to all proxied requests.
  // This header is NOT present when bots hit Vercel directly (bypassing Cloudflare).
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  if (!cfConnectingIp) {
    // Block the request if it's not coming through Cloudflare
    return new NextResponse('Direct Access Not Allowed', { status: 403 });
  }

  return NextResponse.next();
}

// Run this on all paths to ensure total protection
export const config = {
  matcher: '/:path*',
};
