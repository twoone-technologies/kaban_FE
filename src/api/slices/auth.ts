import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../store"
import { AuthState } from "~/utils/types/auth.types"
import { Realtor } from "~/utils/types/realtor.types"

const initialState: AuthState = {
    accessToken: null,
    email: "",
    fullName: "",
    realtor: {} as Realtor,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<AuthState>) => {
            state = action.payload
            return state
        },
        clearCredentials: (state) => {
            state.accessToken = null
        },
    }
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state: RootState) => state.auth.accessToken
export function Logout(dispatch: AppDispatch) {
    dispatch(clearCredentials())
}