import { updateSession } from '@/lib/updateSession';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  return await updateSession;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
