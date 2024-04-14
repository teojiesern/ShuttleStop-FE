import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import collectionPointsList from '../data/collectionPointsList';
import useShipping from '../view/hooks/useShipping';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem 3rem 2rem 3rem;
`;
const Title = styled.h1`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;
const StandardDeliveryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    border: 1px solid ${(props) => (props.isActive ? COLORS.green : COLORS.darkGrey)};
    color: ${(props) => (props.isActive ? COLORS.green : COLORS.darkGrey)};
    font-weight: ${(props) => (props.isActive ? FONTWEIGHT.SEMI_BOLD : FONTWEIGHT.REGULAR)};
    font-size: ${FONTSIZE.small};
    width: auto;
    background: none;
    cursor: pointer;
`;
const SelfCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    border: 1px solid ${COLORS.darkGrey};
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE.small};
    width: auto;
    gap: 1.5rem;
`;
const SelfCollectionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const CollectionPointLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
`;

export default function ShippingOptionModal({ hideModal }) {
    const { shippingOption, updateShippingOption } = useShipping();

    const handleStandardDeliveryClick = useCallback(() => {
        updateShippingOption('standardDelivery');
    }, [updateShippingOption]);

    const handleRadioChange = useCallback(
        (event) => {
            updateShippingOption(event.target.value);
        },
        [updateShippingOption],
    );

    const handleSaveClick = useCallback(() => {
        updateShippingOption(shippingOption);
        hideModal();
    }, [hideModal, updateShippingOption, shippingOption]);

    const mockData = [];
    for (let i = 0; i < 2; i++) {
        mockData.push(
            <FormControlLabel
                key={i}
                value={i}
                control={<Radio />}
                label={
                    <CollectionPointLabel>
                        <p>{collectionPointsList.name}</p>
                        <p style={{ color: COLORS.darkGrey }}>{collectionPointsList.address}</p>
                    </CollectionPointLabel>
                }
            />,
        );
    }

    return (
        <Container>
            <Title>Shipping Option</Title>
            <StandardDeliveryButton
                isActive={shippingOption === 'standardDelivery'}
                onClick={handleStandardDeliveryClick}
            >
                <p>Standard Delivery</p>
                <p style={{ textAlign: 'right' }}>RM5.90</p>
            </StandardDeliveryButton>
            <SelfCollectionContainer>
                <SelfCollectionTitle>
                    <p>Self Collection Points</p>
                    <p style={{ textAlign: 'right' }}>RM5.90</p>
                </SelfCollectionTitle>
                <StyledRadioGroup
                    value={shippingOption}
                    onChange={handleRadioChange}
                >
                    {mockData}
                </StyledRadioGroup>
            </SelfCollectionContainer>
            <ButtonContainer>
                <Button
                    style={{ ...PlatformReusableStyles.SecondaryButtonStyles, padding: '1rem 2rem' }}
                    onClick={hideModal}
                >
                    <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>CANCEL</p>
                </Button>
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '1rem 2rem' }}
                    onClick={handleSaveClick}
                >
                    <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>SAVE</p>
                </Button>
            </ButtonContainer>
        </Container>
    );
}
