// src/lib/geolocation.ts
export interface LocationCoords {
    lat: number;
    lng: number;
    accuracy?: number;
}

/**
 * Get user's current GPS location
 * Prompts browser for location permission
 */
export const getCurrentLocation = (): Promise<LocationCoords | null> => {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            console.warn('Geolocation not supported');
            resolve(null);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy
                });
            },
            (error) => {
                console.warn('Location permission denied or unavailable:', error);
                resolve(null); // Graceful fallback
            },
            {
                enableHighAccuracy: true, // Use GPS, not just WiFi
                timeout: 15000,
                maximumAge: 0
            }
        );
    });
};
