export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "/api/auth/signup",
    SIGNIN: "/api/auth/signin",
    SIGNOUT: "/api/auth/signout",
    GET_USER: "/api/auth/user",
    UPDATE_PROFILE: "/api/auth/profile",
  },

  WALLETS: {
    BASE: "/api/wallets",
    GET_ALL: "/api/wallets",
    GET_BY_ID: (id) => `/api/wallets/${id}`,
    CREATE: "/api/wallets",
    UPDATE: (id) => `/api/wallets/${id}`,
    DELETE: (id) => `/api/wallets/${id}`,
  },

  TRANSACTIONS: {
    BASE: "/api/transactions",
    GET_ALL: "/api/transactions",
    GET_BY_ID: (id) => `/api/transactions/${id}`,
    CREATE: "/api/transactions",
    UPDATE: (id) => `/api/transactions/${id}`,
    DELETE: (id) => `/api/transactions/${id}`,
    GET_BY_WALLET: (walletId) => `/api/transactions?wallet_id=${walletId}`,
    GET_BY_DATE_RANGE: "/api/transactions/range",
    GET_BY_CATEGORY: (categoryId) =>
      `/api/transactions?category_id=${categoryId}`,
  },

  CATEGORIES: {
    BASE: "/api/categories",
    GET_ALL: "/api/categories",
    GET_BY_ID: (id) => `/api/categories/${id}`,
    CREATE: "/api/categories",
    UPDATE: (id) => `/api/categories/${id}`,
    DELETE: (id) => `/api/categories/${id}`,
    GET_DEFAULT: "/api/categories/default",
  },

  BUDGETS: {
    BASE: "/api/budgets",
    GET_ALL: "/api/budgets",
    GET_BY_ID: (id) => `/api/budgets/${id}`,
    CREATE: "/api/budgets",
    UPDATE: (id) => `/api/budgets/${id}`,
    DELETE: (id) => `/api/budgets/${id}`,
    GET_BY_PERIOD: (period) => `/api/budgets?period=${period}`,
  },

  GOALS: {
    BASE: "/api/goals",
    GET_ALL: "/api/goals",
    GET_BY_ID: (id) => `/api/goals/${id}`,
    CREATE: "/api/goals",
    UPDATE: (id) => `/api/goals/${id}`,
    DELETE: (id) => `/api/goals/${id}`,
    GET_ACTIVE: "/api/goals/active",
  },

  DASHBOARD: {
    BASE: "/api/dashboard",
    OVERVIEW: "/api/dashboard/overview",
    SUMMARY: "/api/dashboard/summary",
    RECENT_ACTIVITY: "/api/dashboard/recent-activity",
    SPENDING_ANALYTICS: "/api/dashboard/analytics/spending",
    INCOME_ANALYTICS: "/api/dashboard/analytics/income",
  },

  REPORTS: {
    BASE: "/api/reports",
    SPENDING_BY_CATEGORY: "/api/reports/spending-by-category",
    INCOME_VS_EXPENSE: "/api/reports/income-vs-expense",
    MONTHLY_SUMMARY: "/api/reports/monthly-summary",
    EXPORT_DATA: "/api/reports/export",
  },
};

export const QUERY_PARAMS = {
  TRANSACTIONS: {
    START_DATE: "start_date",
    END_DATE: "end_date",
    WALLET_ID: "wallet_id",
    CATEGORY_ID: "category_id",
    TYPE: "type",
    PAGE: "page",
    LIMIT: "limit",
  },
  BUDGETS: {
    PERIOD: "period",
    CATEGORY_ID: "category_id",
  },
};

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};
