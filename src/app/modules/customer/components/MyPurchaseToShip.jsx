import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import MyPurchaseItem from './MyPurchaseItem';

const BorderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
    justify-content: space-between;
`;

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 0 15px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    padding: 0 8px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const TextGreySmall = styled.p`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
`;

export default function MyPurchaseToShip() {
    return (
        <BorderContainer>
            <All>
                <MyPurchaseItem />
                <Bottom>
                    <TextGreySmall>Product will be shipped out by 25-04-2024</TextGreySmall>
                    <PriceContainer>
                        <p>Order Total (1 item):</p>
                        <p>RM 734.90</p>
                    </PriceContainer>
                </Bottom>
            </All>
        </BorderContainer>
    );
}
