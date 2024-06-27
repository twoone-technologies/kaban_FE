import { api } from "./api"
import APIEndpoints from "~/utils/api-endpoints"
import { store } from "../store"
import { Realtor } from "~/utils/types/realtor.types"

export const listingApi = api.injectEndpoints({
  endpoints: builder => ({
    getListing: builder.query<Realtor, string>({
      query: (id) => APIEndpoints.realtor(id),
      providesTags: (result) => result ? [{ type: 'Realtor', id: result.id }] : [],
    }),
    editListing: builder.mutation<Realtor, { id: string, credentials: FormData }>({
      query: ({ id, credentials }) => ({
        url: APIEndpoints.realtor(id),
        method: 'PUT',
        body: credentials
      }),
      invalidatesTags: ['Realtor'],
    }),
  }),
})

export const editListing = (payload: FormData, id: string) => store.dispatch(
  listingApi.endpoints.editListing.initiate({ id, credentials: payload })
)

export const { useGetListingQuery } = listingApi