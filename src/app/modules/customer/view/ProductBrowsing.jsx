import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import products from '../assets/ProductList2';
import Product from './Product';
import SideNav from './SideNav';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const Content = styled.div`
    margin-left: 250px;
    padding-left: 50px;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    gap: 15px;
`;

const Navbar = styled.div`
    margin-top: 55px;
    float: left;
    width: 250px;
`;

const Sort = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    margin-bottom: 15px;
`;

const StyledSelect = styled.select`
    padding: 5px;
    height: 40px;
`;

export default function ProductBrowsing() {
    const location = useLocation();
    const pathnames = location.pathname.split('/');

    const category = pathnames[pathnames.length - 1];

    // use find instead filter because only one product is expected for mock, all things will change after with be
    const productDisplay = products.filter((p) => p.category === category);

    let counter = 0;

    const handleSortChange = () => {};

    return (
        <Wrapper>
            <Navbar>
                <SideNav />
            </Navbar>
            <Content>
                <Sort>
                    <p>Sort by:</p>
                    <StyledSelect onChange={handleSortChange}>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </StyledSelect>
                </Sort>
                <ProductGrid key={category}>
                    {productDisplay &&
                        Array(10)
                            .fill()
                            .map(() => {
                                counter += 1;
                                return (
                                    <Product
                                        key={`${productDisplay[0].id}-copy-${counter}`} // just to get all different key
                                        id={productDisplay[0].id}
                                        imgSrc={productDisplay[0].imgSrc}
                                        name={productDisplay[0].name}
                                        price={productDisplay[0].price}
                                    />
                                );
                            })}
                </ProductGrid>
            </Content>
        </Wrapper>
    );
}
