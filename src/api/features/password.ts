import { api } from "./api"
import APIEndpoints from "~/utils/api-endpoints"
import { store } from "../store"
import { PasswordDto } from "~/utils/types/password.types"

export const realtorApi = api.injectEndpoints({
  endpoints: builder => ({
    updatePassword: builder.mutation<string, { id: string, credentials: PasswordDto }>({
      query: ({ id, credentials }) => ({
        url: APIEndpoints.updatePassword(id),
        method: 'PATCH',
        body: credentials
      }),
    }),
  }),
})

export const updatePassword = (payload: PasswordDto, id: string) => store.dispatch(
  realtorApi.endpoints.updatePassword.initiate({ id, credentials: payload })
)
