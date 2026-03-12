import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cloudflare always adds the 'cf-ray' header.
  // If it is missing, it means the bot is hitting Vercel directly!
  const isCloudflare = request.headers.get('cf-ray');

  if (!isCloudflare) {
    // Block the request if it's not from Cloudflare
    return new NextResponse('Direct Access Not Allowed', { status: 403 });
  }

  return NextResponse.next();
}

// Only run this on the main site pages
export const config = {
  matcher: ['/', '/about', '/contact'],
};
