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
    "/api/contact",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
