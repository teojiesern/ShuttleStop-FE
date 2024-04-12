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
    const [filter, setFilter] = useState({
        selectedBrands: [],
        selectedRate: 0,
        showAllBrands: true,
        minPrice: 0,
        maxPrice: 0,
        tempMinPrice: '',
        tempMaxPrice: '',
        sort: '',
    });

    const value = useMemo(() => ({ filter, setFilter }), [filter]);

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
