import { Routes, Route } from "react-router-dom";
import {
    Home,
    // Login,
    // Register,
} from "./pages/index";

import AuthLayout from './layout/AuthLayout'
import { Button, ProtectedRoute } from './components/index'
import { loginApi, logoutApi } from './api/users'
import useAxiosPrivate from "./hooks/api/useAxiosPrivate";
import useRefreshToken from "./hooks/api/useRefreshToken";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { setAuth } from "./redux/slices/authSlice";
import { AxiosError } from "axios";

const App = () => {

    const dispatch = useAppDispatch()
    const refresh = useRefreshToken()
    const axiosPrivate = useAxiosPrivate()

    const user = useAppSelector(state => state.authSlice)

    const getUsers = async () => {
        // DOES NOT WORK. BACKEND PROBLEM
        try {
            const response = await axiosPrivate.get('/users');
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }


    const body = {
        "user": "test",
        "pwd": "Aa$12345"
    }

    const login = async () => {

        const data = await loginApi(body)
        console.log(data)

        if (!(data instanceof AxiosError)) {
            dispatch(setAuth(data))
        }
    }

    const logout = async () => {
        await logoutApi()
        dispatch(setAuth(null))
    }

    const isLoggedIn = user?.accessToken ? true : false

    console.log(user)
    console.log(isLoggedIn)

    const allButtons = [
        { onClick: () => getUsers(), label: "user" },
        { onClick: () => refresh(), label: "refresh" },
        { onClick: () => login(), label: "login" },
        { onClick: () => logout(), label: "logout" },
    ]

    return (
        <div className="flex flex-col h-screen text-black">

            {/* TEST */}
            <div className="bg-teal-300 w-full flex flex-col justify-center items-center p-4 gap-3">
                <div className="px-4 py-2 rounded-md bg-blue-600 text-white">{isLoggedIn ? "true" : "false"}</div>
                <div>Run the server locally to test. Check the console for response</div>
                <div>constant data used: {JSON.stringify(body)}</div>
            </div>


            <div className="mt-5 flex flex-col justify-center items-center gap-3">
                {allButtons?.map((val, index) => (

                    <Button
                        key={index}
                        onClick={val.onClick}
                        className="px-2 py-1 rounded-md bg-teal-500 text-white hover:bg-teal-100 hover:text-black border border-teal-500"
                        label={val.label}
                    />
                ))}
            </div>


            <Routes>
                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    {/* <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} /> */}
                </Route>

            </Routes>
        </div>
    );
};

export default App;

/**
 * When users register or log in, they receive an access token, a refresh token, roles, and other data.
 * 
 * @returns {Object} An object containing the access token, an array of roles, and the refresh token (hidden).
 *                   {}Example: { accessToken, roles: [number], refreshToken: 'hidden' }
 * 
 * If the access token expires, a new access token can be obtained using the refresh token.
 * 
 * @returns {Object} An object containing only the new access token.
 *                   Example: { accessToken }
 */
