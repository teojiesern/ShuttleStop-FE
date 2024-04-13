import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 84px;
    box-shadow: 0 0 10px ${COLORS.darkGrey};
    padding: 0.5rem 5rem;
`;
const StyledFormControlLabel = styled(FormControlLabel)`
    flex: 4 4 45%;
`;
const LabelContainer = styled.span`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    margin-right: 0;
`;
const PriceContainer = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.green};
    text-align: center;
`;
const QuantityContainer = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const CheckoutButton = styled(Link)`
    flex: 1 1 10%;
    height: 52px;
    background-color: ${COLORS.green};
    border: none;
    color: ${COLORS.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export default function CheckoutBar() {
    return (
        <Container>
            <StyledFormControlLabel
                control={<Checkbox />}
                label={<LabelContainer style={{ color: COLORS.black }}>Select All</LabelContainer>}
            />
            <QuantityContainer>Total Item: 1 item</QuantityContainer>
            <PriceContainer>RM729.00</PriceContainer>
            <CheckoutButton to="checkoutScreen">
                <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>CHECK OUT</p>
            </CheckoutButton>
        </Container>
    );
}
