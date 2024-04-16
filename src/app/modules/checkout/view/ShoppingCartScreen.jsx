import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Storefront from '@mui/icons-material/Storefront';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import ProductImage from './assets/product.png';
import CheckoutBar from './component/CheckoutBar';
import COReusableStyles from './styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
`;
const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr 1fr;
    gap: 1rem;
    align-items: center;
`;
const CheckboxLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;
    gap: 1rem;
`;
const QuantityControlContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`;
const QuantityChangeButton = styled.button`
    border: 1px solid ${COLORS.grey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    background: none;
    width: 48px;
    height: 48px;
    cursor: pointer;
`;

function handleSelectAllChange() {}
function handleSelectStoresChange() {}
function handleIncreamentChange() {}
function handleDecrementChange() {}

export default function ShoppingCartScreen() {
    return (
        <Wrapper>
            <COReusableStyles.BorderConatiner>
                <Layout>
                    <FormControlLabel
                        control={<Checkbox onChange={handleSelectAllChange} />}
                        label={
                            <COReusableStyles.Label style={{ marginLeft: '1.5rem' }}>Product</COReusableStyles.Label>
                        }
                    />
                    <COReusableStyles.Label>Unit Price</COReusableStyles.Label>
                    <COReusableStyles.Label>Quantity</COReusableStyles.Label>
                    <COReusableStyles.Label>Total Price</COReusableStyles.Label>
                    <COReusableStyles.Label>Action</COReusableStyles.Label>
                </Layout>
            </COReusableStyles.BorderConatiner>

            <COReusableStyles.BorderConatiner>
                <FormControlLabel
                    control={<Checkbox onChange={handleSelectStoresChange} />}
                    label={
                        <CheckboxLabelContainer>
                            <Storefront />
                            <COReusableStyles.Text style={{}}>Titan Badminton Store</COReusableStyles.Text>
                        </CheckboxLabelContainer>
                    }
                />
                <COReusableStyles.Divider />
                <Layout>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <CheckboxLabelContainer>
                                <img
                                    src={ProductImage}
                                    alt="product"
                                />
                                <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                    YONEX ASTROX 99
                                    <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>Red, 4U/5G</p>
                                </COReusableStyles.Text>
                            </CheckboxLabelContainer>
                        }
                    />
                    <COReusableStyles.Text>RM729.00</COReusableStyles.Text>
                    <QuantityControlContainer>
                        <QuantityChangeButton onClick={handleDecrementChange}>-</QuantityChangeButton>
                        <QuantityChangeButton style={{ cursor: 'auto' }}>1</QuantityChangeButton>
                        <QuantityChangeButton onClick={handleIncreamentChange}>+</QuantityChangeButton>
                    </QuantityControlContainer>
                    <COReusableStyles.Text>RM729.00</COReusableStyles.Text>
                    <IconButton
                        aria-label="delete"
                        style={{ color: COLORS.black }}
                    >
                        <DeleteOutline />
                    </IconButton>
                </Layout>
            </COReusableStyles.BorderConatiner>
            <CheckoutBar />
        </Wrapper>
    );
}
