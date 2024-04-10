import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import FilterContext from './FilterContext';

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

const ShortHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.darkGrey};
    width: 20px;
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

export default function SideNav() {
    const brands = ['Yonex', 'Felet', 'Apecs', 'Li-Ning', 'Victor', 'Maxx', 'Alpsport'];

    const {
        showAllBrands,
        setShowAllBrands,
        selectedRate,
        setSelectedRate,
        selectedBrands,
        setSelectedBrands,
        setMinPrice,
        setMaxPrice,
        tempMinPrice,
        setTempMinPrice,
        tempMaxPrice,
        setTempMaxPrice,
    } = useContext(FilterContext);

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
                    <div
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
                                // unchecked the checkbox when selectedBrands reset
                                checked={selectedBrands.includes(brand)}
                                label={brand}
                                sx={{ margin: 0 }}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        setSelectedBrands((prevBrands) => [...prevBrands, brand]);
                                    } else {
                                        setSelectedBrands((prevBrands) => prevBrands.filter((b) => b !== brand));
                                    }
                                }}
                            />
                        </FormGroup>
                    </div>
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
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    display={{ xs: 'none', sm: 'flex' }}
                    alignItems="center"
                >
                    <TextField
                        id="outlined-basic"
                        label="RM MIN"
                        variant="outlined"
                        size="small"
                        style={{ width: '100px' }}
                        value={tempMinPrice !== '' ? tempMinPrice : ''}
                        onChange={(event) => setTempMinPrice(event.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />

                    <ShortHr />
                    <TextField
                        id="outlined-basic"
                        label="RM MAX"
                        variant="outlined"
                        size="small"
                        style={{ width: '100px' }}
                        value={tempMaxPrice !== '' ? tempMaxPrice : ''}
                        onChange={(event) => setTempMaxPrice(event.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </Box>
                <BtnApply
                    onClick={() => {
                        if (tempMinPrice === '' || tempMaxPrice === '') {
                            setMinPrice(0);
                            setMaxPrice(0);
                        } else {
                            setMinPrice(tempMinPrice);
                            setMaxPrice(tempMaxPrice);
                        }
                    }}
                >
                    APPLY NOW
                </BtnApply>
            </Price>
            <StyledHr />
            <Rate>
                <FilterBy>
                    <p>Rating</p>
                </FilterBy>
                <RadioGroup
                    aria-label="rating"
                    name="rating"
                    value={selectedRate}
                    onChange={(event) => setSelectedRate(Number(event.target.value))}
                >
                    {Array.from({ length: 5 }, (_, i) => 5 - i).map((rating) => (
                        <FormControlLabel
                            key={rating}
                            value={rating}
                            control={<Radio sx={{ padding: 0 }} />}
                            label={
                                <Rating
                                    name={`read-only-${rating}`}
                                    value={rating}
                                    readOnly
                                />
                            }
                            sx={{ margin: 0 }}
                        />
                    ))}
                </RadioGroup>
            </Rate>
        </NavBar>
    );
}
