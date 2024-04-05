import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';

const brands = ['Yonex', 'Felet', 'Apecs', 'Li-Ning', 'Victor', 'Maxx', 'Alpsport'];

const NavBar = styled.div`
    float: left;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: ${FONTSIZE.small};
`;

const Filter = styled.div`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    margin-bottom: 25px;
`;

const FilterBy = styled.div`
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const Brand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const BrandItem = styled.div``;

const MoreLessButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 0;
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Range = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

const Input = styled.input`
    width: 80px;
    height: 35px;
    flex-shrink: 0;
    align-items: center;
    ::placeholder {
        text-align: center;
    }
`;

const ShortHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.darkGrey};
    width: 100%;
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.darkGrey};
    width: 100%;
`;

const BtnApply = styled.button`
    background-color: ${COLORS.green};
    border: none;
    color: ${COLORS.white};
    height: 40px;
    width: 100%;
    cursor: pointer;
`;

const Rate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

function handleClick() {}

export default function SideNav() {
    const [showAllBrands, setShowAllBrands] = useState(false);

    const displayedBrands = showAllBrands ? brands : brands.slice(0, 5);

    return (
        <NavBar>
            <Filter>
                <p>FILTER BY</p>
            </Filter>
            <Brand>
                <FilterBy>
                    <p>Brands</p>
                </FilterBy>

                {brands.map((brand) => (
                    <BrandItem
                        key={brand}
                        style={{ display: displayedBrands.includes(brand) ? 'block' : 'none' }}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id={brand}
                                        name={brand}
                                        sx={{ padding: 0 }}
                                    />
                                }
                                label={brand}
                                sx={{ margin: 0 }}
                            />
                        </FormGroup>
                    </BrandItem>
                ))}

                <MoreLessButton onClick={() => setShowAllBrands(!showAllBrands)}>
                    {showAllBrands ? (
                        <>
                            <p>Less</p>
                            <KeyboardArrowUpIcon />
                        </>
                    ) : (
                        <>
                            <p>More</p>
                            <KeyboardArrowDownIcon />
                        </>
                    )}
                </MoreLessButton>
            </Brand>
            <StyledHr />
            <Price>
                <FilterBy>
                    <p>Price Range</p>
                </FilterBy>
                <Range>
                    <Input
                        type="number"
                        id="minPrice"
                        min="0"
                        max="1000"
                        step="50"
                        placeholder="RM MIN"
                    />
                    <ShortHr />
                    <Input
                        type="number"
                        id="maxPrice"
                        min="0"
                        max="10000"
                        step="50"
                        placeholder="RM MAX"
                    />
                </Range>
                <BtnApply onClick={handleClick}>APPLY NOW</BtnApply>
            </Price>
            <StyledHr />
            <Rate>
                <FilterBy>
                    <p>Rating</p>
                </FilterBy>
                {Array.from({ length: 5 }, (_, i) => 5 - i).map((rating) => (
                    <div
                        key={rating}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Checkbox sx={{ padding: 0 }} />
                        <Rating
                            name={`read-only-${rating}`}
                            value={rating}
                            readOnly
                        />
                    </div>
                ))}
            </Rate>
        </NavBar>
    );
}
