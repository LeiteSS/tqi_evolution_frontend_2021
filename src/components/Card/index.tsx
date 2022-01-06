import { CardContainer } from './styles';


interface CardProps {
    width?: string,
    children?: React.ReactNode,
    height?: string,
    borderRadius?: string,
    noShadow?: boolean
}

const Card = ({
    children,
    width='100%',
    height='auto',
    borderRadius='20px',
    noShadow = false,
    }: CardProps) => {
    return (
        <CardContainer width={width} height={height} borderRadius={borderRadius} noShadow={noShadow}>
            {children}
        </CardContainer>
    )
}

export default Card;
