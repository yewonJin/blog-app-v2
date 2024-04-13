import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { verifyAccessToken } from "@/shared/lib/jwt";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("jwt")?.value;

    if (!token) return NextResponse.redirect(new URL("/login", request.url));

    if (!verifyAccessToken(token)) {
      request.cookies.delete("jwt");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    const token = request.cookies.get("jwt")?.value;

    if (!token) return NextResponse.next();

    if (!verifyAccessToken(token)) return NextResponse.next();

    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
