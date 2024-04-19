import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import COReusableStyles from '../styles/COReusableStyles';

const BottomBar = styled.div`
    position: relative;
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 84px;
    box-shadow: 0 0 10px ${COLORS.darkGrey};
    padding: 0.5rem 5rem;
`;
const Layout = styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
`;
const TotalCheckout = styled.span`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.green};
    text-align: center;
`;

export default function CheckoutBar({ totalItem }) {
    return (
        <BottomBar>
            <Layout>
                <FormControlLabel
                    control={<Checkbox />}
                    label={<COReusableStyles.Text>Select All</COReusableStyles.Text>}
                />
                <COReusableStyles.Text>Total Item: {totalItem} item(s)</COReusableStyles.Text>
                <TotalCheckout>RM729.00</TotalCheckout>
                <Button
                    component={Link}
                    to="checkoutScreen"
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                >
                    <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>CHECK OUT</p>
                </Button>
            </Layout>
        </BottomBar>
    );
}
