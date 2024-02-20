import { combineReducers } from "redux";
import authSlice from './slices/authSlice'

const rootReducer = combineReducers({
    authSlice: authSlice,
})

export default rootReducer