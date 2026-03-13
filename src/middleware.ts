import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // TEMPORARILY DISABLED: cf-ray check while verifying new Vercel deployment.
  // Re-enable after confirming the site works end-to-end.
  //
  // const isCloudflare = request.headers.get('cf-ray');
  // if (!isCloudflare) {
  //   return new NextResponse('Direct Access Not Allowed', { status: 403 });
  // }

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
