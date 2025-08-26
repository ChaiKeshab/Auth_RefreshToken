import { axiosInstance } from "./baseConfig";

export interface GetUserRes {
    "id": number | string;
    "firstname": string;
    "lastname": string;
}

export const getUsersApi = async () => {
    const url = '/employees'
    const response = await axiosInstance.get<GetUserRes[]>(url);
    return response.data
}

export const getDummyApi = async () => {
    const url = '/dummy'
    const response = await axiosInstance.get<GetUserRes[]>(url);
    return response.data
}