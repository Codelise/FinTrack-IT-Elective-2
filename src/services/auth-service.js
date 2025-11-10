import {
  signUp as signUpQuery,
  signIn as signInQuery,
  signOut as signOutQuery,
} from "../api/auth/route";

export class AuthService {
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

    const result = await signUpQuery(userData.email, userData.password, {
      firstName: userData.firstName,
      lastName: userData.lastName,
    });

    return result;
  }

  async signIn(credentials) {
    if (!credentials.email || !credentials.password) {
      throw new Error("Email and password are required");
    }

    const result = await signInQuery(credentials.email, credentials.password);
    return result;
  }

  async signOut() {
    return await signOutQuery();
  }
}

export const authService = new AuthService();
