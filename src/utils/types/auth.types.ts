import { Realtor } from "./realtor.types";

export type SignupDTO = {
  email: string;
  full_name: string;
  password: string;
  phone_num?: string;
  role?: number;
};

export type SigninDTO = {
  email: string;
  password: string;
};

export type AuthState = {
  accessToken: string | null;
  email: string;
  fullName: string;
  realtor: Realtor;
};

export enum AuthIntent {
  SIGN_IN = "Sign In",
  SIGN_UP = "Sign Up",
}
