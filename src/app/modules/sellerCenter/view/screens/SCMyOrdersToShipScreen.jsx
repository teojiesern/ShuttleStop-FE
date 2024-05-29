import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import Skeleton from '../../../../platform/components/skeleton/Skeleton';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import useSCMyOrdersToShip from '../hooks/useSCMyOrdersToShip';
import CourierSelectionModal from '../modal/CourierSelectionModal';
import SCMyOrdersToShipErrorModal from '../modal/SCMyOrdersToShipErrorModal';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 4fr 2fr 2fr;
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

export default function SCMyOrdersToShipScreen() {
    const [orders, setOrders] = useState(null);
    const [checkedOrders, setCheckedOrders] = useState([]);
    const { getToShipOrders, shipOrders } = useSCMyOrdersToShip();
    const { showModal, hideModal } = useModal();
    const { shopSupportedCourierOption } = useContext(ShopInfoContext);

    const handleOrderClick = useCallback((uniqueIds) => {
        setCheckedOrders((prevCheckedOrders) => {
            if (prevCheckedOrders.includes(uniqueIds)) {
                // uncheck logic
                return prevCheckedOrders.filter((id) => id !== uniqueIds);
            }
            return [...prevCheckedOrders, uniqueIds];
        });
    }, []);

    const handleAllCheckChange = useCallback(
        (event) => {
            setCheckedOrders(() => {
                if (event.target.checked) {
                    return orders.map((order) => `${order.orderID},${order.productId}`);
                }
                return [];
            });
        },
        [orders],
    );

    const onMassShip = useCallback(() => {
        if (checkedOrders.length === 0) {
            showModal({
                modal: <SCMyOrdersToShipErrorModal hideModal={hideModal} />,
            });
            return;
        }
        showModal({
            modal: (
                <CourierSelectionModal
                    hideModal={hideModal}
                    shipOrders={shipOrders}
                    activeCourierOptions={shopSupportedCourierOption}
                />
            ),
        });
    }, [shopSupportedCourierOption, checkedOrders.length, hideModal, shipOrders, showModal]);

    useEffect(() => {
        getToShipOrders().then((data) => {
            setOrders(data);
        });
    }, [getToShipOrders]);

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
                    <Checkbox onChange={handleAllCheckChange} />
                    <SCReusableStyles.Text>Product(s)</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Order ID</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Buyer</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Shipping Option</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer>
                {orders.map((order, index) => (
                    <div
                        key={`${order.orderID},${order.productId}`}
                        style={{ cursor: 'pointer' }}
                    >
                        <Layout onClick={() => handleOrderClick(`${order.orderID},${order.productId}`)}>
                            <Checkbox checked={checkedOrders.includes(`${order.orderID},${order.productId}`)} />
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
                        </Layout>
                        {index !== orders.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    style={{
                        ...PlatformReusableStyles.PrimaryButtonStyles,
                        fontSize: FONTSIZE.small,
                    }}
                    onClick={onMassShip}
                >
                    Mass Ship
                </Button>
            </div>
        </Container>
    );
}
