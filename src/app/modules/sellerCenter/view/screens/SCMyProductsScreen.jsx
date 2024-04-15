import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useSCMyProducts from '../hooks/useSCMyProducts';
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
    // const { showModal, hideModal } = useModal();

    // const onEditClicked = useCallback(() => {
    //     showModal({
    //         modal: (
    //             <CourierSelectionModal
    //                 hideModal={hideModal}
    //                 shipOrders={shipOrders}
    //                 activeCourierOptions={activeCourierOptions}
    //             />
    //         ),
    //     });
    // }, [hideModal, showModal]);

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
                            <ProductContainer>
                                <ProductImage src={product.thumbnailImage} />
                                <SCReusableStyles.Text>{product.productName}</SCReusableStyles.Text>
                            </ProductContainer>
                            <SCReusableStyles.Text>{product.color}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{product.price}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{product.stock}</SCReusableStyles.Text>
                            <SCReusableStyles.Text>{product.sales}</SCReusableStyles.Text>
                            <SCReusableStyles.Text style={{ color: COLORS['semantic-blue'], cursor: 'pointer' }}>
                                Edit
                            </SCReusableStyles.Text>
                        </Layout>
                        {index !== products.length - 1 && <SCReusableStyles.Divider />}
                    </div>
                ))}
            </SCReusableStyles.BorderContainer>
        </Container>
    );
}
