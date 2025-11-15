module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xluxxuyionzsocdvinax.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdXh4dXlpb256c29jZHZpbmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwNjcsImV4cCI6MjA3Nzk1OTA2N30.iOzYJKNYpIfpdht3V8PX_EU0KgYmuH-c8NaQKjvMIG0");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: "pkce",
        debug: false
    }
});
}),
"[project]/src/app/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Navbar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutModal, setShowLogoutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            if (error) {
                alert("Logout error:", error);
                return;
            }
            sessionStorage.removeItem("fintrack_visited");
            sessionStorage.removeItem("supabase.auth.token");
            localStorage.removeItem("supabase.auth.token");
            setShowLogoutModal(false);
            router.push("/pages/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between whitespace-nowrap border-b border-solid border-b-darkBorder px-4 py-3 sm:px-6 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white text-lg font-bold leading-tight tracking-[-0.015em] md:text-xl",
                                children: "FinTrack"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-1 justify-end gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center gap-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/transactions",
                                    children: "Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/reports",
                                    children: "Reports"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/budget",
                                    children: "Budget"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/goal",
                                    children: "Goal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLogoutModal(true),
                                    className: "flex min-w-[84px] cursor-pointer items-center justify-center outline-0 rounded-lg h-10 px-4 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleMenu,
                            className: "text-white p-2 rounded-lg hover:bg-[#382935] transition-colors",
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6 6 18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m6 6 12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "6",
                                        y2: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navbar.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden fixed inset-0 bg-black/50 z-40",
                        onClick: ()=>setIsMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs bg-[#171116] border-l border-[#523d4c] z-50 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "text-white p-2 rounded-lg hover:bg-[#382935] transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 6 6 18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Navbar.js",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m6 6 12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Navbar.js",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]",
                                            href: "/pages/dashboard",
                                            onClick: ()=>setIsMenuOpen(false),
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]",
                                            href: "/pages/transactions",
                                            onClick: ()=>setIsMenuOpen(false),
                                            children: "Transactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]",
                                            href: "/pages/reports",
                                            onClick: ()=>setIsMenuOpen(false),
                                            children: "Reports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsMenuOpen(false);
                                                setShowLogoutModal(true);
                                            },
                                            className: "flex w-full cursor-pointer items-center justify-center outline-0 rounded-lg h-12 bg-[#9c167f] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f] mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showLogoutModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-12 h-12 mb-4 text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "16,17 21,12 16,7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "21",
                                                y1: "12",
                                                x2: "9",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-xl font-bold mb-2",
                                    children: "Confirm Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#b79eb0]",
                                    children: "Are you sure you want to log out?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9c167f] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#8a156f] transition-colors",
                                    children: "Yes, Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLogoutModal(false),
                                    className: "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2d212a] transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navbar.js",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbar.js",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/api/budget/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBudget",
    ()=>createBudget,
    "createMultipleBudgets",
    ()=>createMultipleBudgets,
    "deleteBudget",
    ()=>deleteBudget,
    "getBudgets",
    ()=>getBudgets,
    "updateBudget",
    ()=>updateBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
async function getBudgets(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("budgets").select(`*, categories(*)`).eq("user_id", userId);
    return {
        data,
        error
    };
}
async function createBudget(budgetData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("budgets").insert([
        budgetData
    ]).select();
    return {
        data,
        error
    };
}
async function createMultipleBudgets(budgetsArray) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("budgets").insert(budgetsArray).select();
    return {
        data,
        error
    };
}
async function updateBudget(budgetId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("budgets").update(updates).eq("id", budgetId).select();
    return {
        data,
        error
    };
}
async function deleteBudget(budgetId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("budgets").delete().eq("id", budgetId);
    return {
        error
    };
}
}),
"[project]/src/services/budget-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetService",
    ()=>BudgetService,
    "budgetService",
    ()=>budgetService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/budget/route.js [app-ssr] (ecmascript)");
