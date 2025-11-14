// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { supabase } from "@/lib/supabase";

// const publicRoutes = [
//   "/",
//   "/pages/login",
//   "/pages/signup",
//   "/pages/forgot-password",
// ];
// const authRoutes = ["/pages/login", "/pages/signup", "/pages/forgot-password"];
// const protectedRoutes = ["/pages/dashboard"];

// export default function AuthGuard({ children }) {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const initializeAuth = async () => {
//       const hasVisited = sessionStorage.getItem("fintrack_visited");

//       if (!hasVisited) {
//         sessionStorage.setItem("fintrack_visited", "true");
//         await supabase.auth.signOut();
//       }

//       await checkAuth();
//     };

//     initializeAuth();

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(async (event, session) => {
//       await checkAuth();
//     });

//     return () => subscription.unsubscribe();
//   }, [pathname]);

//   const checkAuth = async () => {
//     try {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       const isAuthenticated = !!session;

//       const isPublicRoute = publicRoutes.includes(pathname);
//       const isAuthRoute = authRoutes.includes(pathname);
//       const isProtectedRoute = protectedRoutes.some((route) =>
//         pathname.startsWith(route)
//       );

//       if (isAuthenticated && isAuthRoute) {
//         router.push("/pages/dashboard");
//         return;
//       }

//       if (!isAuthenticated && isProtectedRoute) {
//         router.push("/pages/login");
//         return;
//       }
//     } catch (error) {
//       console.error("Auth check failed:", error);

//       if (protectedRoutes.some((route) => pathname.startsWith(route))) {
//         router.push("/pages/login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-darkBg">
//         <div className="text-white">Loading...</div>
//       </div>
//     );
//   }

//   return children;
// }
