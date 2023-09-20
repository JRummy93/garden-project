import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/explore",
    "/contact",
    "/about",
    "/my-garden",
    "/find-my-plant",
  ],
  signInRoute: "/sign-in",
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
