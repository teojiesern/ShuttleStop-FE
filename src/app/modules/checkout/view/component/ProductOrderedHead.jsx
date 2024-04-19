import Storefront from '@mui/icons-material/Storefront';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: grid;
    padding: 1.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
`;
const ProductOrdered = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
`;
const ItemStore = styled.span`
    display: flex;
    flex: 6 6 60%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
    align-items: center;
`;
const DescTitle = styled.span`
    flex: 1 1 10%;
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
`;

export default function ProductOrderedHead() {
    return (
        <Container>
            <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD, marginBottom: '1rem' }}>Products Ordered</p>
            <ProductOrdered>
                <ItemStore>
                    <Storefront style={{ fontSize: FONTSIZE.large, marginRight: '1rem' }} />
                    Titan Badminton Store
                </ItemStore>
                <DescTitle>Unit Price</DescTitle>
                <DescTitle>Quantity</DescTitle>
                <DescTitle>Total Price</DescTitle>
            </ProductOrdered>
        </Container>
    );
}
