import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../../../../platform/components/skeleton/Skeleton';
import useSCMyOrdersShipping from '../hooks/useSCMyOrdersShipping';
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
    grid-template-columns: 5fr 3fr 1.5fr 1.5fr 1.5fr 1.5fr;
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

export default function SCMyOrdersShippingScreen() {
    const [orders, setOrders] = useState(null);
    const { getShippingOrders } = useSCMyOrdersShipping();

    useEffect(() => {
        getShippingOrders().then((data) => {
            setOrders(data);
        });
    }, [getShippingOrders]);

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
                    <SCReusableStyles.Text>Order ID</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Buyer</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Shipping Option</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Tracking Number</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Status</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer>
                {orders.map((order, index) => (
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
                            <SCReusableStyles.Text>{order.orderID}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.buyer}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.shippingOption}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.trackingNumber}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{order.shippingStatus}</SCReusableStyles.Text>
                        </Layout>
                        {index !== orders.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
