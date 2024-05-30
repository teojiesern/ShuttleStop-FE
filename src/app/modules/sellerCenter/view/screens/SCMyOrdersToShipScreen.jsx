import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import Skeleton from '../../../../platform/components/skeleton/Skeleton';
import CrossedModal from '../../../../platform/modal/CrossedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import EmptyState from '../assets/emptyState.svg';
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
    grid-template-columns: 1fr 5fr 2fr 2fr 2fr;
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

export default function SCMyOrdersToShipScreen() {
    const [orders, setOrders] = useState(null);
    const [checkedOrders, setCheckedOrders] = useState([]);
    const [checkedAll, setCheckedAll] = useState(false);
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
            setCheckedAll((prevCheckedAll) => !prevCheckedAll);
            setCheckedOrders(() => {
                if (event.target.checked) {
                    return orders.map((order) => order.trackingNumber);
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

        const shipAndUpdateOrders = async () => {
            try {
                await shipOrders(checkedOrders);
                setOrders((prevOrders) => prevOrders.filter((order) => !checkedOrders.includes(order.trackingNumber)));
                setCheckedOrders([]);
                setCheckedAll(false);
            } catch (error) {
                showModal({
                    modal: (
                        <CrossedModal
                            title="We weren't able to ship the products"
                            description="We are aware of this problem and are trying our best to fix it"
                        />
                    ),
                });
            }
        };

        showModal({
            modal: (
                <CourierSelectionModal
                    hideModal={hideModal}
                    shipOrders={shipAndUpdateOrders}
                    activeCourierOptions={shopSupportedCourierOption}
                />
            ),
        });
    }, [checkedOrders, showModal, hideModal, shopSupportedCourierOption, shipOrders]);

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
                    <Checkbox
                        onChange={handleAllCheckChange}
                        checked={checkedAll}
                    />
                    <SCReusableStyles.Text>Product(s)</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Tracking Number</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Buyer</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Shipping Option</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer style={{ justifyContent: 'center' }}>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div
                            key={`${order.orderID},${order.productId}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <Layout onClick={() => handleOrderClick(order.trackingNumber)}>
                                <Checkbox checked={checkedOrders.includes(order.trackingNumber)} />
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
                                <SCReusableStyles.Text>{order.trackingNumber}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{order.buyer}</SCReusableStyles.Text>
                                <SCReusableStyles.Text>{order.shippingOption}</SCReusableStyles.Text>
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
                        <SCReusableStyles.Text>No orders to ship, come back later</SCReusableStyles.Text>
                    </EmptyStateContainer>
                )}
            </SCReusableStyles.BorderContainer>

            {orders.length > 0 && (
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
            )}
        </Container>
    );
}
