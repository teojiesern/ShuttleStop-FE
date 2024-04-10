import Storefront from '@mui/icons-material/Storefront';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: flex;
    padding: 0.5rem 2rem 0.5rem 2rem;
    border: 1px solid ${COLORS['border-grey']};
`;
const LabelContainer = styled.div`
    display: flex;
    margin-left: 1.5rem;
    margin-right: 0;
`;
const NameWrapper = styled.span`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
`;

export default function StoreHeader() {
    return (
        <Container>
            <FormControlLabel
                control={<Checkbox sx={{ color: COLORS.darkGrey, '&.Mui-checked': { color: COLORS.green } }} />}
                label={
                    <LabelContainer>
                        <Storefront style={{ fontSize: FONTSIZE.medium, marginRight: '1rem' }} />
                        <NameWrapper>Titan Badminton Store</NameWrapper>
                    </LabelContainer>
                }
            />
        </Container>
    );
}
