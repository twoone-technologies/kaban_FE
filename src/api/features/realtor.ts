import { api } from "./api"
import APIEndpoints from "~/utils/api-endpoints"
import { store } from "../store"
import { UpdateRealtorDTO, UpdateRealtorResponse } from "~/utils/types/auth.types"
import { updateCredentials } from "../slices/realtor"

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        editRealtor: builder.mutation<UpdateRealtorDTO, UpdateRealtorResponse>({
            query: (credentials) => ({
                url: APIEndpoints.editRealtor,
                method: 'PUT',
                body: credentials
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(updateCredentials(data))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    }),
})

export const editRealtor = (payload: UpdateRealtorDTO) => store.dispatch(
    authApi.endpoints.editRealtor.initiate(payload)
)