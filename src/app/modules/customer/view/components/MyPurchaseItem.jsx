import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ProductImage from '../../../checkout/view/assets/product.png';
import logoTitan from '../assets/logoTitan.png';

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 98%;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
`;

const Container = styled.div`
    display: flex;
    width: 98%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 8px;
`;

const Seller = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TextStatus = styled.p`
    color: ${COLORS.green};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.grey};
    margin: 0;
`;

const Product = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`;

const TextGrey = styled.p`
    color: ${COLORS.darkGrey};
`;

export default function MyPurchaseItem() {
    return (
        <All>
            <HeaderContainer>
                <Seller>
                    <img
                        src={logoTitan}
                        alt="logo"
                        width={30}
                    />
                    <p>Titian Badminton Store</p>
                </Seller>
                <TextStatus>Completed</TextStatus>
            </HeaderContainer>
            <StyledHr />
            <Container>
                <Product>
                    <img
                        src={ProductImage}
                        alt="product"
                        width={50}
                    />
                    <ProductInfo>
                        <p>YONEX ASTROX 99</p>
                        <TextGrey>Red</TextGrey>
                        <p>x1</p>
                    </ProductInfo>
                </Product>
                <p>RM729.00</p>
            </Container>
            <StyledHr />
        </All>
    );
}
