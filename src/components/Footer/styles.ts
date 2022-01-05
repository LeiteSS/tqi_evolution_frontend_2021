import styled from 'styled-components';


export const FooterContainer = styled.head`
    width: 100%;
    height: 90px;

    background-color: ${({theme}) => theme.colors.backgroundLight};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterWrapper = styled.div`
    width: 80%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`