import { api } from "./api"
import APIEndpoints from "~/utils/api-endpoints"
import { store } from "../store"
import { SigninDTO, SigninResponse, SignupDTO, SignupResponse } from "~/utils/types/auth.types"
import { setCredentials } from "../slices/auth"

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation<SignupResponse, SignupDTO>({
            query: (credentials) => ({
                url: APIEndpoints.signup,
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials(data))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        signin: builder.mutation<SigninResponse, SigninDTO>({
            query: (credentials) => ({
                url: APIEndpoints.signin,
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials(data))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    }),
})

export const signup = (payload: SignupDTO) => store.dispatch(
    authApi.endpoints.signup.initiate(payload)
)

export const signin = (payload: SigninDTO) => store.dispatch(
    authApi.endpoints.signin.initiate(payload)
)