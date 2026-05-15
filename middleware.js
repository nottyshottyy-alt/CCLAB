// middleware.js — Task 6.1: Middleware (Runs on the Edge before every page loads)
import { NextResponse } from "next/server";

export function middleware(request) {
  const res = NextResponse.next();
  res.headers.set("x-lab", "Lab8-CloudComputing");
  console.log(`[EDGE] ${request.method} ${request.nextUrl.pathname}`);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
