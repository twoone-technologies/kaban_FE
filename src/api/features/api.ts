import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from "../store"
import { setCredentials } from '../slices/auth'
import APIEndpoints from '~/utils/api-endpoints'
import { AuthState } from '~/utils/types/auth.types'

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken
        if (token) headers.set("authorization", `Bearer ${token}`)
        return headers
    }
})

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    // console.log(args) // request url, method, body
    // console.log(api) // signal, dispatch, getState()
    // console.log(extraOptions) //custom like {shout: true}
    let result = await baseQuery(args, api, extraOptions)
    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
        // send refresh token to get new access token
        const refreshResult = await baseQuery(APIEndpoints.refresh, api, extraOptions)
        if (refreshResult.data) {
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data as AuthState }))
            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        }
    }
    // setup 401 check for re-auth
    return result
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Listings', 'Realtor'],
    endpoints: () => ({})
})
