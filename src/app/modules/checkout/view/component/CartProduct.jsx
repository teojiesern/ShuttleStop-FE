import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ProductImage from '../assets/product.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-betweem;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
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
const NameWrapper = styled.span`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
`;
const PriceContainer = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const QuantityContainer = styled.span`
    flex: 1.5 1.5 20%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const ActionContainer = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const QuantityBox = styled.span`
    display: inline-flex;
    border: 1px solid ${COLORS.darkGrey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    height: 48px;
    width: 48px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
`;
const QuantityAction = styled.button`
    display: inline-flex;
    border: 1px solid ${COLORS.darkGrey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    background-color: ${COLORS.white};
    height: 48px;
    width: 48px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
    cursor: pointer;
`;

function decreaseByOne() {}
function increaseByOne() {}

export default function CheckoutProduct() {
    return (
        <Container>
            <StyledFormControlLabel
                control={<Checkbox sx={{ color: COLORS.darkGrey, '&.Mui-checked': { color: COLORS.green } }} />}
                label={
                    <LabelContainer>
                        <img
                            src={ProductImage}
                            alt="product"
                        />
                        <NameWrapper>
                            YONEX ASTROX 99
                            <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>Red, 4U/5G</p>
                        </NameWrapper>
                    </LabelContainer>
                }
            />
            <PriceContainer>RM729.00</PriceContainer>
            <QuantityContainer>
                <QuantityAction onClick={decreaseByOne}>-</QuantityAction>
                <QuantityBox>1</QuantityBox>
                <QuantityAction onClick={increaseByOne}>+</QuantityAction>
            </QuantityContainer>
            <PriceContainer>RM729.00</PriceContainer>
            <ActionContainer>
                <IconButton
                    aria-label="delete"
                    style={{ color: COLORS.black }}
                >
                    <DeleteOutline />
                </IconButton>
            </ActionContainer>
        </Container>
    );
}
