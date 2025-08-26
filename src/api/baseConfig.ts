import axios from "axios";
import { refreshApi } from "./authApi";

let accessToken: string | null = null;

// memory storage. token lost on refresh. use session/cookie if needs persistence
// use state management like redux, context, zustand etc for storage. This is just a simple implementation
export const tokenStore = {
    get: () => accessToken,
    set: (t: string) => { accessToken = t || null; },
    clear: () => { accessToken = null; },
};

// update it with ur backend server port/url
const BASE_URL = "http://localhost:3500";

// use for request NOT requiring auth token
export const axiosTokenless = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
/** 
 * (withCredentials: true)    
 * sends cookies belonging to our backend domain (e.g., refresh token cookie) with every request.
 * only our site’s cookies are included; cookies from other domains are NOT sent.
 */

// use for request REQUIRING auth token
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
});

axiosInstance.interceptors.request.use((config) => {
    const token = tokenStore.get();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (
            (error?.response?.status === 401 || error?.response?.status === 403) &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/refresh')
        ) {
            originalRequest._retry = true;

            const newToken = await refreshApi();
            if (newToken) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            }
        }
        return Promise.reject(error);
    }
);
