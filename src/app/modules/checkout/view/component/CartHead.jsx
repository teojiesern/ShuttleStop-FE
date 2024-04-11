import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-betweem;
    padding: 0.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
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
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: center;
`;
const QuantityContainer = styled.span`
    flex: 1.5 1.5 20%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: center;
`;
const ActionContainer = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: center;
`;

export default function CheckoutHead() {
    return (
        <Container>
            <StyledFormControlLabel
                control={<Checkbox sx={{ color: COLORS.darkGrey, '&.Mui-checked': { color: COLORS.green } }} />}
                label={<LabelContainer style={{ color: COLORS.darkGrey }}>Product</LabelContainer>}
            />
            <PriceContainer>Unit Price</PriceContainer>
            <QuantityContainer>Quantity</QuantityContainer>
            <PriceContainer>Total Price</PriceContainer>
            <ActionContainer>Action</ActionContainer>
        </Container>
    );
}
