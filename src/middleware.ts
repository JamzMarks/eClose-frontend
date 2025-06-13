import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = [
  '/',
  '/signin',
  '/signup',
  '/about',
  '/api/public', // se você tiver APIs públicas
];

// Prefixos que requerem autenticação
const PROTECTED_PREFIXES = ['/dashboard', '/feed', '/config'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const { pathname } = request.nextUrl;

  // Se for rota pública, continua normalmente
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Se for rota protegida e não tem token, redireciona
  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}