;
class BudgetService {
    async getBudgets(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBudgets"])(userId);
            return result;
        } catch (error) {
            console.error("Error fetching budgets:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createBudget(budgetData) {
        try {
            // Update validation to only require budget_name, not category
            if (!budgetData.user_id || !budgetData.budget_name || !budgetData.amount) {
                throw new Error("User ID, budget_name, and amount are required");
            }
            if (budgetData.amount <= 0) {
                throw new Error("Budget amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBudget"])(budgetData);
            return result;
        } catch (error) {
            console.error("Error creating budget:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createMultipleBudgets(budgetsArray) {
        try {
            // Update validation to only require budget_name, not category
            for (const budget of budgetsArray){
                if (!budget.user_id || !budget.budget_name || !budget.amount) {
                    throw new Error("All budgets must have user_id, budget_name, and amount");
                }
                if (budget.amount <= 0) {
                    throw new Error("All budget amounts must be greater than 0");
                }
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMultipleBudgets"])(budgetsArray);
            return result;
        } catch (error) {
            console.error("Error creating multiple budgets:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateBudget(budgetId, updates) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateBudget"])(budgetId, updates);
            return result;
        } catch (error) {
            console.error("Error updating budget:", error);
            return {
                data: null,
                error
            };
        }
    }
    async deleteBudget(budgetId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteBudget"])(budgetId);
            return result;
        } catch (error) {
            console.error("Error deleting budget:", error);
            return {
                error
            };
        }
    }
}
const budgetService = new BudgetService();
}),
"[project]/src/hooks/useBudget.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBudget",
    ()=>useBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/budget-service.js [app-ssr] (ecmascript)");
;
;
const useBudget = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budgets, setBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const getBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        if (!userId) return {
            data: null,
            error: "No user ID provided"
        };
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].getBudgets(userId);
            if (result.error) {
                setError(result.error.message);
                return {
                    data: null,
                    error: result.error
                };
            }
            setBudgets(result.data || []);
            return {
                data: result.data,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                data: null,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const createBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (budgetData)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].createBudget(budgetData);
            if (result.error) {
                setError(result.error.message);
                return {
                    data: null,
                    error: result.error
                };
            }
            if (result.data) {
                setBudgets((prev)=>[
                        ...prev,
                        result.data[0]
                    ]);
            }
            return {
                data: result.data,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                data: null,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const createMultipleBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (budgetsArray)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].createMultipleBudgets(budgetsArray);
            if (result.error) {
                setError(result.error.message);
                return {
                    data: null,
                    error: result.error
                };
            }
            if (result.data) {
                setBudgets((prev)=>[
                        ...prev,
                        ...result.data
                    ]);
            }
            return {
                data: result.data,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                data: null,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const updateBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (budgetId, updates)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].updateBudget(budgetId, updates);
            if (result.error) {
                setError(result.error.message);
                return {
                    data: null,
                    error: result.error
                };
            }
            if (result.data) {
                setBudgets((prev)=>prev.map((budget)=>budget.id === budgetId ? result.data[0] : budget));
            }
            return {
                data: result.data,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                data: null,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const deleteBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (budgetId)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].deleteBudget(budgetId);
            if (result.error) {
                setError(result.error.message);
                return {
                    error: result.error
                };
            }
            setBudgets((prev)=>prev.filter((budget)=>budget.id !== budgetId));
            return {
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setError(null);
    }, []);
    return {
        // Methods
        getBudgets,
        createBudget,
        createMultipleBudgets,
        updateBudget,
        deleteBudget,
        clearError,
        // State
        loading,
        error,
        budgets
    };
};
}),
"[project]/src/api/auth/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
async function signUp(email, password, userData) {
    try {
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: userData.firstName,
                    last_name: userData.lastName
                }
            }
        });
        if (authError) {
            return {
                data: null,
                error: authError
            };
        }
        if (authData.user) {
            const { data: profileResult, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").insert([
                {
                    user_id: authData.user.id,
                    first_name: userData.firstName,
                    last_name: userData.lastName,
                    email: email
                }
            ]).select();
            if (profileError) {
                console.warn("Profile creation had issues, but auth user created:", profileError);
                return {
                    data: {
                        user: authData.user,
                        profileCreated: false
                    },
                    error: null
                };
            }
            return {
                data: {
                    user: authData.user,
                    profile: profileResult[0],
                    profileCreated: true
                },
                error: null
            };
        }
        return {
            data: authData,
            error: null
        };
    } catch (error) {
        console.error("Signup error:", error);
        return {
            data: null,
            error
        };
    }
}
async function signIn(email, password) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
        email,
        password
    });
    return {
        data,
        error
    };
}
async function signOut() {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    return {
        error
    };
}
}),
"[project]/src/services/auth-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService,
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/auth/route.js [app-ssr] (ecmascript)");
;
class AuthService {
    async signUp(userData) {
        if (!userData.firstName?.trim() || !userData.lastName?.trim()) {
            throw new Error("First name and last name are required");
        }
        if (userData.password !== userData.confirmPassword) {
            throw new Error("Passwords do not match");
        }
        if (userData.password.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUp"])(userData.email, userData.password, {
            firstName: userData.firstName,
            lastName: userData.lastName
        });
        return result;
    }
    async signIn(credentials) {
        if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])(credentials.email, credentials.password);
        return result;
    }
    async signOut() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])();
    }
}
const authService = new AuthService();
}),
"[project]/src/services/onboarding-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnBoardingService",
    ()=>OnBoardingService,
    "onBoardingService",
    ()=>onBoardingService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
