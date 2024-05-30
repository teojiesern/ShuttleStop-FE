import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import useSCMyIncome from '../hooks/useSCMyIncome';
import SCBankAccountDetailsModal from '../modal/SCBankAccountDetailsModal';
import SCWithdrawMoneyModal from '../modal/SCWithdrawMoneyModal';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HeaderLayout = styled.div`
    display: grid;
    grid-template-columns: 5fr 0.1fr 3fr;
    gap: 1rem;
    align-items: center;
    margin: 1rem;
`;

const VerticalDivider = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${COLORS.darkGrey};
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const TotalAmount = styled.h2`
    font-size: ${FONTSIZE['xx-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 5fr 2.5fr 2fr 2fr 1.5fr;
    gap: 3rem;
    align-items: center;
`;

const OrdersContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const OrderDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const OrderImage = styled.img`
    max-width: 5rem;
`;

export default function SCMyIncomeScreen() {
    const [orders, setOrders] = useState(null);
    const { bankInformation, getPreviousOrders, totalAmount, updateBankInformation, withdrawMoney } = useSCMyIncome();
    const { showModal, hideModal } = useModal();

    const handleWithdraw = useCallback(() => {
        showModal({
            modal: bankInformation ? (
                <SCWithdrawMoneyModal
                    totalAmount={totalAmount}
                    bankInformation={bankInformation}
                    hideModal={hideModal}
                    withdrawMoney={withdrawMoney}
                />
            ) : (
                <SCBankAccountDetailsModal
                    bankInformation={bankInformation}
                    hideModal={hideModal}
                    updateBankInformation={updateBankInformation}
                />
            ),
        });
    }, [bankInformation, hideModal, showModal, totalAmount, updateBankInformation, withdrawMoney]);

    const handleChangeBankInformation = useCallback(() => {
        showModal({
            modal: (
                <SCBankAccountDetailsModal
                    bankInformation={bankInformation}
                    hideModal={hideModal}
                    updateBankInformation={updateBankInformation}
                />
            ),
        });
    }, [bankInformation, hideModal, showModal, updateBankInformation]);

    useEffect(() => {
        getPreviousOrders().then((data) => {
            setOrders(data);
        });
    }, [getPreviousOrders]);

    if (orders === null) {
        // TODO: Implement loading state
        return <p>loading...</p>;
    }

    return (
        <Container>
            <SCReusableStyles.BorderContainer>
                <HeaderLayout>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Title>Total Amount</Title>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <TotalAmount>RM{totalAmount ?? 0.0}</TotalAmount>
                            <Button
                                style={PlatformReusableStyles.PrimaryButtonStyles}
                                onClick={handleWithdraw}
                            >
                                Withdraw
                            </Button>
                        </div>
                    </div>
                    <VerticalDivider />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Title>My Bank Account</Title>
                            <SCReusableStyles.Text
                                style={{ color: COLORS['semantic-blue'], cursor: 'pointer' }}
                                onClick={handleChangeBankInformation}
                            >
                                Change
                            </SCReusableStyles.Text>
                        </div>
                        {bankInformation ? (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <img
                                        src={bankInformation.bankIcon}
                                        alt={bankInformation.bankName}
                                    />
                                    <SCReusableStyles.Text>{bankInformation.bankName}</SCReusableStyles.Text>
                                </div>
                                <SCReusableStyles.Text>{bankInformation.accountNumber}</SCReusableStyles.Text>
                            </div>
                        ) : (
                            <SCReusableStyles.Text>No Bank Information, fill in one now</SCReusableStyles.Text>
                        )}
                    </div>
                </HeaderLayout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer>
                <Layout>
                    <SCReusableStyles.Text>Order</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Order ID</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Date</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Payment Method</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Amount</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer>
                {orders.map((order, index) => (
                    <div key={order.orderId}>
                        <Layout>
                            <OrdersContainer>
                                <OrderImage src={order.productImage} />
                                <OrderDescriptionContainer>
                                    <SCReusableStyles.Text>{order.productName}</SCReusableStyles.Text>
                                    <SCReusableStyles.TextDescription>
                                        {order.productDescription}
                                    </SCReusableStyles.TextDescription>
                                    <SCReusableStyles.Text>{order.quantity}</SCReusableStyles.Text>
                                </OrderDescriptionContainer>
                            </OrdersContainer>
                            <SCReusableStyles.Text>{order.orderId}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.date}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.paymentMethod}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.amount}</SCReusableStyles.Text>
                        </Layout>
                        {index !== orders.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
