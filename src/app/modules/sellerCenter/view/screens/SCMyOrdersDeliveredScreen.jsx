import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../../../../platform/components/skeleton/Skeleton';
import EmptyState from '../assets/emptyState.svg';
import useSCMyOrdersDelivered from '../hooks/useSCMyOrdersDelivered';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1.5fr 1.5fr 1.5fr 1.5fr;
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

export default function SCMyOrdersDeliveredScreen() {
    const [orders, setOrders] = useState(null);
    const { getDeliveredOrders } = useSCMyOrdersDelivered();

    useEffect(() => {
        getDeliveredOrders().then((data) => {
            setOrders(data);
        });
    }, [getDeliveredOrders]);

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
                <Layout>
                    <SCReusableStyles.Text>Product(s)</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Buyer</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Shipping Option</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Tracking Number</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Status</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer style={{ justifyContent: 'center' }}>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div key={order.orderID}>
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
                                <SCReusableStyles.Text>{order.buyer}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{order.shippingOption}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{order.trackingNumber}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{order.shippingStatus}</SCReusableStyles.Text>
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
                        <SCReusableStyles.Text>No orders that are shipping, come back later</SCReusableStyles.Text>
                    </EmptyStateContainer>
                )}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