class OnBoardingService {
    async checkOnboardingStatus(userId) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").select("is_onboarded").eq("user_id", userId).single();
            if (error) {
                console.error("Error checking onboarding status:", error);
                return {
                    isOnboarded: false,
                    error
                };
            }
            return {
                isOnboarded: data?.is_onboarded || false,
                error: null
            };
        } catch (error) {
            console.error("Exception checking onboarding status:", error);
            return {
                isOnboarded: false,
                error
            };
        }
    }
    async markAsOnboarded(userId) {
        try {
            console.log("🔧 DEBUG: Attempting to mark user as onboarded, user_id:", userId);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").update({
                is_onboarded: true
            }).eq("user_id", userId).select().single();
            if (error) {
                console.error("❌ Error marking user as onboarded:", error);
                return {
                    success: false,
                    error
                };
            }
            console.log("✅ Successfully marked user as onboarded, data:", data);
            return {
                success: true,
                data,
                error: null
            };
        } catch (error) {
            console.error("❌ Exception marking user as onboarded:", error);
            return {
                success: false,
                error
            };
        }
    }
    async getOnboardingProgress(userId) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").select("is_onboarded").eq("user_id", userId).single();
            if (error) {
                return {
                    isOnboarded: false,
                    error
                };
            }
            return {
                isOnboarded: data?.is_onboarded || false,
                error: null
            };
        } catch (error) {
            return {
                isOnboarded: false,
                error
            };
        }
    }
}
const onBoardingService = new OnBoardingService();
}),
"[project]/src/hooks/useOnboarding.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnboarding",
    ()=>useOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/onboarding-service.js [app-ssr] (ecmascript)");
