import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
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

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.grey};
    margin: 0;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    padding: 0 8px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const AlignRight = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 98%;
    padding: 0 8px;
`;

const TextGreySmall = styled.p`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
`;

export default function MyPurchaseToReceive() {
    const navigate = useNavigate();

    const handleParcelReceived = () => {
        navigate('/customer/my-purchase/completed', { replace: true });
    };

    return (
        <BorderContainer>
            <All>
                <MyPurchaseItem />
                <AlignRight>
                    <PriceContainer>
                        <p>Order Total (1 item):</p>
                        <p>RM 734.90</p>
                    </PriceContainer>
                </AlignRight>
                <StyledHr />
                <Bottom>
                    <TextGreySmall>Parcel has been successfullt delivered</TextGreySmall>
                    <Button
                        style={{ ...PlatformReusableStyles.PrimaryButtonStyles, width: '160px' }}
                        onClick={handleParcelReceived}
                    >
                        ORDER RECEIVED
                    </Button>
                </Bottom>
            </All>
        </BorderContainer>
    );
}
