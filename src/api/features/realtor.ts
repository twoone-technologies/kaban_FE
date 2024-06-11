import { api } from "./api"
import APIEndpoints from "~/utils/api-endpoints"
import { store } from "../store"
import { Realtor } from "~/utils/types/realtor.types"

export const realtorApi = api.injectEndpoints({
  endpoints: builder => ({
    getRealtor: builder.query<Realtor, string>({
      query: (id) => APIEndpoints.realtor(id),
      providesTags: (result) => result ? [{ type: 'Realtor', id: result.id }] : [],
    }),
    editRealtor: builder.mutation<Realtor, { id: string, credentials: FormData }>({
      query: ({ id, credentials }) => ({
        url: APIEndpoints.realtor(id),
        method: 'PUT',
        body: credentials
      }),
      invalidatesTags: ['Realtor'],
    }),
  }),
})

export const editRealtor = (payload: FormData, id: string) => store.dispatch(
  realtorApi.endpoints.editRealtor.initiate({ id, credentials: payload })
)

export const { useGetRealtorQuery } = realtorApi