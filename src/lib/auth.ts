/**
 * Authentication Utility for NeyborHuud
 * Handles token storage, retrieval, and validation
 */

const TOKEN_KEY = 'neyborhuud_access_token';
const REFRESH_TOKEN_KEY = 'neyborhuud_refresh_token';
const USER_KEY = 'neyborhuud_user';

export const authService = {
    /**
     * Store authentication tokens after login/signup
     */
    setTokens(accessToken: string, refreshToken?: string) {
        if (typeof window === 'undefined') return;
        localStorage.setItem(TOKEN_KEY, accessToken);
        if (refreshToken) {
            localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        }
    },

    /**
     * Get the current access token
     */
    getAccessToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(TOKEN_KEY);
    },

    /**
     * Get the refresh token
     */
    getRefreshToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    },

    /**
     * Store user data
     */
    setUser(user: any) {
        if (typeof window === 'undefined') return;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    /**
     * Get stored user data
     */
    getUser(): any | null {
        if (typeof window === 'undefined') return null;
        const userData = localStorage.getItem(USER_KEY);
        return userData ? JSON.parse(userData) : null;
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return !!this.getAccessToken();
    },

    /**
     * Clear all auth data (logout)
     */
    clearAuth() {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }
};
