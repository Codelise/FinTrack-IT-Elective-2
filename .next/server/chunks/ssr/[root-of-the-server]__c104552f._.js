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
"[project]/src/api/goal/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGoal",
    ()=>createGoal,
    "createMultipleGoals",
    ()=>createMultipleGoals,
    "deleteGoal",
    ()=>deleteGoal,
    "getGoals",
    ()=>getGoals,
    "updateGoal",
    ()=>updateGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
async function getGoals(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("goals").select("*").eq("user_id", userId).order("deadline");
    return {
        data,
        error
    };
}
async function createGoal(goalData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("goals").insert([
        goalData
    ]).select();
    return {
        data,
        error
    };
}
async function createMultipleGoals(goalsArray) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("goals").insert(goalsArray).select();
    return {
        data,
        error
    };
}
async function updateGoal(goalId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("goals").update(updates).eq("id", goalId).select();
    return {
        data,
        error
    };
}
async function deleteGoal(goalId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("goals").delete().eq("id", goalId);
    return {
        error
    };
}
}),
"[project]/src/services/goal-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoalService",
    ()=>GoalService,
    "goalService",
    ()=>goalService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/goal/route.js [app-ssr] (ecmascript)");
;
class GoalService {
    async getGoals(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGoals"])(userId);
            return result;
        } catch (error) {
            console.error("Error fetching goals: ", error);
            return {
                data: null,
                error
            };
        }
    }
    async createGoal(goalData) {
        try {
            if (!goalData.user_id || !goalData.goal_name || !goalData.target_amount) {
                throw new Error("User ID, goal_name, and target_amount are required");
            }
            if (goalData.target_amount <= 0) {
                throw new Error("Target amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGoal"])(goalData);
            return result;
        } catch (error) {
            console.error("Error creating goal: ", error);
            return {
                data: null,
                error
            };
        }
    }
    async createMultipleGoals(goalsArray) {
        try {
            for (const goal of goalsArray){
                if (!goal.user_id || !goal.goal_name || !goal.target_amount) {
                    throw new Error("All goals must have user_id, goal_name, and target_amount");
                }
                if (goal.target_amount <= 0) {
                    throw new Error("All target amounts must be greater than 0");
                }
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMultipleGoals"])(goalsArray);
            return result;
        } catch (error) {
            console.error("Error creating multiple goals:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateGoal(goalId, updates) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateGoal"])(goalId, updates);
            return result;
        } catch (error) {
            console.error("Error updating goal:", error);
            return {
                data: null,
                error
            };
        }
    }
    async deleteGoal(goalId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteGoal"])(goalId);
            return result;
        } catch (error) {
            console.error("Error deleting goal:", error);
            return {
                error
            };
        }
    }
}
const goalService = new GoalService();
}),
"[project]/src/hooks/useGoal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "goalKeys",
    ()=>goalKeys,
    "useGoal",
    ()=>useGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/goal-service.js [app-ssr] (ecmascript)");
