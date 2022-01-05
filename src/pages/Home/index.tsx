import { useEffect, useState } from 'react';

import { HomeBackground, BodyContainer, InlineContainer, InlineTitle, Greetings, StatementContainer } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useAuth from '../../hooks/userAuth';

import { createLoan, listLoans } from '../../services/resources/loans';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { LoanItem } from './Statement';

interface Loans {
    id_loan: number,
    value: number,
    payment_quantity: number,
    date_payment: Date
}

const Home = () => {
  const [loans, setLoans] = useState<Loans[]>([]);
  
  const {user, getCurrentUser} =  useAuth();

  const [value, setValue] = useState(Number);
  const [paymentQuantity, setPayment_quantity] = useState(Number);
  const [datePayment, setDate_payment] = useState('');

  const handleLoan = async () => {
    const data = {
      datePayment,
      paymentQuantity,
      value    
    }

    try {
      const response = await createLoan(data);

      console.log(response);

      if(response) {
        getAllLoans();
        return
      }
      
    } catch (e) {
      console.log(e);
      alert('Não foi possivel confirmar o emprestimo');
    }
  }

  const getAllLoans = async () => {
    const {data} = await listLoans();
    console.log(data);
    setLoans(data);
  }

  useEffect(() => {
    getCurrentUser();
    getAllLoans();
  }, [])

  if(!user) {
    return null;
  }

  const income = user?.income || 0;
  
  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.name} {user.lastname}</h3>
      </Greetings>
      <BodyContainer>
                <div>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Sua renda</h2>
                       </InlineTitle>
                       <InlineContainer>
                            <h3 className="wallet">
                                {income.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineContainer>
                   </Card>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Pedir Emprestimo</h2>
                       </InlineTitle>
                        <InlineContainer>
                            <Input placeholder='Valor' min={99.9} style={{flex: 1}} value={value} onChange={e => setValue(e.target.valueAsNumber)} type="number"/>
                            <Input placeholder='Parcelas' min={1} max={60} style={{flex: 1}} value={paymentQuantity} onChange={e => setPayment_quantity(e.target.valueAsNumber)} type="number"/>
                            <Input style={{flex: 1}} value={datePayment} onChange={e => setDate_payment(e.target.value)} type="date"  />
                            <Button onClick={handleLoan}>Confirma</Button>
                        </InlineContainer>
                   </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Emprestimos</h2>
                      </InlineTitle>
                      <StatementContainer>
                        {loans.map(loan => <LoanItem {...loan}/>)}
                      </StatementContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default Home
