import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { RootState } from "../store"
import { AuthState } from "~/utils/types/auth.types"

const initialState: AuthState = { accessToken: null }
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
