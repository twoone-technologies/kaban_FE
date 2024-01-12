import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../store"


export interface IAuthState {
    token: string | null;
    email: string | null;
}

const initialState = { token: null, email: null }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { token, email } = action.payload
            state.token = token
            state.email = email
        },
        clearCredentials: (state) => {
            state.token = null
        },
    }
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state: RootState) => state.auth.token
