import styled from 'styled-components';

export const StatementItemContainer = styled.div`
    display: flex;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      color: ${({theme})=> theme.colors.background};
    }
`

export const StatementItemInfo = styled.div`

    p{
        margin-bottom: 2px;
    }
`


export const StatementItemImage = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.background};
    border-radius: 10px;
    margin-bottom: 20px;

    Button {
        &:hover {
            transform: translateY(-2px);
            color: ${({theme})=> theme.colors.tertiary};
            cursor: pointer;
        }
    }
`;

export const StatementButton = styled.div`
    width: 60px;
    height: 60px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  line-height: 29px;
  font-size: 24px;
  font-weight:  bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-weight: normal;
  line-height: 29px;
  font-size: 16px;
`;

