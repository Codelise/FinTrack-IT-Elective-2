"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const publicRoutes = ["/login", "/signup", "/forgot-password", "/"];
const authRoutes = ["/login", "/signup", "/forgot-password"];

export default function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        setAuthenticated(true);
        handleAuthRedirect(pathname, true);
      } else if (event === "SIGNED_OUT") {
        setAuthenticated(false);
        handleAuthRedirect(pathname, false);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      handleAuthRedirect(pathname, !!session);
    } catch (error) {
      console.error("Auth check failed:", error);
      handleAuthRedirect(pathname, false);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthRedirect = (currentPath, isAuthenticated) => {
    const isPublicRoute = publicRoutes.includes(currentPath);
    const isAuthRoute = authRoutes.includes(currentPath);

    if (isAuthenticated && isAuthRoute) {
      router.push("/dashboard");
    } else if (!isAuthenticated && !isPublicRoute) {
      router.push("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkBg">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return children;
}
