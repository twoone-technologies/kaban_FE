export type SignupDTO = {
    email: string,
    full_name: string,
    password: string,
    role?: number
}
export type SignupResponse = {
    accessToken: string,
}

export type SigninDTO = {
    email: string,
    password: string
}
export type SigninResponse = {
    accessToken: string,
}

export type AuthState = {
    accessToken: string | null,
}