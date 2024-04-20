import {
    Button,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@mui/material';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import DropBox from '../../../../platform/components/dropbox/DropBox';
import { ProductBrands, ProductCategories } from '../../../../platform/constants/PlatformConstants';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SectionTitle = styled.h2`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: left;
    display: inline-block;
    width: 200px;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.grey};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export default function SCAddNewProductsScreen() {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [thumbnailFile, setThumbnailFile] = useState([]);
    const [productImage1, setProductImage1] = useState([]);
    const [productImage2, setProductImage2] = useState([]);
    const [productImage3, setProductImage3] = useState([]);
    const [productImage4, setProductImage4] = useState([]);
    const [productDescription, setProductDescription] = useState('');
    const [variants, setVariants] = useState([
        {
            color: '',
            totalStock: 0,
            totalSales: 0,
            price: 0,
        },
    ]);
    const [colors, setColors] = useState(variants.map((variant) => variant.color));
    const [remainingStock, setRemainingStock] = useState(variants.map((variant) => variant.totalStock));
    const [price, setPrice] = useState(variants.map((variant) => variant.price));

    const onAddNewVariant = useCallback(() => {
        setVariants([
            ...variants,
            {
                color: '',
                totalStock: 0,
                totalSales: 0,
                price: 0,
            },
        ]);
        setColors([...colors, '']);
        setRemainingStock([...remainingStock, 0]);
        setPrice([...price, 0]);
    }, [colors, price, remainingStock, variants]);

    return (
        <Container>
            <SectionTitle>Product Information</SectionTitle>

            <ContentContainer style={{ alignItems: 'center' }}>
                <FormLabel>Product Name</FormLabel>
                <TextField
                    label="Enter your product name"
                    size="small"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    style={{ minWidth: '50%' }}
                />
            </ContentContainer>

            <ContentContainer style={{ alignItems: 'center' }}>
                <FormLabel>Category</FormLabel>
                <TextField
                    style={{ minWidth: '50%' }}
                    size="small"
                    select
                    value={ProductCategories[productCategory]}
                    onChange={(e) => setProductCategory(e.target.value)}
                >
                    {Object.keys(ProductCategories).map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
            </ContentContainer>

            <ContentContainer style={{ alignItems: 'center' }}>
                <FormLabel>Brands</FormLabel>
                <TextField
                    style={{ minWidth: '50%' }}
                    size="small"
                    select
                    value={ProductBrands[productBrand]}
                    onChange={(e) => setProductBrand(e.target.value)}
                >
                    {Object.keys(ProductBrands).map((brand) => (
                        <MenuItem
                            key={brand}
                            value={brand}
                        >
                            {brand}
                        </MenuItem>
                    ))}
                </TextField>
            </ContentContainer>

            <ContentContainer>
                <FormLabel>Thumbnail Image</FormLabel>
                <div style={{ minWidth: '50%' }}>
                    <DropBox
                        files={thumbnailFile}
                        setFiles={setThumbnailFile}
                    />
                </div>
            </ContentContainer>

            <ContentContainer>
                <FormLabel>Product Image</FormLabel>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem',
                    }}
                >
                    <DropBox
                        files={productImage1}
                        setFiles={setProductImage1}
                    />
                    <DropBox
                        files={productImage2}
                        setFiles={setProductImage2}
                    />
                    <DropBox
                        files={productImage3}
                        setFiles={setProductImage3}
                    />
                    <DropBox
                        files={productImage4}
                        setFiles={setProductImage4}
                    />
                </div>
            </ContentContainer>

            <ContentContainer>
                <FormLabel>Product Description</FormLabel>
                <TextField
                    size="small"
                    style={{ minWidth: '50%' }}
                    multiline
                    rows={6}
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </ContentContainer>

            <Divider />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <SectionTitle>Sales Information</SectionTitle>
                <Button
                    style={PlatformReusableStyles.OutlineButtonStyles}
                    onClick={onAddNewVariant}
                >
                    Add New Variant
                </Button>
            </div>
            <TableContainer>
                <Table
                    sx={{
                        '& .MuiTableCell-root': {
                            borderLeft: '1px solid rgba(224, 224, 224, 1)',
                        },
                        borderTop: '1px solid rgba(224, 224, 224, 1)',
                        borderRight: '1px solid rgba(224, 224, 224, 1)',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Colour</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Remaining Stock</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {variants.map((variant, i) => (
                            <TableRow key={variant.color}>
                                <TableCell align="center">
                                    <TextField
                                        value={colors[i]}
                                        onChange={(e) => {
                                            const newColors = [...colors];
                                            newColors[i] = e.target.value;
                                            setColors(newColors);
                                        }}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        value={price[i]}
                                        type="number"
                                        onChange={(e) => {
                                            const newPrice = [...price];
                                            newPrice[i] = e.target.value;
                                            setPrice(newPrice);
                                        }}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        value={remainingStock[i] - variant.totalSales}
                                        type="number"
                                        onChange={(e) => {
                                            const newTotalStock = [...remainingStock];
                                            newTotalStock[i] = e.target.value;
                                            setRemainingStock(newTotalStock);
                                        }}
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ButtonContainer>
                <Button style={PlatformReusableStyles.PrimaryButtonStyles}>Save</Button>
            </ButtonContainer>
        </Container>
    );
}
