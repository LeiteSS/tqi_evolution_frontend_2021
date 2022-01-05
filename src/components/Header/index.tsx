import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/userAuth';

import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logo from '../../assets/images/logo-tqi.svg';



const Header = () => {
   
    const navigate = useNavigate();
    const { user } = useAuth();

    const initials = user.name.substr(0,1)+user.lastname.substr(0,1);

    const handleLogoff = () => {
        navigate('/signin')
    }

    const handleToHome = () => {
        navigate('/home');
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logo} width={172} height={61} alt="logo TQI" />
                <UserInfo>
                  <UserCircle initials={initials} />
                  <div>
                      <p>Olá, <span className="primary-color font-bold">{user.username}</span></p>
                      <strong>{user.cpf}</strong><br/>
                      <a href="#" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header