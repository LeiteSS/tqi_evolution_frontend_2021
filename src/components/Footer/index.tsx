import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/userAuth';

import { FooterContainer, FooterWrapper, Icons } from './styles';
import UserCircle from '../UserCircle';

import { FiGithub } from "react-icons/fi";



const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrapper>
                   <h6 className='h2'>TQI Agiota</h6>
                <Icons>
                  <a href="https://www.github.com/LeiteSS/" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={40} color="#4D498B" />
                  </a>
                </Icons>
                <h6 className='h2'>MMXXII</h6> 
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer