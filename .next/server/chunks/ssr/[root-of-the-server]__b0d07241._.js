module.exports = [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/react-query.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const useAuth = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { checkOnboardingStatus, markAsOnboarded, loading: onboardingLoading, error: onboardingError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnboarding"])();
    const signUpMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signUp,
        onSuccess: (result)=>{
            if (result.data?.user) {
                setUser(result.data.user);
            }
        }
    });
    const signInMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signIn,
        onSuccess: (result)=>{
            if (result.data?.user) {
                setUser(result.data.user);
            }
        }
    });
    const signOutMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].signOut,
        onSuccess: ()=>{
            setUser(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"].clear();
        }
    });
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
    "budgetKeys",
    ()=>budgetKeys,
    "useBudget",
    ()=>useBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/budget-service.js [app-ssr] (ecmascript)");
;
;
const budgetKeys = {
    all: [
        "budgets"
    ],
    lists: ()=>[
            ...budgetKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...budgetKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...budgetKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...budgetKeys.details(),
            id
        ]
};
const useBudget = ()=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getBudgets = (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: budgetKeys.list({
                userId
            }),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].getBudgets(userId),
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    const createBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].createBudget,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: budgetKeys.lists()
                });
            }
        },
        onError: (error)=>{
            console.error("Error creating budget:", error);
        }
    });
    const createMultipleBudgetsMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].createMultipleBudgets,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: budgetKeys.lists()
                });
            }
        }
    });
    const updateBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ budgetId, updates })=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].updateBudget(budgetId, updates),
        onSuccess: (result, variables)=>{
            if (result.data) {
                queryClient.setQueryData(budgetKeys.lists(), (old)=>old?.map((budget)=>budget.id === variables.budgetId ? result.data[0] : budget));
            }
        }
    });
    const deleteBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["budgetService"].deleteBudget,
        onSuccess: (result, variables)=>{
            queryClient.setQueryData(budgetKeys.lists(), (old)=>old?.filter((budget)=>budget.id !== variables));
        }
    });
    const createBudget = (budgetData)=>{
        return createBudgetMutation.mutateAsync(budgetData);
    };
    const createMultipleBudgets = (budgetsArray)=>{
        return createMultipleBudgetsMutation.mutateAsync(budgetsArray);
    };
    const updateBudget = (budgetId, updates)=>{
        return updateBudgetMutation.mutateAsync({
            budgetId,
            updates
        });
    };
    const deleteBudget = (budgetId)=>{
        return deleteBudgetMutation.mutateAsync(budgetId);
    };
    const clearError = ()=>{
        createBudgetMutation.reset();
        createMultipleBudgetsMutation.reset();
        updateBudgetMutation.reset();
        deleteBudgetMutation.reset();
    };
    return {
        // Query methods
        getBudgets,
        // Mutation methods
        createBudget,
        createMultipleBudgets,
        updateBudget,
        deleteBudget,
        clearError,
        mutations: {
            createBudget: createBudgetMutation,
            createMultipleBudgets: createMultipleBudgetsMutation,
            updateBudget: updateBudgetMutation,
            deleteBudget: deleteBudgetMutation
        }
    };
};
}),
"[project]/src/app/pages/setBudget/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SetBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBudget.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SetBudget() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budgetAmount, setBudgetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [budgets, setBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, markAsOnboarded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { createMultipleBudgets, mutations: { createMultipleBudgets: createMutation } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBudget"])();
    const categories = [
        {
            name: "Groceries",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 6h18"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 10a4 4 0 0 1-8 0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        },
        {
            name: "Rent",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        },
        {
            name: "Transportation",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H8.4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 8h1a1 1 0 0 1 1 1v1.15"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "16",
                        width: "6",
                        height: "4",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "7",
                        cy: "16",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "16",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        },
        {
            name: "Entertainment",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "13",
                        r: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m15 10-1 4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m9 10 1 4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        },
        {
            name: "Utilities",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 18h6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 22h4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        },
        {
            name: "Dining Out",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7 2v20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        },
        {
            name: "Healthcare",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 8v8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 12H8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "4",
                        width: "20",
                        height: "16",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        },
        {
            name: "Shopping",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 6h18"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 10a4 4 0 0 1-8 0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }
    ];
    const handleCategorySelect = (category)=>{
        setSelectedCategory(category);
        setBudgetAmount(budgets[category] || "");
        setIsModalOpen(true);
    };
    const handleSaveBudget = ()=>{
        if (selectedCategory && budgetAmount) {
            setBudgets((prev)=>({
                    ...prev,
                    [selectedCategory]: budgetAmount
                }));
        }
        setSelectedCategory(null);
        setBudgetAmount("");
        setIsModalOpen(false);
    };
    const handleSetAllBudgets = async ()=>{
        if (!user) {
            console.error("No user found");
            return;
        }
        try {
            const budgetsArray = Object.entries(budgets).map(([category, amount])=>({
                    user_id: user.id,
                    budget_name: category,
                    amount: parseFloat(amount),
                    period: "monthly",
                    created_at: new Date().toISOString()
                }));
            if (budgetsArray.length > 0) {
                const result = await createMultipleBudgets(budgetsArray);
                if (result.error) {
                    console.error("Error saving budgets:", result.error);
                    return;
                } else {
                    console.log("Budgets saved successfully:", result.data);
                }
            }
            console.log("Setting budgets - marking user as onboarded");
            const onboardResult = await markAsOnboarded(user.id);
            console.log("markAsOnboarded result:", onboardResult);
            if (onboardResult.success) {
                console.log("User successfully marked as onboarded");
                router.push("./setGoal");
            } else {
                console.error("Failed to mark user as onboarded:", onboardResult.error);
                router.push("./setGoal");
            }
        } catch (error) {
            console.error("Error in budget saving:", error);
        }
    };
    const handleSkip = async ()=>{
        if (!user) {
            console.error("No user found");
            return;
        }
        console.log("Skipping budgets - marking user as onboarded");
        const onboardResult = await markAsOnboarded(user.id);
        console.log("markAsOnboarded result:", onboardResult);
        if (onboardResult.success) {
            console.log("User successfully marked as onboarded");
        } else {
            console.error("Failed to mark user as onboarded:", onboardResult.error);
        }
        router.push("./setGoal");
    };
    const saving = createMutation.isPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b21a25a16babf827" + " " + "relative flex h-auto min-h-screen w-full flex-col bg-[#171116] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b21a25a16babf827" + " " + "absolute top-1/4 left-1/4 w-32 h-32 bg-[#9b177e]/10 rounded-full blur-xl animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b21a25a16babf827" + " " + "absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9b177e]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b21a25a16babf827" + " " + "layout-container flex h-full grow flex-col z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b21a25a16babf827" + " " + "flex flex-1 justify-center px-5 py-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b21a25a16babf827" + " " + "flex flex-col w-full max-w-2xl mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-b21a25a16babf827" + " " + "text-white tracking-light text-3xl font-bold leading-tight text-center pb-2 animate-fade-in-up",
                                children: "Step 1 of 2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-b21a25a16babf827" + " " + "text-white tracking-light text-2xl font-medium leading-tight text-center pb-8 animate-fade-in-up animation-delay-200",
                                children: "Set Your Monthly Budgets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            createMutation.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b21a25a16babf827" + " " + "bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4 animate-shake",
                                children: [
                                    "Error saving budgets: ",
                                    createMutation.error.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-b21a25a16babf827" + " " + "text-[#b79eb0] text-center mb-8 animate-fade-in-up animation-delay-400",
                                children: "Set spending limits for different categories (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b21a25a16babf827" + " " + "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                                children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategorySelect(category.name),
                                        style: {
                                            animationDelay: `${index * 100 + 600}ms`
                                        },
                                        className: "jsx-b21a25a16babf827" + " " + `group relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/20 ${budgets[category.name] ? "border-[#9b177e] bg-[#9b177e]/20 shadow-lg shadow-[#9b177e]/30" : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"} animate-fade-in-up`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b21a25a16babf827" + " " + "absolute inset-0 bg-gradient-to-br from-transparent via-[#9b177e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-b21a25a16babf827" + " " + "text-2xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                                                children: category.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-b21a25a16babf827" + " " + "text-white text-sm font-medium text-center relative z-10",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this),
                                            budgets[category.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-b21a25a16babf827" + " " + "text-[#9b177e] text-xs mt-1 font-semibold relative z-10 animate-pulse",
                                                children: [
                                                    "₱",
                                                    budgets[category.name]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, this),
                                            budgets[category.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b21a25a16babf827" + " " + "absolute -top-2 -right-2 w-6 h-6 bg-[#9b177e] rounded-full flex items-center justify-center animate-bounce",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    className: "jsx-b21a25a16babf827" + " " + "w-3 h-3 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                        clipRule: "evenodd",
                                                        className: "jsx-b21a25a16babf827"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/setBudget/page.js",
                                                        lineNumber: 331,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/setBudget/page.js",
                                                    lineNumber: 326,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, category.name, true, {
                                        fileName: "[project]/src/app/pages/setBudget/page.js",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b21a25a16babf827" + " " + "flex justify-center gap-3 mt-8 px-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSetAllBudgets,
                                        disabled: Object.keys(budgets).length === 0 || saving,
                                        className: "jsx-b21a25a16babf827" + " " + "group relative flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/40 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b21a25a16babf827" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-b21a25a16babf827" + " " + "relative z-10 flex items-center gap-2",
                                                children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b21a25a16babf827" + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/setBudget/page.js",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Saving..."
                                                    ]
                                                }, void 0, true) : "Continue to Goals"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/setBudget/page.js",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSkip,
                                        disabled: saving,
                                        className: "jsx-b21a25a16babf827" + " " + "group flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547] border border-transparent hover:border-[#9b177e]/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b21a25a16babf827",
                                            children: "Skip Budgeting"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setBudget/page.js",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/setBudget/page.js",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-b21a25a16babf827" + " " + "text-[#b79eb0] text-center mt-4 text-sm animate-fade-in animation-delay-1200",
                                children: "You can always set budgets later in settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/setBudget/page.js",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/setBudget/page.js",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b21a25a16babf827" + " " + "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-b21a25a16babf827" + " " + "bg-[#261c23] rounded-xl p-6 max-w-md w-full border border-[#523d4c] shadow-2xl shadow-black/50 transform animate-scale-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-b21a25a16babf827" + " " + "text-white text-xl font-bold mb-2",
                            children: [
                                "Set Budget for ",
                                selectedCategory
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/setBudget/page.js",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-b21a25a16babf827" + " " + "text-[#b79eb0] mb-4",
                            children: "Enter your monthly budget amount"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/setBudget/page.js",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b21a25a16babf827" + " " + "relative mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "₱0",
                                value: budgetAmount,
                                onChange: (e)=>setBudgetAmount(e.target.value),
                                autoFocus: true,
                                className: "jsx-b21a25a16babf827" + " " + "form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-14 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setBudget/page.js",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/setBudget/page.js",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b21a25a16babf827" + " " + "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveBudget,
                                    disabled: !budgetAmount,
                                    className: "jsx-b21a25a16babf827" + " " + "group flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#9b177e]/30 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b21a25a16babf827" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setBudget/page.js",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b21a25a16babf827" + " " + "relative z-10",
                                            children: "Save Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setBudget/page.js",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/setBudget/page.js",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "jsx-b21a25a16babf827" + " " + "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/setBudget/page.js",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/setBudget/page.js",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/setBudget/page.js",
                    lineNumber: 384,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setBudget/page.js",
                lineNumber: 383,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b21a25a16babf827",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes pulse-slow{0%,to{opacity:.1}50%{opacity:.2}}.animate-fade-in-up.jsx-b21a25a16babf827{opacity:0;animation:.6s ease-out forwards fadeInUp}.animate-fade-in.jsx-b21a25a16babf827{opacity:0;animation:.4s ease-out forwards fadeIn}.animate-scale-in.jsx-b21a25a16babf827{animation:.3s ease-out forwards scaleIn}.animate-shake.jsx-b21a25a16babf827{animation:.5s ease-in-out shake}.animate-pulse-slow.jsx-b21a25a16babf827{animation:3s ease-in-out infinite pulse-slow}.animation-delay-200.jsx-b21a25a16babf827{animation-delay:.2s}.animation-delay-400.jsx-b21a25a16babf827{animation-delay:.4s}.animation-delay-600.jsx-b21a25a16babf827{animation-delay:.6s}.animation-delay-1200.jsx-b21a25a16babf827{animation-delay:1.2s}.animation-delay-1000.jsx-b21a25a16babf827{animation-delay:1s}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/setBudget/page.js",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0d07241._.js.map