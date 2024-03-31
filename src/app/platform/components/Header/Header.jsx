import styled from 'styled-components';
import Logo from '../../icons/logo.svg';
import HeaderLink from './HeaderLink';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem;
    background-color: #f1f1f1;
    gap: 1rem;
`;

export default function Header() {
    return (
        <Container>
            <HeaderLink />
            <img
                src={Logo}
                width={200}
            />
        </Container>
    );
}
