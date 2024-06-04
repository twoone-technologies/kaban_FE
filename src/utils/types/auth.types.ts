export type SignupDTO = {
    email: string,
    full_name: string,
    password: string,
    phone_num?: string,
    role?: number
}
export type SignupResponse = {
    accessToken: string,
    email: string,
    fullName: string,
    rating: number | null,
    realtor_pic: string | null,
    verified: boolean | null,
}

export type SigninDTO = {
    email: string,
    password: string
}
export type SigninResponse = {
    accessToken: string,
    email: string,
    fullName: string,
    rating: number | null,
    realtor_pic: string | null,
    verified: boolean | null,
}

export type AuthState = {
    accessToken: string | null,
    email: string,
    fullName: string,
    rating: number | null,
    realtor_pic: string | null,
    verified: boolean | null,
}

export type UpdateRealtorDTO = {
    agent_image?: string,
    full_name?: string,
    realtor_service?: string,
    service_area?: string,
    bio?: string,
    email?: string,
    office_state?: string,
    office_city?: string,
    office_address?: string,
    mobile_number?: string,
    whatsapp_number?: string,
    facebook?: string,
    x?: string,
    linkedin?: string,
    instagram?: string,
    youtube?: string,
    tiktok?: string,
    govt_issued_id?: string,
}

export type UpdateRealtorResponse = {
    agent_image?: string,
    full_name?: string,
    realtor_service?: string,
    service_area?: string,
    bio?: string,
    email?: string,
    office_state?: string,
    office_city?: string,
    office_address?: string,
    mobile_number?: string,
    whatsapp_number?: string,
    facebook?: string,
    x?: string,
    linkedin?: string,
    instagram?: string,
    youtube?: string,
    tiktok?: string,
    govt_issued_id?: string,
}