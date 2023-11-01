import { setCredentials } from "../slices/auth"
import { api } from "./api"

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/users/signup',
                method: 'POST',
                body: credentials
            })
        }),
        signin: builder.mutation({
            query: (credentials) => ({
                url: '/users/signin',
                method: 'POST',
                body: credentials
            }),
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/users/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials({ ...data }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    }),
})

export const {
    useSigninMutation,
    useRefreshMutation,
    useSignupMutation,
} = authApi
