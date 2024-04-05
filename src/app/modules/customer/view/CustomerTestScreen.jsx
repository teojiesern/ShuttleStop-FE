import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import products from '../../../platform/icons/ProductList2';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
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

export default function CustomerTestScreen() {
    const location = useLocation();
    const pathnames = location.pathname.split('/');

    let productId;

    let counter = 0;

    switch (pathnames[pathnames.length - 1]) {
        case 'racquets':
            productId = 1;
            break;
        case 'footwear':
            productId = 2;
            break;
        case 'apparel':
            productId = 3;
            break;
        case 'bags':
            productId = 4;
            break;
        case 'shuttlecocks':
            productId = 5;
            break;
        case 'accessories':
            productId = 6;
            break;
        default:
            productId = 1;
    }
    const productDisplay = products.find((p) => p.id === productId);

    const handleSortChange = () => {
        // const sortOrder = event.target.value;
        // Update your state or perform some other action based on sortOrder
    };

    return (
        <Wrapper>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Home
                </Link>
                <Typography color="text.primary">{capitalize(pathnames[pathnames.length - 1])}</Typography>
            </Breadcrumbs>
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
                <ProductGrid>
                    {productDisplay &&
                        Array(10)
                            .fill()
                            .map(() => {
                                counter += 1;
                                return (
                                    <Product
                                        key={`${productDisplay.id}-copy-${counter}`}
                                        id={productDisplay.id}
                                        imgSrc={productDisplay.imgSrc}
                                        name={productDisplay.name}
                                        price={productDisplay.price}
                                    />
                                );
                            })}
                </ProductGrid>
            </Content>
        </Wrapper>
    );
}