;
;
const goalKeys = {
    all: [
        "goals"
    ],
    lists: ()=>[
            ...goalKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...goalKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...goalKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...goalKeys.details(),
            id
        ]
};
const useGoal = ()=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getGoals = (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: goalKeys.list({
                userId
            }),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goalService"].getGoals(userId),
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    const createGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goalService"].createGoal,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: goalKeys.lists()
                });
            }
        }
    });
    const createMultipleGoalsMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goalService"].createMultipleGoals,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: goalKeys.lists()
                });
            }
        }
    });
    const updateGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ goalId, updates })=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goalService"].updateGoal(goalId, updates),
        onSuccess: (result, variables)=>{
            if (result.data) {
                queryClient.setQueryData(goalKeys.lists(), (old)=>old?.map((goal)=>goal.id === variables.goalId ? result.data[0] : goal));
            }
        }
    });
    const deleteGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goalService"].deleteGoal,
        onSuccess: (result, variables)=>{
            queryClient.setQueryData(goalKeys.lists(), (old)=>old?.filter((goal)=>goal.id !== variables));
        }
    });
    const createGoal = (goalData)=>{
        return createGoalMutation.mutateAsync(goalData);
    };
    const createMultipleGoals = (goalsArray)=>{
        return createMultipleGoalsMutation.mutateAsync(goalsArray);
    };
    const updateGoal = (goalId, updates)=>{
        return updateGoalMutation.mutateAsync({
            goalId,
            updates
        });
    };
    const deleteGoal = (goalId)=>{
        return deleteGoalMutation.mutateAsync(goalId);
    };
    const clearError = ()=>{
        createGoalMutation.reset();
        createMultipleGoalsMutation.reset();
        updateGoalMutation.reset();
        deleteGoalMutation.reset();
    };
    return {
        // Query methods
        getGoals,
        // Mutation methods
        createGoal,
        createMultipleGoals,
        updateGoal,
        deleteGoal,
        clearError,
        // Mutation states
        mutations: {
            createGoal: createGoalMutation,
            createMultipleGoals: createMultipleGoalsMutation,
            updateGoal: updateGoalMutation,
            deleteGoal: deleteGoalMutation
        }
    };
};
}),
"[project]/src/app/pages/setGoal/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SetGoals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGoal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGoal.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SetGoals() {
    const [selectedGoal, setSelectedGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [goalAmount, setGoalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [goalDeadline, setGoalDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, markAsOnboarded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { createMultipleGoals, mutations: { createMultipleGoals: createMutation } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGoal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGoal"])();
    const goalCategories = [
        {
            name: "Emergency Fund",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/setGoal/page.js",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            description: "3-6 months of expenses"
        },
        {
            name: "New Car",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        d: "M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H8.4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 8h1a1 1 0 0 1 1 1v1.15"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "16",
                        width: "6",
                        height: "4",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "7",
                        cy: "16",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "16",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            description: "Vehicle purchase"
        },
        {
            name: "Vacation",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 1 3 1 2-2.3 3.3 3.3c.5.5 1.2.3 1.5-.3l.5-.7c.2-.5.1-1-.3-1.2Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/setGoal/page.js",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            description: "Travel and holidays"
        },
        {
            name: "Home Down Payment",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            description: "Buying a house"
        },
        {
            name: "Education",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        d: "M22 10v6M2 10l10-5 10 5-10 5z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 12v5c0 2 2 2 4 1 2 1 4 1 4-1v-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            description: "School or courses"
        },
        {
            name: "Retirement",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m4.93 4.93 4.24 4.24"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m14.83 9.17 4.24-4.24"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m14.83 14.83 4.24 4.24"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m9.17 14.83-4.24 4.24"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            description: "Long-term savings"
        },
        {
            name: "Debt Payoff",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        d: "M12 2v20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            description: "Clear existing debts"
        },
        {
            name: "Investment",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        d: "M3 3v18h18"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m19 9-5 5-4-4-3 3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            description: "Grow your wealth"
        }
    ];
    const handleGoalSelect = (goal)=>{
        setSelectedGoal(goal);
        setGoalAmount("");
        setGoalDeadline("");
        setIsModalOpen(true);
    };
    const handleConfirmGoal = ()=>{
        if (selectedGoal && goalAmount && goalDeadline) {
            setGoals((prev)=>({
                    ...prev,
                    [selectedGoal.name]: {
                        goal_name: selectedGoal.name,
                        target_amount: parseFloat(goalAmount),
                        deadline: goalDeadline
                    }
                }));
        }
        setSelectedGoal(null);
        setGoalAmount("");
        setGoalDeadline("");
        setIsModalOpen(false);
    };
    const handleSetAllGoals = async ()=>{
        if (!user) {
            console.error("No user found");
            return;
        }
        try {
            const goalsArray = Object.values(goals).map((goal)=>({
                    user_id: user.id,
                    goal_name: goal.goal_name,
                    target_amount: goal.target_amount,
                    current_amount: 0,
                    deadline: goal.deadline,
                    created_at: new Date().toISOString()
                }));
            console.log("Goals data being saved:", goalsArray);
            if (goalsArray.length > 0) {
                const result = await createMultipleGoals(goalsArray);
                if (result.error) {
                    console.error("Error saving goals:", result.error);
                    return;
                } else {
                    console.log("Goals saved successfully:", result.data);
                }
            }
            await markAsOnboarded(user.id);
            router.push("./dashboard");
        } catch (error) {
            console.error("Error in goal saving:", error);
        }
    };
    const handleSkip = async ()=>{
        if (user) {
            await markAsOnboarded(user.id);
        }
        router.push("./dashboard");
    };
    const today = new Date().toISOString().split("T")[0];
    const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().split("T")[0];
    const saving = createMutation.isPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4198e0e3cde1015f" + " " + "relative flex h-auto min-h-screen w-full flex-col bg-[#171116] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4198e0e3cde1015f" + " " + "absolute top-1/3 right-1/4 w-28 h-28 bg-[#9b177e]/10 rounded-full blur-xl animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4198e0e3cde1015f" + " " + "absolute bottom-1/4 left-1/3 w-20 h-20 bg-[#9b177e]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1500"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4198e0e3cde1015f" + " " + "layout-container flex h-full grow flex-col z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4198e0e3cde1015f" + " " + "flex flex-1 justify-center px-5 py-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4198e0e3cde1015f" + " " + "flex flex-col w-full max-w-2xl mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-4198e0e3cde1015f" + " " + "text-white tracking-light text-3xl font-bold leading-tight text-center pb-2 animate-fade-in-up",
                                children: "Step 2 of 2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4198e0e3cde1015f" + " " + "text-white tracking-light text-2xl font-medium leading-tight text-center pb-8 animate-fade-in-up animation-delay-200",
                                children: "Set Your Financial Goals"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            createMutation.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4198e0e3cde1015f" + " " + "bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4 animate-shake",
                                children: [
                                    "Error saving goals: ",
                                    createMutation.error.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4198e0e3cde1015f" + " " + "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                                children: goalCategories.map((goal, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleGoalSelect(goal),
                                        style: {
                                            animationDelay: `${index * 100 + 600}ms`
                                        },
                                        className: "jsx-4198e0e3cde1015f" + " " + `group relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/20 ${goals[goal.name] ? "border-[#9b177e] bg-[#9b177e]/20 shadow-lg shadow-[#9b177e]/30" : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"} animate-fade-in-up`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "absolute inset-0 bg-gradient-to-br from-transparent via-[#9b177e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "text-white mb-2 w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: goal.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "text-white text-sm font-medium text-center relative z-10",
                                                children: goal.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "text-[#b79eb0] text-xs text-center mt-1 relative z-10",
                                                children: goal.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this),
                                            goals[goal.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "text-[#9b177e] text-xs mt-2 text-center font-semibold relative z-10 animate-pulse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4198e0e3cde1015f",
                                                        children: "Selected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                                        lineNumber: 309,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4198e0e3cde1015f",
                                                        children: [
                                                            "₱",
                                                            goals[goal.name].target_amount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                                        lineNumber: 310,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4198e0e3cde1015f",
                                                        children: new Date(goals[goal.name].deadline).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                                        lineNumber: 313,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this),
                                            goals[goal.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "absolute -top-2 -right-2 w-6 h-6 bg-[#9b177e] rounded-full flex items-center justify-center animate-bounce",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    className: "jsx-4198e0e3cde1015f" + " " + "w-3 h-3 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                        clipRule: "evenodd",
                                                        className: "jsx-4198e0e3cde1015f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                                        lineNumber: 328,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 322,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, goal.name, true, {
                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4198e0e3cde1015f" + " " + "flex justify-center gap-3 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSetAllGoals,
                                        disabled: Object.keys(goals).length === 0 || saving,
                                        className: "jsx-4198e0e3cde1015f" + " " + "group relative flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/40 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4198e0e3cde1015f" + " " + "relative z-10 flex items-center gap-2",
                                                children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4198e0e3cde1015f" + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Saving..."
                                                    ]
                                                }, void 0, true) : "Complete Setup"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSkip,
                                        disabled: saving,
                                        className: "jsx-4198e0e3cde1015f" + " " + "group flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547] border border-transparent hover:border-[#9b177e]/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4198e0e3cde1015f",
                                            children: "Skip Goals"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/setGoal/page.js",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4198e0e3cde1015f" + " " + "text-[#b79eb0] text-center mt-4 text-sm animate-fade-in animation-delay-1200",
                                children: "You can add more goals later in the goals section"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/setGoal/page.js",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/setGoal/page.js",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/setGoal/page.js",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4198e0e3cde1015f" + " " + "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-4198e0e3cde1015f" + " " + "bg-[#261c23] rounded-xl p-6 max-w-md w-full border border-[#523d4c] shadow-2xl shadow-black/50 transform animate-scale-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4198e0e3cde1015f" + " " + "text-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4198e0e3cde1015f" + " " + "text-white mb-3 block w-12 h-12 mx-auto transition-transform duration-300 hover:scale-110",
                                    children: selectedGoal?.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-4198e0e3cde1015f" + " " + "text-white text-xl font-bold mb-2",
                                    children: [
                                        "Set ",
                                        selectedGoal?.name,
                                        " Goal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4198e0e3cde1015f" + " " + "text-[#b79eb0]",
                                    children: selectedGoal?.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/setGoal/page.js",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4198e0e3cde1015f" + " " + "space-y-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4198e0e3cde1015f",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-4198e0e3cde1015f" + " " + "text-white text-sm font-medium block mb-2",
                                            children: "Target Amount (₱)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "0",
                                            value: goalAmount,
                                            onChange: (e)=>setGoalAmount(e.target.value),
                                            autoFocus: true,
                                            className: "jsx-4198e0e3cde1015f" + " " + "form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4198e0e3cde1015f",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-4198e0e3cde1015f" + " " + "text-white text-sm font-medium block mb-2",
                                            children: "Target Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: goalDeadline,
                                            onChange: (e)=>setGoalDeadline(e.target.value),
                                            min: today,
                                            max: maxDate,
                                            className: "jsx-4198e0e3cde1015f" + " " + "form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/setGoal/page.js",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4198e0e3cde1015f" + " " + "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleConfirmGoal,
                                    disabled: !goalAmount || !goalDeadline,
                                    className: "jsx-4198e0e3cde1015f" + " " + "group flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#9b177e]/30 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4198e0e3cde1015f" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4198e0e3cde1015f" + " " + "relative z-10",
                                            children: "Save Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/setGoal/page.js",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "jsx-4198e0e3cde1015f" + " " + "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/setGoal/page.js",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/setGoal/page.js",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/setGoal/page.js",
                    lineNumber: 378,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/setGoal/page.js",
                lineNumber: 377,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4198e0e3cde1015f",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes pulse-slow{0%,to{opacity:.1}50%{opacity:.2}}.animate-fade-in-up.jsx-4198e0e3cde1015f{opacity:0;animation:.6s ease-out forwards fadeInUp}.animate-fade-in.jsx-4198e0e3cde1015f{opacity:0;animation:.4s ease-out forwards fadeIn}.animate-scale-in.jsx-4198e0e3cde1015f{animation:.3s ease-out forwards scaleIn}.animate-shake.jsx-4198e0e3cde1015f{animation:.5s ease-in-out shake}.animate-pulse-slow.jsx-4198e0e3cde1015f{animation:3s ease-in-out infinite pulse-slow}.animation-delay-200.jsx-4198e0e3cde1015f{animation-delay:.2s}.animation-delay-600.jsx-4198e0e3cde1015f{animation-delay:.6s}.animation-delay-1200.jsx-4198e0e3cde1015f{animation-delay:1.2s}.animation-delay-1500.jsx-4198e0e3cde1015f{animation-delay:1.5s}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/setGoal/page.js",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c104552f._.js.map