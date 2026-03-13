import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cloudflare automatically adds 'cf-connecting-ip' to all proxied requests.
  // This header is NOT present when bots hit Vercel directly (bypassing Cloudflare).
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  if (!cfConnectingIp) {
    // Block the request if it's not coming through Cloudflare
    return new NextResponse('Direct Access Not Allowed', { status: 403 });
  }

  // Check for common bot attack paths (like the random /shop URLs)
  if (request.nextUrl.pathname.startsWith('/shop')) {
    return new NextResponse('Path Not Found', { status: 404 });
  }

  return NextResponse.next();
}

// Run this on all paths to ensure total protection
export const config = {
  matcher: '/:path*',
};
