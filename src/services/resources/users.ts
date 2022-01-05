import api from '../api';

export interface SignInData {
  login: string;
  password: string;
}



export interface SignUpData {
  username: string,
  name: string;
  lastname: string;
  email: string;
  password: string;
  cpf: string;
  rg: string;
  income: number;
  publicArea: string;
  district: string;
  city: string;
  state: string;
  houseNumber: number;
  zipCode: string;
  roles: string[];
}

interface ProfileDTO {
  username: string;
  email: string;
  name: string;
  lastname: string;
  cpf: string;
  rg: string;
  income: number;
}

export const signIn = async (data: SignInData) => {
  return api.post('/api/v1/users/signIn', data)
}

export const signUp = async (data: SignUpData) => {
  return api.post('/api/v1/users/signUp', data)
}

export const me = async () => {
  return api.get<ProfileDTO>('/api/v1/users/me')
}