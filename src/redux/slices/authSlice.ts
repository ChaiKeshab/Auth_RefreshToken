import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../../types/Auth";


type SliceState = UserDataType | null

const initialState: SliceState = {
    roles: [],
    accessToken: ""
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<UserDataType | null>) => {
            if (action.payload) {
                state.roles = action?.payload?.roles
                state.accessToken = action?.payload?.accessToken
            } else {
                return initialState
            }
        }
    }
})

export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;