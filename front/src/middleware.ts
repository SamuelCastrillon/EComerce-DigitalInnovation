import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const cookieSignin = request.cookies.get("userSignIn");

  if (currentPath === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (cookieSignin) {
    if (currentPath === "/createAccount" || currentPath === "/signIn") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  if (!cookieSignin) {
    if (
      currentPath === "/dashboard/account" ||
      currentPath === "/dashboard/orders" ||
      currentPath === "/dashboard/cart"
    ) {
      return NextResponse.redirect(new URL("/signIn", request.url));
    }
  }
}
