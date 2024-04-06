import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import Logo from '../../icons/logo.svg';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LineSeparator = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${COLORS['light-grey']};
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const FooterDisclaimer = styled.p`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.MEDIUM};
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Link to="/">
                <img
                    src={Logo}
                    width={300}
                />
            </Link>
            <LineSeparator />
            <FooterDisclaimer>© 2024 ShuttleStop. All Rights Reserved.</FooterDisclaimer>
        </FooterContainer>
    );
}
