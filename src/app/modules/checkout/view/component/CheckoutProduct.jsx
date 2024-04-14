import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ProductImage from '../assets/product.png';

const Container = styled.div`
    display: flex;
    padding: 1.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
    text-align: center;
    align-items: center;
`;
const ProductContainer = styled.span`
    display: flex;
    flex: 6 6 60%;
    align-items: center;
`;
const ProductName = styled.span`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: left;
`;
const UnitPrice = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const Quantity = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;
const TotalPrice = styled.span`
    flex: 1 1 10%;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: center;
`;

export default function CheckoutProduct() {
    return (
        <Container>
            <ProductContainer>
                <img
                    src={ProductImage}
                    alt="product"
                    width="50px"
                    style={{ marginRight: '1rem' }}
                />
                <ProductName>
                    YONEX ASTROX 99
                    <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'], marginTop: '0.5rem' }}>
                        Red, 4U/5G
                    </p>
                </ProductName>
            </ProductContainer>
            <UnitPrice>RM729.00</UnitPrice>
            <Quantity>1</Quantity>
            <TotalPrice>RM729.00</TotalPrice>
        </Container>
    );
}
