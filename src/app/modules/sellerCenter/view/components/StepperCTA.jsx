import { Button } from '@mui/material';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function StepperCTA({
    activeStep,
    setActiveStep,
    setErrors,
    validateSellerInfo,
    validateShopInfo,
    sellerInfo,
    shopInfo,
}) {
    const handleNext = () => {
        let newErrors = {};

        if (activeStep === 0) {
            newErrors = validateSellerInfo(sellerInfo.sellerName, sellerInfo.sellerIC);
        } else if (activeStep === 1) {
            newErrors = validateShopInfo(
                shopInfo.shopName,
                shopInfo.pickupAddress,
                shopInfo.email,
                shopInfo.phoneNumber,
                shopInfo.files,
            );
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    return (
        <Container>
            <Button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
                style={
                    activeStep === 0
                        ? {
                              border: `1px solid ${COLORS.grey}`,
                              color: COLORS.grey,
                          }
                        : { border: `1px solid ${COLORS.green}`, color: COLORS.green }
                }
            >
                Back
            </Button>

            <Button
                onClick={handleNext}
                style={{ backgroundColor: COLORS.green, color: COLORS.white }}
            >
                next
            </Button>
        </Container>
    );
}