;
;
const useOnboarding = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [onboardingStatus, setOnboardingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const checkOnboardingStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        if (!userId) return {
            isOnboarded: false,
            error: "No user ID provided"
        };
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBoardingService"].checkOnboardingStatus(userId);
            if (result.error) {
                setError(result.error.message);
                return {
                    isOnboarded: false,
                    error: result.error
                };
            }
            setOnboardingStatus(result.isOnboarded);
            return {
                isOnboarded: result.isOnboarded,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                isOnboarded: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const markAsOnboarded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        if (!userId) return {
            success: false,
            error: "No user ID provided"
        };
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBoardingService"].markAsOnboarded(userId);
            if (result.error) {
                setError(result.error.message);
                return {
                    success: false,
                    error: result.error
                };
            }
            setOnboardingStatus(true);
            return {
                success: true,
                error: null
            };
        } catch (err) {
            setError(err.message);
            return {
                success: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    }, []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setError(null);
    }, []);
    return {
        // Methods
        checkOnboardingStatus,
        markAsOnboarded,
        clearError,
        // State
        loading,
        error,
        onboardingStatus
    };
};
}),
"[project]/src/hooks/useAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOnboarding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
;
;
;
const useAuth = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { checkOnboardingStatus, markAsOnboarded, loading: onboardingLoading, error: onboardingError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnboarding"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkUserSession = async ()=>{
            try {
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session?.user) {
                    setUser(session.user);
                }
            } catch (error) {
                console.error("Error checking user session:", error);
            }
        };
        checkUserSession();
    }, []);
    const signUp = async (formData)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signUp(formData);
            if (result.error) {
                setError(result.error.message);
                return {
                    success: false,
                    error: result.error,
                    profileCreated: false
                };
            } else {
                if (result.data?.user) {
                    setUser(result.data.user);
                }
                return {
                    success: true,
                    data: result.data,
                    profileCreated: result.data?.profileCreated ?? false
                };
            }
        } catch (err) {
            setError(err.message);
            return {
                success: false,
                error: err,
                profileCreated: false
            };
        } finally{
            setLoading(false);
        }
    };
    const signIn = async (email, password)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signIn({
                email,
                password
            });
            if (result.error) {
                setError(result.error.message);
                return {
                    success: false,
                    error: result.error
                };
            } else {
                if (result.data?.user) {
                    setUser(result.data.user);
                    const onboardingResult = await checkOnboardingStatus(result.data.user.id);
                    return {
                        success: true,
                        data: result.data,
                        isOnboarded: onboardingResult.isOnboarded
                    };
                }
                return {
                    success: true,
                    data: result.data,
                    isOnboarded: false
                };
            }
        } catch (err) {
            setError(err.message);
            return {
                success: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    };
    const signOut = async ()=>{
        setLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signOut();
            setUser(null);
            return {
                success: true,
                error: result.error
            };
        } catch (err) {
            return {
                success: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    };
    const clearError = ()=>{
        setError(null);
    };
    return {
        // Auth Methods
        signUp,
        signIn,
        signOut,
        clearError,
        // Onboarding Methods
        checkOnboardingStatus,
        markAsOnboarded,
        // State
        loading: loading || onboardingLoading,
        error: error || onboardingError,
        user
    };
};
}),
"[project]/src/app/pages/dashboard/budget/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BudgetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBudget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const iconMap = {
    groceries: "shopping_cart",
    utilities: "lightbulb",
    transportation: "train",
    entertainment: "movie",
    rent: "home",
    mortgage: "home",
    savings: "savings",
    dining: "restaurant",
    healthcare: "medical_services",
    education: "school",
    shopping: "shopping_bag",
    default: "payments"
};
function AddBudgetModal({ isOpen, onClose, onCreate }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        budget_name: "",
        amount: "",
        period: "monthly"
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate(formData);
        setFormData({
            budget_name: "",
            amount: "",
            period: "monthly"
        });
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#321b2d] rounded-xl border border-[#63365a] w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-[#63365a]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white text-xl font-bold",
                            children: "Create New Budget"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-[#c695bb] hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium block mb-2",
                                    children: "Budget Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.budget_name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            budget_name: e.target.value
                                        }),
                                    className: "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white placeholder-[#c695bb] focus:border-[#9c167f] focus:outline-none transition-colors",
                                    placeholder: "e.g., Groceries, Entertainment"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium block mb-2",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    required: true,
                                    min: "0",
                                    step: "0.01",
                                    value: formData.amount,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            amount: e.target.value
                                        }),
                                    className: "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white placeholder-[#c695bb] focus:border-[#9c167f] focus:outline-none transition-colors",
                                    placeholder: "0.00"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium block mb-2",
                                    children: "Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.period,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            period: e.target.value
                                        }),
                                    className: "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:border-[#9c167f] focus:outline-none transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "weekly",
                                            children: "Weekly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "monthly",
                                            children: "Monthly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "yearly",
                                            children: "Yearly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 bg-[#321b2d] border border-[#63365a] text-white rounded-lg py-2 px-4 hover:bg-[#3d2245] transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 bg-[#9c167f] text-white rounded-lg py-2 px-4 hover:bg-[#b51a97] transition-colors",
                                    children: "Create Budget"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function BudgetPage() {
    const { getBudgets, createBudget, budgets, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBudget"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createLoading, setCreateLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        if (user?.id) {
            console.log("Fetching budgets for user:", user.id);
            getBudgets(user.id);
        }
    }, [
        user?.id,
        getBudgets
    ]);
    const handleCreateBudget = async (budgetData)=>{
        if (!user?.id) {
            console.error("No user ID found");
            return;
        }
        setCreateLoading(true);
        console.log("Creating budget with data:", budgetData);
        try {
            const result = await createBudget({
                ...budgetData,
                user_id: user.id,
                amount: parseFloat(budgetData.amount)
            });
            console.log("Create budget result:", result);
            if (result.data) {
                setIsModalOpen(false);
                getBudgets(user.id);
            } else if (result.error) {
                console.error("Error creating budget:", result.error);
                alert("Failed to create budget: " + result.error.message);
            }
        } catch (err) {
            console.error("Exception creating budget:", err);
            alert("Failed to create budget: " + err.message);
        } finally{
            setCreateLoading(false);
        }
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
            minimumFractionDigits: 2
        }).format(amount);
    };
    const getBudgetIcon = (budget)=>{
        const categoryName = budget.categories?.name?.toLowerCase() || budget.budget_name?.toLowerCase();
        for (const [key, icon] of Object.entries(iconMap)){
            if (categoryName?.includes(key)) {
                return icon;
            }
        }
        return iconMap.default;
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex justify-center items-center h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-xl font-bold",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
            lineNumber: 196,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-9bbeafd75880127b" + " " + "relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9bbeafd75880127b" + " " + "layout-container flex h-full grow flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9bbeafd75880127b" + " " + "px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-9bbeafd75880127b" + " " + "layout-content-container flex flex-col w-full  flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "jsx-9bbeafd75880127b" + " " + "flex-1 mt-6 md:mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9bbeafd75880127b" + " " + "flex flex-wrap justify-between gap-4 p-4 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9bbeafd75880127b" + " " + "flex min-w-72 flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]",
                                                        children: "My Budgets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "text-[#c695bb] text-base font-normal leading-normal",
                                                        children: budgets.length > 0 ? `You have ${budgets.length} active budget${budgets.length !== 1 ? "s" : ""}` : "Here are your allocated budgets for the current period."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsModalOpen(true),
                                                className: "jsx-9bbeafd75880127b" + " " + "group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#b51a97] hover:shadow-lg hover:shadow-[#9c167f]/40 hover:-translate-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "truncate relative z-10",
                                                        children: "Add New Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9bbeafd75880127b" + " " + "mt-8 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-9bbeafd75880127b" + " " + "text-[#c695bb]",
                                            children: "Loading budgets..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9bbeafd75880127b" + " " + "mt-8 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-9bbeafd75880127b" + " " + "text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4",
                                            children: [
                                                "Error loading budgets: ",
                                                error
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9bbeafd75880127b" + " " + "mt-6 md:mt-8 flex flex-col gap-3 px-4",
                                        children: budgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-9bbeafd75880127b" + " " + "text-center py-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-9bbeafd75880127b" + " " + "text-[#c695bb] text-lg mb-4",
                                                    children: "No budgets found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                    lineNumber: 251,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-9bbeafd75880127b" + " " + "text-[#c695bb] text-sm",
                                                    children: "Create your first budget to start tracking your expenses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                    lineNumber: 254,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                            lineNumber: 250,
                                            columnNumber: 21
                                        }, this) : budgets.map((budget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9bbeafd75880127b" + " " + "group flex flex-col sm:flex-row items-center gap-4 bg-[#321b2d] p-4 min-h-[72px] justify-between rounded-xl border border-[#63365a] transition-all duration-300 hover:border-[#9c167f] hover:shadow-lg hover:shadow-[#9c167f]/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "flex items-center gap-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9bbeafd75880127b" + " " + "text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-105",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-9bbeafd75880127b" + " " + "material-symbols-outlined text-2xl",
                                                                    children: getBudgetIcon(budget)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                    lineNumber: 266,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                lineNumber: 265,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9bbeafd75880127b" + " " + "flex flex-col justify-center flex-grow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-9bbeafd75880127b" + " " + "text-white text-base font-medium leading-normal line-clamp-1",
                                                                        children: budget.budget_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                        lineNumber: 271,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-9bbeafd75880127b" + " " + "text-[#c695bb] text-sm font-normal leading-normal line-clamp-2",
                                                                        children: budget.period === "monthly" ? "Monthly Budget" : budget.period === "weekly" ? "Weekly Budget" : budget.period === "yearly" ? "Yearly Budget" : "Budget"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                        lineNumber: 274,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                lineNumber: 270,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9bbeafd75880127b" + " " + "shrink-0 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-9bbeafd75880127b" + " " + "text-white text-lg font-bold leading-normal",
                                                                    children: [
                                                                        formatCurrency(budget.amount),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-9bbeafd75880127b" + " " + "text-sm font-normal text-[#c695bb]",
                                                                            children: budget.period === "monthly" ? "/month" : budget.period === "weekly" ? "/week" : budget.period === "yearly" ? "/year" : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                            lineNumber: 287,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                    lineNumber: 285,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                lineNumber: 284,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 264,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "jsx-9bbeafd75880127b" + " " + "flex sm:ml-4 w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#321b2d] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-9bbeafd75880127b" + " " + "material-symbols-outlined text-lg",
                                                                children: "edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                lineNumber: 300,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-9bbeafd75880127b" + " " + "truncate",
                                                                children: "Edit Budget"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                                lineNumber: 303,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                        lineNumber: 299,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, budget.id, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                                lineNumber: 260,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AddBudgetModal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onCreate: handleCreateBudget
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
                rel: "stylesheet",
                className: "jsx-9bbeafd75880127b"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/page.js",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "9bbeafd75880127b",
                children: '.material-symbols-outlined.jsx-9bbeafd75880127b{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/dashboard/budget/page.js",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cf01b782._.js.map