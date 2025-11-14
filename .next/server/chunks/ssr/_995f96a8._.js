module.exports = [
"[project]/src/app/components/AuthGuard.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AuthGuard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/AuthGuard.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "FinTrack",
    description: "Finance Tracker"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AuthGuard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_995f96a8._.js.map