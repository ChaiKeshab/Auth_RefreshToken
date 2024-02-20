import { AxiosError } from "axios";
import { axiosPrivate } from "./baseConfig";
import { UserDataType } from "../types/Auth";

export interface GetUserType {
    data: any;
    controller: AbortController
}
// Broken endpoint. Backend problem
export const getUsersApi = async (): Promise<GetUserType | AxiosError> => {

    const controller = new AbortController();
    try {
        const response = await axiosPrivate.get('/users', {
            signal: controller.signal
        });

        return { data: response.data, controller }

    } catch (err) {
        return err as AxiosError
    }
}



interface Body {
    user: string;
    pwd: string;
}

export const registerApi = async (body: Body): Promise<{ success: string } | AxiosError> => {
    try {
        const response = await axiosPrivate.post('/register', body);
        return response.data

    } catch (err) {
        return err as AxiosError
    }
}


export const loginApi = async (body: Body): Promise<UserDataType | AxiosError> => {
    try {
        const response = await axiosPrivate.post('/auth', body);
        return response.data

    } catch (err) {
        return err as AxiosError
    }
}


export const logoutApi = async () => {
    try {
        await axiosPrivate.get('/logout');
    } catch (err) {
        return err as AxiosError
    }
}
