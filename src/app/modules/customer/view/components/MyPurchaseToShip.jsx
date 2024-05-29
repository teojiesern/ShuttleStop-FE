import { useContext } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import PurchasesContext from '../../context/PurchaseContext';
import PurchaseOne from './PurchaseOne';

const BorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
    gap: 1rem;
`;

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`;

export default function MyPurchaseToShip() {
    const { ToShipPurchases } = useContext(PurchasesContext);

    if (ToShipPurchases.length === 0) {
        return (
            <BorderContainer>
                <All>
                    <p>No items to ship</p>
                </All>
            </BorderContainer>
        );
    }
    return (
        <All>
            {ToShipPurchases.map((purchase) => (
                <PurchaseOne
                    key={purchase.orderId}
                    purchase={purchase}
                />
            ))}
        </All>
    );
}
