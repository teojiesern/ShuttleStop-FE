import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useCustomer from '../hooks/useCustomer';

const Container = styled.div`
    display: flex;
    width: 98%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 8px;
`;

const Product = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`;

const TextGrey = styled.p`
    color: ${COLORS.darkGrey};
`;

export default function PurchaseItem({ product }) {
    const { getProductById } = useCustomer();
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        const fetchProductInfo = async () => {
            const info = await getProductById(product.product);
            setProductInfo(info);
        };

        fetchProductInfo();
    }, [getProductById, product]);

    return (
        <Container>
            <Product>
                <img
                    src={productInfo ? productInfo.thumbnailImage : ''}
                    alt="product"
                    width={50}
                />
                <ProductInfo>
                    <p>{productInfo ? productInfo.name : 'product'}</p>
                    <TextGrey>{product.selectedVariant}</TextGrey>
                    <p>x{product.quantity}</p>
                </ProductInfo>
            </Product>
            <p>RM{product.selectedVariantPrice}</p>
        </Container>
    );
}
