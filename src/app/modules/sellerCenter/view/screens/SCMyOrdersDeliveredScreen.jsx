import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    grid-template-columns: 5fr 1fr 2fr 2fr 2fr 2fr;
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

export default function SCMyOrdersDeliveredScreen() {
    const [orders, setOrders] = useState(null);
    const { getDeliveredOrders } = useSCMyOrdersDelivered();

    useEffect(() => {
        getDeliveredOrders().then((data) => {
            setOrders(data.orders);
        });
    }, [getDeliveredOrders]);

    if (orders === null) {
        // TODO: Implement loading state
        return <p>loading...</p>;
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
                                <OrderImage src={orders[index].productImage} />
                                <OrderDescriptionContainer>
                                    <SCReusableStyles.Text>{orders[index].productName}</SCReusableStyles.Text>
                                    <SCReusableStyles.TextDescription>
                                        {orders[index].productDescription}
                                    </SCReusableStyles.TextDescription>
                                    <SCReusableStyles.Text>{orders[index].quantity}</SCReusableStyles.Text>
                                </OrderDescriptionContainer>
                            </OrdersContainer>
                            <SCReusableStyles.Text>{orders[index].orderID}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{orders[index].buyer}</SCReusableStyles.Text>
                            <div>
                                <SCReusableStyles.Text>{orders[index].shippingOption}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{orders[index].courier}</SCReusableStyles.Text>
                            </div>
                            <SCReusableStyles.Text>{orders[index].trackingNumber}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{orders[index].shippingStatus}</SCReusableStyles.Text>
                        </Layout>
                        {index !== orders.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
