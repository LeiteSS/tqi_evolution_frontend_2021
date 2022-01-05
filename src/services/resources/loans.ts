import api from '../api';

export interface LoanDTO {
  datePayment: string;
  paymentQuantity: number;
  value: number;
}

export interface Loans {
  id_loan: number;
  user_id: number;
  date_payment: Date;
  payment_quantity: number;
  value: number;
  username: string;
  email: string;
  name_surname_lastname: string;
  cpf: string;
  rg: string;
  income: number;
}

export const createLoan = (data: LoanDTO) => {
  return api.post('/api/v1/loans', data)
}

export const listLoans = () => {
  return api.get('/api/v1/loans')
}

export const detailLoan = (id: number) => {
  return api.get(`/api/v1/loans/${id}`)
}