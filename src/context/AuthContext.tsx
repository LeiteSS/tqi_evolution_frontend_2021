import { createContext, useState } from "react";

import { signIn, signUp, SignInData, SignUpData, me } from '../services/resources/users';

interface ContextData {
  user: ProfileDTO;
  userSignIn: (userData: SignInData) => Promise<ProfileDTO>;
  userSignUp: (userData: SignUpData) => Promise<ProfileDTO>;
  getCurrentUser: () => Promise<ProfileDTO>;
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

export interface LoanDTO {
  id_loan: number;
  user_id: number;
  date_payment: Date;
  payment_quantity: number;
  value: number;
  username: string;
  email: string;
  name: string;
  lastname: string;
  cpf: string;
  rg: string;
  income: number;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<ProfileDTO>(() => {
    const user = localStorage.getItem('@TQI:User');

    if (user) {
      return JSON.parse(user);
    }

    return {} as ProfileDTO
  });

  const userSignIn = async (userData: SignInData) => {
    const {data} = await signIn(userData);

    if (data?.status === 'error') {
      return data;
    }

    if (data.token) {
      localStorage.setItem('@TQI:Token', data.token)
    } 

    return getCurrentUser();
  }

  const userSignUp = async (userData: SignUpData) => {
    const {data} = await signUp(userData);

    return data;
  }

  const getCurrentUser = async () => {
    const {data} = await me();
    
    setUser(data);
    localStorage.setItem('@TQI:User', JSON.stringify(user));
    
    return data;
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
        {children}
    </AuthContext.Provider>
  )
}