import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import products from '../assets/ProductList2';
import FilterContext from '../context/FilterContext';
import Product from './Product';

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

export default function ProductBrowsing() {
    const location = useLocation();
    const pathnames = location.pathname.split('/');

    const category = pathnames[pathnames.length - 1];

    const [productDisplay, setProductDisplay] = useState(products);
    useEffect(() => {
        const newProductsDisplay = products.filter((p) => p.category === category);
        setProductDisplay(newProductsDisplay);
    }, [category]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const { filter, setFilter } = useContext(FilterContext);

    useEffect(() => {
        // Apply filters to product list
        const newFilteredProducts = productDisplay.filter(
            (product) =>
                (filter.selectedBrands.length === 0 || filter.selectedBrands.includes(product.brand)) &&
                product.rate >= filter.selectedRate &&
                (filter.minPrice === 0 || product.price >= filter.minPrice) &&
                (filter.maxPrice === 0 || product.price <= filter.maxPrice),
        );

        // Apply sort to filtered product list
        switch (filter.sort) {
            case 'price-asc':
                newFilteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                newFilteredProducts.sort((a, b) => b.price - a.price);
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
            <ProductGrid key={category}>
                {filteredProducts.length === 0 ? (
                    <p>No product available</p>
                ) : (
                    filteredProducts.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            imgSrc={product.imgSrc}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                        />
                    ))
                )}
            </ProductGrid>
        </div>
    );
}
