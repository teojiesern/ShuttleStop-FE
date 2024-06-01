import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import EmptyState from '../../sellerCenter/view/assets/emptyState.svg';
import FilterContext from '../context/FilterContext';
import Product from './Product';
import useCustomer from './hooks/useCustomer';

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    gap: 15px;
`;

const Sort = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    margin-bottom: 15px;
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

export default function ProductBrowsing() {
    const location = useLocation();
    const pathnames = location.pathname.split('/');
    const { getAllProducts } = useCustomer();
    const [allProducts, setAllProducts] = useState([]);
    const [productDisplay, setProductDisplay] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const products = await getAllProducts();
                setAllProducts(products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [setAllProducts, getAllProducts]);

    const category = pathnames[pathnames.length - 1];

    useEffect(() => {
        const newProductsDisplay = allProducts.filter((p) => p.category.toLowerCase() === category);
        setProductDisplay(newProductsDisplay);
    }, [category, allProducts]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const { filter, setFilter } = useContext(FilterContext);

    useEffect(() => {
        // Apply filters to product list
        const newFilteredProducts = productDisplay.filter(
            (product) =>
                (filter.selectedBrands.length === 0 || filter.selectedBrands.includes(product.brand)) &&
                (!filter.selectedRate || product.rate >= filter.selectedRate) &&
                (filter.minPrice === 0 || product.minPrice >= filter.minPrice) &&
                (filter.maxPrice === 0 || product.minPrice <= filter.maxPrice),
        );
        // Apply sort to filtered product list
        switch (filter.sort) {
            case 'price-asc':
                newFilteredProducts.sort((a, b) => a.minPrice - b.minPrice);
                break;
            case 'price-desc':
                newFilteredProducts.sort((a, b) => b.minPrice - a.minPrice);
                break;
            case 'name-asc':
                newFilteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                newFilteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case '':
                // no need to sort
                break;
            default:
                break;
        }
        setFilteredProducts(newFilteredProducts);
    }, [filter, productDisplay]);

    const handleSortChange = (event) => {
        const sortOption = event.target.value;
        setFilter((prevFilter) => ({ ...prevFilter, sort: sortOption }));
    };

    const PRODUCTS_PER_PAGE = 18;

    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo(0, 0);
    };

    // to reset page to 1 when category, filter and sort changes
    useEffect(() => {
        setPage(1);
    }, [category, filteredProducts]);

    const productsForCurrentPage = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

    return (
        <div>
            <Sort>
                <p>Sort by:</p>
                <Select
                    id="select-sort"
                    value={filter.sort}
                    onChange={handleSortChange}
                    sx={{ width: '200px' }}
                    displayEmpty
                >
                    <MenuItem
                        value=""
                        disabled
                    >
                        Default
                    </MenuItem>
                    <MenuItem value="price-asc">Price: Low to High</MenuItem>
                    <MenuItem value="price-desc">Price: High to Low</MenuItem>
                    <MenuItem value="name-asc">Name: A to Z</MenuItem>
                    <MenuItem value="name-desc">Name: Z to A</MenuItem>
                </Select>
            </Sort>
            <ProductGrid
                style={
                    productsForCurrentPage.length === 0
                        ? {
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '60vh',
                          }
                        : {}
                }
            >
                {productsForCurrentPage.length === 0 ? (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <EmptyStateContainer>
                            <img
                                src={EmptyState}
                                height="200px"
                            />
                            <p>No products uploaded so far, please come back later</p>
                        </EmptyStateContainer>
                    </div>
                ) : (
                    productsForCurrentPage.map((product) => (
                        <Product
                            key={product.productId}
                            id={product.productId}
                            thumbnail={product.thumbnailImage}
                            name={product.name}
                            price={product.minPrice}
                            category={product.category}
                        />
                    ))
                )}
            </ProductGrid>
            {productsForCurrentPage.length !== 0 && (
                <Pagination
                    count={Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                />
            )}
        </div>
    );
}
