import { TextField } from '@mui/material';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90%;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 200px;
`;

export default function ShopInformationRegistration() {
    return (
        <Container>
            <ContentContainer>
                <FormLabel>Shop Name</FormLabel>
                <TextField
                    label="Shop Name..."
                    size="small"
                    style={{ minWidth: '50%' }}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Pickup Address</FormLabel>
                <TextField
                    label="Enter your Pickup address..."
                    size="small"
                    style={{ minWidth: '50%' }}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Email</FormLabel>
                <TextField
                    label="Enter your Email..."
                    size="small"
                    type="email"
                    style={{ minWidth: '50%' }}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    label="Enter your Phone Number..."
                    size="small"
                    type="tel"
                    style={{ minWidth: '50%' }}
                />
            </ContentContainer>
        </Container>
    );
}
