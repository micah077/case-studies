import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (request.geo?.country === "PK") {
    return NextResponse.redirect("https://www.strugbits.com");
  }

  const allowedRoutes = [
    "/",
    "/contact-us",
    "/blogs",
    "/blog",
    "/services/staff-augmentation",
    "/services/web-development",
    "/services/wordpress-development",
    "/services/wix-development",
    "/services/seo",
    "/services/seo-audit",
    "/case-study",
    "/terms-and-conditions",
    "/privacy-and-policy",
    "/sitemap.xml",
  ];

  const isAllowedRoute = allowedRoutes.some((route) => {
    if (route === "/blog") {
      const dynamicRoutePattern = new RegExp("^/blog/[^/]+$");
      return dynamicRoutePattern.test(pathname);
    }
    else if (route === "/case-study") {
      const dynamicRoutePattern = new RegExp("^/case-study/[^/]+$");
      return dynamicRoutePattern.test(pathname);
    }
    return pathname === route;
  });

  if (!isAllowedRoute) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|assets|public|api).*)"],
};
