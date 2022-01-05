import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Card from "../../components/Card";
import Header from '../../components/Header';
import { BodyContainer, HomeBackground } from '../Home/styles';


import { format, parseISO } from 'date-fns';

const Details= () => {
  const location  = useLocation();
  const {state} = location;
  const navigate = useNavigate();

  const date = format(parseISO(`${state.date_payment}T00:00:00`), 'dd/MM/yyyy');

  const handleToHome = () => {
    navigate('/home');
  }

  return (
    <HomeBackground>
      <Header />
      <BodyContainer>
        <div>
          <a href="#" onClick={handleToHome}>
            <FiArrowLeft size={25} color='#888' />
            <span>   Voltar para o Inicio</span> 
          </a>
          <Card width='403px' height='auto'>
            <h2>Cod.: {state.id_loan}</h2>
            <h3>Valor do Emprestimo: {state.value}</h3>
            <h3>Quantidade de Parcelas: {state.payment_quantity}</h3>
            <h2>Primeira parcela para pagar no dia {date} </h2>
          </Card>
        </div>
      </BodyContainer>
    </HomeBackground>
  );
}

export default Details;