/**
 * Central API Utility for NeyborHuud
 * Handles environment-aware URL switching and robust error parsing.
 */

const PRODUCTION_API_URL = 'https://neyborhuud-serverside.onrender.com/api/v1';
const LOCAL_API_URL = 'http://localhost:5000/api/v1';

export const getApiUrl = () => {
    const envUrl = process.env.NEXT_PUBLIC_API_URL;
    if (envUrl && envUrl !== 'undefined') return envUrl;
    return PRODUCTION_API_URL;
};

export const API_BASE_URL = getApiUrl();

export interface APIResponse<T = any> {
    status: 'success' | 'error';
    message: string;
    data?: T;
}

/**
 * Enhanced fetch wrapper for the NeyborHuud backend
 */
export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
    };

    // Auto-inject Authorization header if token exists
    if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('neyborhuud_access_token');
        if (accessToken) {
            (defaultHeaders as Record<string, string>)['Authorization'] = `Bearer ${accessToken}`;
        }
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers,
            },
        });

        const contentType = response.headers.get('content-type');
        let data: any;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = { message: await response.text() };
        }

        if (!response.ok) {
            // Extract detailed error for backend debugging
            const errorMsg = data.message || data.error || `Server Error (${response.status})`;
            throw new Error(errorMsg);
        }

        return data;
    } catch (error: any) {
        console.error(`[API Error] ${endpoint}:`, error);
        throw error;
    }
}
