import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import COLORS from '../../../../platform/Colors';

export default function RegistrationStepper({ activeStep, steps }) {
    return (
        <Stepper
            activeStep={activeStep}
            sx={{
                '& .MuiStepConnector-line': {
                    width: '15vw',
                },
                '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
                    borderColor: COLORS.green,
                },
                '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
                    borderColor: COLORS.green,
                },
                '& .MuiStepIcon-root.Mui-active': {
                    color: COLORS.green,
                },
                '& .MuiStepIcon-root.Mui-completed': {
                    color: COLORS.green,
                },
            }}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
