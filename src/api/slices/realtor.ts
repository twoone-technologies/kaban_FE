import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UpdateRealtorDTO } from "~/utils/types/auth.types"

const initialState: UpdateRealtorDTO = {
  agent_image: undefined,
  full_name: undefined,
  realtor_service: undefined,
  service_area: undefined,
  bio: undefined,
  email: undefined,
  office_state: undefined,
  office_city: undefined,
  office_address: undefined,
  mobile_number: undefined,
  whatsapp_number: undefined,
  facebook: undefined,
  x: undefined,
  linkedin: undefined,
  instagram: undefined,
  youtube: undefined,
  tiktok: undefined,
  govt_issued_id: undefined,
}

const realtorSlice = createSlice({
  name: 'realtorUpdate',
  initialState,
  reducers: {
    updateCredentials: (state, action: PayloadAction<UpdateRealtorDTO>) => {
      state = action.payload
      return state
    },
  }
})

export const { updateCredentials } = realtorSlice.actions
export default realtorSlice.reducer
