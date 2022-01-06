import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/userAuth';

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import background from '../../assets/images/background-login.jpg';
import logo from '../../assets/images/logo-tqi.svg';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const SignUp = () => {
  // user
    const [name, setname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [income, setIncome] = useState(Number);
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  // address
    const [publicArea, setpublicArea] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [houseNumber, setHouseNumber] = useState(Number);
    const roles = ["USERS"];

    const navigate = useNavigate();
    const { userSignUp } = useAuth();

    const handleToSignUp = async () => {
      const data = {
        username,
        name,
        lastname,
        email,
        password,
        income,
        cpf,
        rg,
        publicArea,
        district,
        city,
        state,
        zipCode,
        houseNumber,
        roles
      }
  
      const response = await userSignUp(data);
      
      console.log(response);

      if(response.username) {
        navigate('/confirmation');
        return;
      }
  
      alert('Usuario já cadastrado');
    }
    return (
        <>
          <Wrapper>
            <Background image={background}/>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                  <InputContainer>
                      <Input placeholder='Nome' value={name} onChange={e => setname(e.target.value)} />
                      <Input placeholder='Sobrenome' value={lastname} onChange={e => setLastname(e.target.value)} />
                      <Input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                      <Input placeholder='RG' value={rg} onChange={e => setRg(e.target.value)} />
                      <Input placeholder='Renda' value={income} onChange={e => setIncome(e.target.valueAsNumber)} type="number"/>
                      <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                      <Input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                      <Input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} type="password" />
                  </InputContainer>
              </Wrapper>
            </Card>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                <InputContainer>
                  <Input placeholder='Logradouro' value={publicArea} onChange={e => setpublicArea(e.target.value)} />
                  <Input placeholder='Bairro' value={district} onChange={e => setDistrict(e.target.value)} />
                  <Input placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)} />
                  <Input placeholder='Estado' value={state} onChange={e => setState(e.target.value)} />
                  <Input placeholder='CEP' value={zipCode} onChange={e => setZipCode(e.target.value)} />
                  <Input placeholder='Numero da casa' value={houseNumber} onChange={e => setHouseNumber(e.target.valueAsNumber)} type="number"/>
                  <img src={logo} width={160} height={61} alt="logo TQI" />
                </InputContainer>
                
              </Wrapper>
            </Card>
          </Wrapper>
          <Wrapper>
            <ButtonContainer>
                <Button type="button" onClick={handleToSignUp}>Cadastrar-se</Button>
                <p>Já tem uma conta? <Link to="/signin">Entre Já</Link></p>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
    )
}

export default SignUp;