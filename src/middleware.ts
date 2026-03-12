import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cloudflare always adds the 'cf-ray' header.
  // If it is missing, it means the bot is hitting Vercel directly!
  const isCloudflare = request.headers.get('cf-ray');

  if (!isCloudflare) {
    // Block the request if it's not from Cloudflare
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
