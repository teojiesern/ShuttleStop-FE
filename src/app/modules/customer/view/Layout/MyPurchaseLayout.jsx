import { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PurchasesContext from '../../context/PurchaseContext';
import SellerCenterSideNav from '../components/MyAccountSideNav';
import MyPurchaseHeader from '../components/MyPurchaseHeader';
import useCustomer from '../hooks/useCustomer';

const Container = styled.div`
    display: flex;
    margin-top: 1.5rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const ContentHeader = styled.h1`
    font-size: ${FONTSIZE['x-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function MyPurchaseLayout() {
    const { getToShipPurchases, getShippingPurchases, getCompletedPurchases } = useCustomer();
    const [ToShipPurchases, setToShipPurchases] = useState([]);
    const [ShippingPurchases, setShippingPurchases] = useState([]);
    const [CompletedPurchases, setCompletedPurchases] = useState([]);
    const [StatusChange, setStatusChange] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const purchasesToShip = await getToShipPurchases();
                setToShipPurchases(purchasesToShip);
                const purchasesShipping = await getShippingPurchases();
                setShippingPurchases(purchasesShipping);
                const purchasesCompleted = await getCompletedPurchases();
                setCompletedPurchases(purchasesCompleted);
                setStatusChange(false);
            } catch (error) {
                console.log(error);
            }
        }
        if (StatusChange) {
            fetchData();
        }
    }, [
        setToShipPurchases,
        setShippingPurchases,
        setCompletedPurchases,
        setStatusChange,
        getToShipPurchases,
        getShippingPurchases,
        getCompletedPurchases,
        StatusChange,
    ]);

    const value = useMemo(
        () => ({
            ToShipPurchases,
            ShippingPurchases,
            CompletedPurchases,
            StatusChange,
            setStatusChange,
        }),
        [ToShipPurchases, ShippingPurchases, CompletedPurchases, StatusChange],
    );

    return (
        <Container>
            <SellerCenterSideNav />
            <PurchasesContext.Provider value={value}>
                <ContentContainer>
                    <ContentHeader>My Purchase</ContentHeader>
                    <MyPurchaseHeader />
                    <Outlet />
                </ContentContainer>
            </PurchasesContext.Provider>
        </Container>
    );
}
