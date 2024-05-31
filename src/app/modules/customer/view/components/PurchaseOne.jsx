import styled from 'styled-components';
import PurchaseShop from './PurchaseShop';

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export default function PurchaseOne({ purchase }) {
    const createdDate = new Date(purchase.created);
    const shippedDate = new Date(createdDate);
    shippedDate.setDate(shippedDate.getDate() + 3);
    const displayShippedDate = shippedDate.toISOString().split('T')[0];

    const deliveredDate = new Date(createdDate);
    deliveredDate.setDate(deliveredDate.getDate() + 7);
    const displayDeliveredDate = deliveredDate.toISOString().split('T')[0];

    const productsByShop = Object.values(
        purchase.products.reduce((groups, product) => {
            const newGroups = { ...groups };
            if (!newGroups[product.shop]) {
                newGroups[product.shop] = { shop: product.shop, products: [] };
            }
            newGroups[product.shop].products.push(product);
            return newGroups;
        }, {}),
    );

    return (
        <All>
            {productsByShop.map((shop) => (
                <PurchaseShop
                    key={shop.shop}
                    shop={shop}
                    shippedDate={displayShippedDate}
                    deliveredDate={displayDeliveredDate}
                    purchase={purchase}
                />
            ))}
        </All>
    );
}
