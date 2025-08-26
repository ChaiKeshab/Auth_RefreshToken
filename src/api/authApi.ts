import { axiosTokenless, tokenStore } from "./baseConfig";


export interface LoginBody {
    user: string,
    pwd: string
}

export interface LoginRes {
    accessToken: string
}

export async function loginApi(creds: LoginBody) {
    const response = await axiosTokenless.post(`/auth`, creds);
    tokenStore.set(response.data.accessToken);
    return response.data;
}

export async function logoutApi() {
    try {
        await axiosTokenless.post(`/logout`);
    } finally {
        tokenStore.clear();
        // gonna cause hard refresh. overwrite with ur login path or wherever u wanna take user to on logout
        window.location.href = "/login";
    }
}

let refreshPromise: Promise<string | null> | null = null;

export async function refreshApi(): Promise<string | null> {
    if (!refreshPromise) {
        refreshPromise = axiosTokenless
            .get<LoginRes>(`/refresh`)
            .then((res) => {
                tokenStore.set(res.data.accessToken);
                return res.data.accessToken;
            })
            .catch((err) => {
                console.error(err)
                logoutApi();
                return null;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }
    return refreshPromise;
}