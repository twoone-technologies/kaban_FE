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