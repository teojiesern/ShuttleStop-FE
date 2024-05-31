import { Button } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import SellerInfoContext from '../../../../platform/app/data/SellerInfoContext';
import Skeleton from '../../../../platform/components/skeleton/Skeleton';
import CrossedModal from '../../../../platform/modal/CrossedModal';
import TickedModal from '../../../../platform/modal/TickedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import BankLists from '../../data/BankLists';
import EmptyState from '../assets/emptyState.svg';
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

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    max-height: 50%;
    gap: 2rem;
`;

const OrderImage = styled.img`
    max-width: 5rem;
`;

export default function SCMyIncomeScreen() {
    const { sellerId, sellerBankAccount, sellerBankAccountNumber, sellerNameInBankAccount, sellerTotalIncome } =
        useContext(SellerInfoContext);

    const [orders, setOrders] = useState(null);
    const [totalIncome, setTotalAmount] = useState(sellerTotalIncome.toFixed(2));
    const [bankInformation, setBankInformation] = useState(
        sellerBankAccount !== '' && sellerBankAccountNumber !== '' && sellerNameInBankAccount !== ''
            ? {
                  bankName: sellerBankAccount,
                  bankIcon: BankLists.find((bank) => bank.name === sellerBankAccount)?.icon,
                  accountNumber: sellerBankAccountNumber,
                  accountHolderName: sellerNameInBankAccount,
              }
            : null,
    );

    const { getPreviousOrders, updateSellerBankInformation, withdrawIncome } = useSCMyIncome();
    const { showModal, hideModal } = useModal();

    const updateBankInformation = useCallback(
        async (newBankInformation) => {
            try {
                const payload = {
                    sellerId,
                    bankAccount: newBankInformation.bankName,
                    accountNumber: newBankInformation.accountNumber,
                    nameInBankAccount: newBankInformation.accountHolderName,
                };
                const updatedBankInformation = await updateSellerBankInformation(payload);

                setBankInformation(updatedBankInformation);
                showModal({
                    modal: <TickedModal title="Bank information successfully updated" />,
                });
            } catch (error) {
                showModal({
                    modal: <CrossedModal title="Failed to update bank information" />,
                });
            }
        },
        [sellerId, showModal, updateSellerBankInformation],
    );

    const withdrawMoney = useCallback(
        async (withdrawalAmount) => {
            try {
                const payload = {
                    sellerId,
                    amount: withdrawalAmount,
                };
                const updatedIncome = await withdrawIncome(payload);

                setTotalAmount(updatedIncome.toFixed(2));
                showModal({
                    modal: (
                        <TickedModal
                            title="Withdrawal successful"
                            description="Treat yourself to a drink as a reward for all the hard work"
                        />
                    ),
                });
            } catch (error) {
                showModal({
                    modal: <CrossedModal title="Failed to update bank information" />,
                });
            }
        },
        [sellerId, showModal, withdrawIncome],
    );

    const handleWithdraw = useCallback(() => {
        showModal({
            modal: bankInformation ? (
                <SCWithdrawMoneyModal
                    totalAmount={totalIncome}
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
    }, [bankInformation, hideModal, showModal, totalIncome, updateBankInformation, withdrawMoney]);

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
        return (
            <div style={{ marginTop: '2rem' }}>
                <Skeleton />
            </div>
        );
    }

    return (
        <Container>
            <SCReusableStyles.BorderContainer>
                <HeaderLayout>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Title>Total Amount</Title>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <TotalAmount>RM{totalIncome ?? 0.0}</TotalAmount>
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

            <SCReusableStyles.BorderContainer style={{ justifyContent: 'center' }}>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
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
                    ))
                ) : (
                    <EmptyStateContainer>
                        <img
                            src={EmptyState}
                            height="200px"
                        />
                        <SCReusableStyles.Text>You have no orders for the previous month</SCReusableStyles.Text>
                    </EmptyStateContainer>
                )}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
