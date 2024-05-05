import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import FilterContext from '../context/FilterContext';
import WarnModal1 from './modal/WarnModal1';
import WarnModal2 from './modal/WarnModal2';

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

const Rate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function SideNav() {
    const brands = ['Yonex', 'Felet', 'Apacs', 'Li-Ning', 'Victor', 'Maxx', 'Alpsport'];

    const [showAllBrands, setShowAllBrands] = useState(false);
    const displayedBrands = showAllBrands ? brands : brands.slice(0, 5);
    const { filter, setFilter } = useContext(FilterContext);

    const { showModal, hideModal } = useModal();

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
                                checked={filter.selectedBrands.includes(brand)}
                                label={brand}
                                sx={{ margin: 0 }}
                                onChange={(event) => {
                                    setFilter((prevFilter) => {
                                        if (event.target.checked) {
                                            return {
                                                ...prevFilter,
                                                selectedBrands: [...prevFilter.selectedBrands, brand],
                                            };
                                        }
                                        return {
                                            ...prevFilter,
                                            selectedBrands: prevFilter.selectedBrands.filter((b) => b !== brand),
                                        };
                                    });
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
                        id="RM-MIN"
                        label="RM MIN"
                        variant="outlined"
                        size="small"
                        style={{ width: '100px' }}
                        value={filter.tempMinPrice !== '' ? filter.tempMinPrice : ''}
                        onChange={(event) =>
                            setFilter((prevFilter) => ({ ...prevFilter, tempMinPrice: event.target.value }))
                        }
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />

                    <ShortHr />
                    <TextField
                        id="RM_MAX"
                        label="RM MAX"
                        variant="outlined"
                        size="small"
                        style={{ width: '100px' }}
                        value={filter.tempMaxPrice !== '' ? filter.tempMaxPrice : ''}
                        onChange={(event) =>
                            setFilter((prevFilter) => ({ ...prevFilter, tempMaxPrice: event.target.value }))
                        }
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </Box>
                <Button
                    style={PlatformReusableStyles.PrimaryButtonStyles}
                    onClick={() => {
                        if (filter.tempMinPrice === '' || filter.tempMaxPrice === '') {
                            setFilter((prevFilter) => ({
                                ...prevFilter,
                                minPrice: 0,
                                maxPrice: Infinity,
                            }));

                            showModal({
                                modal: <WarnModal1 />,
                                disableBackdropDismiss: false,
                            });
                            setTimeout(() => {
                                hideModal();
                            }, 2000);
                        } else if (filter.tempMinPrice >= filter.tempMaxPrice) {
                            setFilter((prevFilter) => ({
                                ...prevFilter,
                                minPrice: 0,
                                maxPrice: Infinity,
                                tempMinPrice: '',
                                tempMaxPrice: '',
                            }));
                            showModal({
                                modal: <WarnModal2 />,
                                disableBackdropDismiss: false,
                            });
                            setTimeout(() => {
                                hideModal();
                            }, 2000);
                        } else {
                            setFilter((prevFilter) => ({
                                ...prevFilter,
                                minPrice: filter.tempMinPrice,
                                maxPrice: filter.tempMaxPrice,
                            }));
                        }
                    }}
                >
                    APPLY NOW
                </Button>
            </Price>
            <StyledHr />
            <Rate>
                <FilterBy>
                    <p>Rating</p>
                </FilterBy>
                <RadioGroup
                    aria-label="rating"
                    name="rating"
                    value={filter.selectedRate}
                    onChange={(event) =>
                        setFilter((prevFilter) => ({ ...prevFilter, selectedRate: event.target.value }))
                    }
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
