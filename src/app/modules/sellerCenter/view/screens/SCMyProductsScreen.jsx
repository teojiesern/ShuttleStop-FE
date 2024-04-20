/* eslint-disable no-shadow */
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import useSCMyProducts from '../hooks/useSCMyProducts';
import SCEditProductsModal from '../modal/SCEditProductsModal';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr 2fr 2fr;
    gap: 3rem;
    align-items: center;
`;

const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ProductImage = styled.img`
    max-width: 5rem;
`;

export default function SCMyProductsScreen() {
    const [products, setProducts] = useState(null);
    const { getMyProducts } = useSCMyProducts();
    const { showModal, hideModal } = useModal();

    const onEditClicked = useCallback(
        (product) => {
            showModal({
                modal: (
                    <SCEditProductsModal
                        hideModal={hideModal}
                        cproducts={products}
                        csetProducts={setProducts}
                        cproductID={product.productID}
                        cproductName={product.productName}
                        cproductCategory={product.category}
                        cproductBrand={product.brand}
                        // cthumbnailFile={products.thumbnailFile}
                        // cproductImage1={products.productImage1}
                        // cproductImage2={products.productImage2}
                        // cproductImage3={products.productImage3}
                        // cproductImage4={products.productImage4}
                        cproductDescription={product.description}
                        cvariants={product.variants}
                    />
                ),
                cmaxWidth: 'xl',
            });
        },
        [hideModal, products, showModal],
    );

    useEffect(() => {
        getMyProducts().then((data) => {
            setProducts(data.products);
        });
    }, [getMyProducts]);

    if (products === null) {
        // TODO: Implement loading state
        return <p>loading...</p>;
    }

    return (
        <Container>
            <SCReusableStyles.BorderContainer>
                <Layout>
                    <SCReusableStyles.Text>Product(s)</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Color</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Price</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Stock</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Sales</SCReusableStyles.Text>
                    <SCReusableStyles.Text>Action</SCReusableStyles.Text>
                </Layout>
            </SCReusableStyles.BorderContainer>

            <SCReusableStyles.BorderContainer>
                {products.map((product, index) => (
                    <div key={product.productID}>
                        <Layout>
                            {product.variants.flatMap((variant, index) => [
                                index === 0 ? (
                                    <ProductContainer>
                                        <ProductImage src={product.thumbnailImage} />
                                        <SCReusableStyles.Text>{product.productName}</SCReusableStyles.Text>
                                    </ProductContainer>
                                ) : (
                                    <div key={variant} />
                                ),
                                <SCReusableStyles.Text key={variant.color}>{variant.color}</SCReusableStyles.Text>,
                                <SCReusableStyles.Text key={variant.color}>{variant.price}</SCReusableStyles.Text>,
                                <SCReusableStyles.Text key={variant.color}>{variant.totalStock}</SCReusableStyles.Text>,
                                <SCReusableStyles.Text key={variant.color}>{variant.totalSales}</SCReusableStyles.Text>,
                                index === 0 ? (
                                    <SCReusableStyles.Text
                                        style={{ color: COLORS['semantic-blue'], cursor: 'pointer' }}
                                        onClick={() => onEditClicked(product)}
                                    >
                                        Edit
                                    </SCReusableStyles.Text>
                                ) : (
                                    <div key={variant.color} />
                                ),
                            ])}
                        </Layout>
                        {index !== products.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
