import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import CustomSwitch from '../../../../platform/components/control/CustomSwitch';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import { Courier, ShippingMethods } from '../../constants/SellerCenterConstants';
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
    return (
        <Container>
            <ContentContainer>
                <Title>Standard Delivery</Title>
                <SCReusableStyles.BorderContainer>
                    {Object.values(Courier).map((courier, index) => (
                        <div
                            key={courier}
                            style={{ cursor: 'pointer', width: '100%' }}
                        >
                            <Layout>
                                <SCReusableStyles.Text>{courier}</SCReusableStyles.Text>
                                <CustomSwitch />
                            </Layout>
                            {index !== Object.keys(Courier).length - 1 && <SCReusableStyles.Divider />}
                        </div>
                    ))}
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
            <Divider />
            <ContentContainer>
                <Title>Other Shipping Methods</Title>
                <SCReusableStyles.BorderContainer>
                    {Object.values(ShippingMethods).map((method, index) => (
                        <div
                            key={method}
                            style={{ cursor: 'pointer', width: '100%' }}
                        >
                            <Layout>
                                <SCReusableStyles.Text>{method}</SCReusableStyles.Text>
                                <CustomSwitch />
                            </Layout>
                            {index !== Object.keys(ShippingMethods).length - 1 && <SCReusableStyles.Divider />}
                        </div>
                    ))}
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
        </Container>
    );
}
