import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  if (
    ["/pages/login", "/pages/signup", "/pages/forgot-password"].includes(
      pathname
    )
  ) {
    if (session) {
      return NextResponse.redirect(new URL("/pages/dashboard", request.url));
    }
    return res;
  }

  if (
    pathname.startsWith("/pages/dashboard") ||
    pathname.startsWith("/api/protected")
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/pages/login", request.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/pages/dashboard/:path*",
    "/pages/login",
    "/pages/signup",
    "/pages/forgot-password",
  ],
};
