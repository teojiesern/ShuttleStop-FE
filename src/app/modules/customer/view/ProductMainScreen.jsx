import { useMemo, useState } from 'react';
import styled from 'styled-components';
import FilterContext from './FilterContext';
import ProductBrowsing from './ProductBrowsing';
import SideNav from './SideNav';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const Content = styled.div`
    margin-left: 250px;
    padding-left: 50px;
`;

const Navbar = styled.div`
    margin-top: 55px;
    float: left;
    width: 250px;
`;

export default function ProductMainScreen() {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedRate, setSelectedRate] = useState(0);
    const [showAllBrands, setShowAllBrands] = useState(true);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [tempMinPrice, setTempMinPrice] = useState('');
    const [tempMaxPrice, setTempMaxPrice] = useState('');

    const value = useMemo(
        () => ({
            showAllBrands,
            setShowAllBrands,
            selectedRate,
            setSelectedRate,
            selectedBrands,
            setSelectedBrands,
            maxPrice,
            setMaxPrice,
            minPrice,
            setMinPrice,
            tempMinPrice,
            setTempMinPrice,
            tempMaxPrice,
            setTempMaxPrice,
        }),
        [showAllBrands, selectedRate, selectedBrands, minPrice, maxPrice, tempMinPrice, tempMaxPrice],
    );

    return (
        <Wrapper>
            <FilterContext.Provider value={value}>
                <Navbar>
                    <SideNav />
                </Navbar>
                <Content>
                    <ProductBrowsing />
                </Content>
            </FilterContext.Provider>
        </Wrapper>
    );
}
