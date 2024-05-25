/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from '@mui/material';
import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import CustomSwitch from '../../../../platform/components/control/CustomSwitch';
import TickedModal from '../../../../platform/modal/TickedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import { CourierOptions, PaymentOptions, ShippingOptions } from '../../constants/SellerCenterConstants';
import useSCShippingSettings from '../hooks/useSCShippingSettings';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.grey};
`;

export default function SCShippingSettingsScreen() {
    const { shopSupportedCourierOption, shopSupportedPaymentOption, shopSupportedShippingOption } =
        useContext(ShopInfoContext);
    const [courierOptions, setCourierOptions] = useState(shopSupportedCourierOption);
    const [shippingOptions, setShippingOptions] = useState(shopSupportedShippingOption);
    const [paymentOptions, setPaymentOptions] = useState(shopSupportedPaymentOption);
    const { updateShippingSettings } = useSCShippingSettings();
    const { showModal, hideModal } = useModal();

    const handleCourierOptionsClick = useCallback((courierOption) => {
        setCourierOptions((prevCourierOptions) => {
            if (prevCourierOptions.includes(courierOption)) {
                // uncheck logic
                return prevCourierOptions.filter((prevCourierOption) => prevCourierOption !== courierOption);
            }
            return [...prevCourierOptions, courierOption];
        });
    }, []);

    const handleShippingOptionsClick = useCallback((shippingOption) => {
        setShippingOptions((prevShippingOptions) => {
            if (prevShippingOptions.includes(shippingOption)) {
                // uncheck logic
                return prevShippingOptions.filter((prevShippingOption) => prevShippingOption !== shippingOption);
            }
            return [...prevShippingOptions, shippingOption];
        });
    }, []);

    const handlePaymentOptionsClick = useCallback((paymentOption) => {
        setPaymentOptions((prevPaymentOptions) => {
            if (prevPaymentOptions.includes(paymentOption)) {
                // uncheck logic
                return prevPaymentOptions.filter((prevPaymentOption) => prevPaymentOption !== paymentOption);
            }
            return [...prevPaymentOptions, paymentOption];
        });
    }, []);

    const onSaveClick = useCallback(async () => {
        await updateShippingSettings({ courierOptions, paymentOptions, shippingOptions });
        showModal({ modal: <TickedModal title="Shop Settings updated successfully!" /> });
        setTimeout(() => {
            hideModal();
        }, 3500);
    }, [courierOptions, hideModal, paymentOptions, shippingOptions, showModal, updateShippingSettings]);

    return (
        <Container>
            <ContentContainer>
                <Title>Courier Options</Title>
                <SCReusableStyles.BorderContainer>
                    {Object.values(CourierOptions).map((courier, index) => (
                        <div
                            key={courier}
                            style={{ cursor: 'pointer', width: '100%' }}
                            onClick={() => handleCourierOptionsClick(courier)}
                        >
                            <Layout>
                                <SCReusableStyles.Text>{courier}</SCReusableStyles.Text>
                                <CustomSwitch checked={courierOptions.includes(courier)} />
                            </Layout>
                            {index !== Object.keys(CourierOptions).length - 1 && <SCReusableStyles.Divider />}
                        </div>
                    ))}
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
            <Divider />
            <ContentContainer>
                <Title>Shipping Options</Title>
                <SCReusableStyles.BorderContainer>
                    {Object.values(ShippingOptions).map((shippingOption, index) => (
                        <div
                            key={shippingOption}
                            style={{ cursor: 'pointer', width: '100%' }}
                            onClick={() => handleShippingOptionsClick(shippingOption)}
                        >
                            <Layout>
                                <SCReusableStyles.Text>{shippingOption}</SCReusableStyles.Text>
                                <CustomSwitch checked={shippingOptions.includes(shippingOption)} />
                            </Layout>
                            {index !== Object.keys(ShippingOptions).length - 1 && <SCReusableStyles.Divider />}
                        </div>
                    ))}
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
            <Divider />
            <ContentContainer>
                <Title>Payment Options</Title>
                <SCReusableStyles.BorderContainer>
                    {Object.values(PaymentOptions).map((paymentOption, index) => (
                        <div
                            key={paymentOption}
                            style={{ cursor: 'pointer', width: '100%' }}
                            onClick={() => handlePaymentOptionsClick(paymentOption)}
                        >
                            <Layout>
                                <SCReusableStyles.Text>{paymentOption}</SCReusableStyles.Text>
                                <CustomSwitch checked={paymentOptions.includes(paymentOption)} />
                            </Layout>
                            {index !== Object.keys(ShippingOptions).length - 1 && <SCReusableStyles.Divider />}
                        </div>
                    ))}
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
            <ContentContainer style={{ alignItems: 'flex-end' }}>
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '.5rem 1rem' }}
                    onClick={onSaveClick}
                >
                    Save
                </Button>
            </ContentContainer>
        </Container>
    );
}
