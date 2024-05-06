import { updateSession } from '@/lib/updateSession';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/team/create', '/team/dashboard', '/team/view/[id]'];
const publicRoutes = ['/', 'auth/login'];
export async function middleware(req: NextRequest) {
  return await updateSession;
}

export const config = {
  matcher: ['/'],
};
