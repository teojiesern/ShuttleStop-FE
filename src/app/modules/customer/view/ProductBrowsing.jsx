import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import products from '../assets/ProductList2';
import FilterContext from './FilterContext'; // replace './FilterContext' with the actual path to your FilterContext file
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

    const productDisplay = useMemo(() => products.filter((p) => p.category === category), [products, category]);
    let counter = 0;

    const {
        selectedRate,
        setSelectedRate,
        selectedBrands,
        setSelectedBrands,
        maxPrice,
        setMaxPrice,
        minPrice,
        setMinPrice,
        setTempMinPrice,
        setTempMaxPrice,
    } = useContext(FilterContext);

    const [filteredProducts, setFilteredProducts] = React.useState(productDisplay);

    useEffect(() => {
        // Reset filters when category changes
        setSelectedRate(0);
        setSelectedBrands([]);
        setMinPrice(0);
        setMaxPrice(0);
        setTempMinPrice('');
        setTempMaxPrice('');
    }, [category]);

    const [sort, setSort] = React.useState('');

    const [sortedProducts, setSortedProducts] = React.useState([]);

    useEffect(() => {
        setSortedProducts(filteredProducts);
    }, [filteredProducts]);

    useEffect(() => {
        // Apply filters to product list
        const newFilteredProducts = productDisplay.filter(
            (product) =>
                (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
                product.rate >= selectedRate &&
                (minPrice === 0 || product.price >= minPrice) &&
                (maxPrice === 0 || product.price <= maxPrice),
        );

        // Apply sort to filtered product list
        switch (sort) {
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
            default:
                break;
        }

        setFilteredProducts(newFilteredProducts);
    }, [productDisplay, selectedRate, selectedBrands, minPrice, maxPrice, sort]);

    const handleSortChange = (event) => {
        const sortOption = event.target.value;
        setSort(sortOption);
    };

    return (
        <div>
            <Sort>
                <p>Sort by:</p>
                <Select
                    id="select-sort"
                    value={sort}
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
                {sortedProducts.length === 0 ? (
                    <p>No product available</p>
                ) : (
                    sortedProducts.map((product) =>
                        Array(30)
                            .fill()
                            .map(() => {
                                counter += 1;
                                return (
                                    <Product
                                        key={`${product.id}-copy-${counter}`} // just to get all different key
                                        id={product.id}
                                        imgSrc={product.imgSrc}
                                        name={product.name}
                                        price={product.price}
                                    />
                                );
                            }),
                    )
                )}
            </ProductGrid>
        </div>
    );
}
