import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/explore",
    "/contact",
    "/about",
    "/sign-in",
    "/sign-up",
    "/my-garden",
    "/find-my-plant",
    "/explore/[id]",
    "/api/explore",
    "/api/explore/[id]",
  ],
  ignoredRoutes: [
    "/explore",
    "/api/explore",
    "/explore/:path*",
    "/api/explore/:path*",
    "/api/contact",
    "/explore/undefined",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", "/explore/:path*", "/api/explore/:path*"], 
};
