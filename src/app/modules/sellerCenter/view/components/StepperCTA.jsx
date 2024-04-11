import { Button } from '@mui/material';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function StepperCTA({ activeStep, setActiveStep }) {
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
                onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
                style={{ backgroundColor: COLORS.green, color: COLORS.white }}
            >
                next
            </Button>
        </Container>
    );
}
