/* eslint-disable no-nested-ternary */
import { useRef, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import { Steps } from '../../constants/SellerCenterConstants';
import RegistrationStepper from '../components/RegistrationStepper';
import SellerCenterRegisteredSuccessfully from '../components/SellerCenterRegisteredSuccessfully';
import SellerInformationRegistration from '../components/SellerInformationRegistration';
import ShopInformationRegistration from '../components/ShopInformationRegistration';
import StepperCTA from '../components/StepperCTA';
import useSCFormValidation from '../hooks/useSCFormValidation';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;

const FormContainer = styled.div`
    border: 1px solid ${COLORS.grey};
    padding: 3rem 5rem;
`;

const LineSeparator = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${COLORS.grey};
    margin: 2rem 0;
`;

export default function SellerCenterRegistrationScreen() {
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState({});
    const { validateSellerInfo, validateShopInfo } = useSCFormValidation();
    const steps = Object.values(Steps);

    // cache
    const registrationData = useRef({
        sellerName: '',
        sellerIC: '',
        shopName: '',
        pickupAddress: '',
        email: '',
        phoneNumber: '',
        files: [],
    });

    return (
        <Container>
            <FormContainer>
                <RegistrationStepper
                    activeStep={activeStep}
                    steps={steps}
                />
                <LineSeparator />
                {steps[activeStep] === Steps.SELLER_INFORMATION ? (
                    <SellerInformationRegistration
                        registrationData={registrationData}
                        errors={errors}
                        setErrors={setErrors}
                    />
                ) : steps[activeStep] === Steps.SHOP_INFORMATION ? (
                    <ShopInformationRegistration
                        registrationData={registrationData}
                        errors={errors}
                        setErrors={setErrors}
                    />
                ) : (
                    <SellerCenterRegisteredSuccessfully registrationData={registrationData} />
                )}
                {activeStep !== steps.length - 1 && (
                    <>
                        <LineSeparator />
                        <StepperCTA
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            errors={errors}
                            setErrors={setErrors}
                            validateSellerInfo={validateSellerInfo}
                            validateShopInfo={validateShopInfo}
                            sellerInfo={{
                                sellerName: registrationData.current.sellerName,
                                sellerIC: registrationData.current.sellerIC,
                            }}
                            shopInfo={{
                                shopName: registrationData.current.shopName,
                                pickupAddress: registrationData.current.pickupAddress,
                                email: registrationData.current.email,
                                phoneNumber: registrationData.current.phoneNumber,
                                files: registrationData.current.files,
                            }}
                        />
                    </>
                )}
            </FormContainer>
        </Container>
    );
}
