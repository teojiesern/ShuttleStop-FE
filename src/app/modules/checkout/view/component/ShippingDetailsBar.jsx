import Place from '@mui/icons-material/Place';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: grid;
    padding: 1rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
    margin-bottom: 1rem;
`;
const AddressHead = styled.span`
    display: flex;
    color: ${COLORS.green};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
    align-items: center;
    margin-bottom: 1rem;
`;
const CustomerDetailsContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;
const CustomerNameContainer = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.BOLD};
    margin-right: 0.5rem;
`;
const ContactNumContainer = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.BOLD};
    margin-right: 1.5rem;
`;
const AddressContainer = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    margin-right: 1.5rem;
`;
const EditAddressButton = styled.button`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    border: none;
    background: none;
    color: #007ce0;
    cursor: pointer;
`;

function showModel() {}

export default function ShippingDetailsBar({ shippingOption }) {
    return (
        <Container>
            <AddressHead>
                <Place style={{ fontSize: FONTSIZE.large, marginRight: '1rem' }} />
                {shippingOption === 'standardDelivery' ? 'Standard Delivery' : 'Self Collection Point'}
            </AddressHead>
            <CustomerDetailsContainer>
                <CustomerNameContainer>Aron Chia</CustomerNameContainer>
                <ContactNumContainer>(+60) 12 345 6789</ContactNumContainer>
                {shippingOption === 'standardDelivery' ? (
                    <AddressContainer>1, Jalan Penang, 10400 Georgetown, Penang</AddressContainer>
                ) : (
                    <AddressContainer>CollectCo JustPrint Penang</AddressContainer>
                )}
                {shippingOption === 'standardDelivery' && (
                    <EditAddressButton onClick={showModel}>
                        <p>Edit</p>
                    </EditAddressButton>
                )}
            </CustomerDetailsContainer>
        </Container>
    );
}
