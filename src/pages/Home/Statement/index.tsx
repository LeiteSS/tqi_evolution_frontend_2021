import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StatementItemContainer, StatementItemImage, StatementItemInfo } from './styles';
import { FiDollarSign } from 'react-icons/fi'

import { detailLoan } from '../../../services/resources/loans';

import Button from '../../../components/Button';

import { format, parseISO } from 'date-fns'

interface Loans {
    id_loan: number,
    value: number,
    payment_quantity: number,
    date_payment: Date
}


export const LoanItem = ({value, payment_quantity, date_payment, id_loan}: Loans) => {
    const [modalOpened, setModalOpened] = useState(false);

    const navigate = useNavigate();

    const date = format(parseISO(`${date_payment}T00:00:00`), 'dd/MM/yyyy');

    const handleToDetail = async () => {
        const {data} = await detailLoan(id_loan);

        navigate(`/detail/${id_loan}`, {state: data});
    }

    return (
        <StatementItemContainer>
            <StatementItemImage>
                <Button type="button" onClick={handleToDetail}>
                    <FiDollarSign size={24}/>
                </Button>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    <strong>Cod.:</strong> {id_loan}
                </p>
                <p className="">
                    <strong>Valor:</strong> {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </p>
                <p className=""><strong>Nº de Parcelas:</strong> {payment_quantity}</p>
                <p className=""><strong>Primeira Parcela: </strong>{date}</p>
                <br />
            </StatementItemInfo>
        </StatementItemContainer>
    )
}