import Cancel from '@mui/icons-material/Cancel';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import COReusableStyles from '../view/styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 5rem 2rem;
`;
const IconContainer = styled.div`
    color: ${COLORS.red};
    font-size: 120px;
`;

export default function NoCheckedProductModal() {
    return (
        <Wrapper>
            <IconContainer>
                <Cancel fontSize="120px" />
            </IconContainer>
            <COReusableStyles.Text>You have not selected any items for checkout</COReusableStyles.Text>
        </Wrapper>
    );
}
