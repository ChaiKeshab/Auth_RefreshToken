import { axiosPrivate } from "../../api/baseConfig";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAppSelector } from "../../redux/store";
import { AxiosError, AxiosRequestConfig } from "axios";

// To attach interceptors to axios instance
const useAxiosPrivate = () => {

    const refresh = useRefreshToken();
    const auth = useAppSelector((state) => state.authSlice)

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
                }
                return config;
            }, (error: AxiosError) => Promise.reject(error)
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(

            /**if we get response, @return {response} */
            response => response,

            /** If the accessToken is expired */
            async (error: AxiosError) => {
                console.log(error)
                const prevRequest = error?.config as AxiosRequestConfig & { sent: boolean };

                /** 403 fails means expired accessToken */
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    if (prevRequest.headers) prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;