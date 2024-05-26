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
import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import DropBox from '../../../../platform/components/dropbox/DropBox';
import { ImageURL, ProductBrands, ProductCategories } from '../../../../platform/constants/PlatformConstants';
import CrossedModal from '../../../../platform/modal/CrossedModal';
import TickedModal from '../../../../platform/modal/TickedModal';
import useLoadingModal from '../../../../platform/modal/useLoadingModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import useSCAddNewProducts from '../hooks/useSCAddNewProducts';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
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

export default function SCAddNewProductsScreen({
    hideModal,
    cproductID,
    cproductName,
    cproductCategory,
    cproductBrand,
    cthumbnailFile,
    cproductImage1,
    cproductImage2,
    cproductImage3,
    cproductImage4,
    cproductDescription,
    cvariants,
}) {
    const [productName, setProductName] = useState(cproductName || '');
    const [productCategory, setProductCategory] = useState(cproductCategory || '');
    const [productBrand, setProductBrand] = useState(cproductBrand || '');
    const [thumbnailFile, setThumbnailFile] = useState(cthumbnailFile ? [{ name: '', preview: cthumbnailFile }] : []);
    const [productImage1, setProductImage1] = useState(cproductImage1 ? [{ name: '', preview: cproductImage1 }] : []);
    const [productImage2, setProductImage2] = useState(cproductImage2 ? [{ name: '', preview: cproductImage2 }] : []);
    const [productImage3, setProductImage3] = useState(cproductImage3 ? [{ name: '', preview: cproductImage3 }] : []);
    const [productImage4, setProductImage4] = useState(cproductImage4 ? [{ name: '', preview: cproductImage4 }] : []);
    const [productDescription, setProductDescription] = useState(cproductDescription || '');
    const [variants, setVariants] = useState(
        cvariants || [
            {
                color: '',
                totalStock: 0,
                totalSales: 0,
                price: 0,
            },
        ],
    );
    const [colors, setColors] = useState(variants.map((variant) => variant.color));
    const [totalStock, setTotalStock] = useState(variants.map((variant) => variant.totalStock));
    const [price, setPrice] = useState(variants.map((variant) => variant.price));

    const { setShopInfo } = useContext(ShopInfoContext);

    const { addNewProducts, updateProduct } = useSCAddNewProducts();
    const { showLoadingModal, hideLoadingModal } = useLoadingModal();
    const { showModal: showInternalModal } = useModal();

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
        setTotalStock([...totalStock, 0]);
        setPrice([...price, 0]);
    }, [colors, price, totalStock, variants]);

    const onSave = useCallback(async () => {
        // Entry point is through modal
        if (hideModal) {
            const finalVariants = variants.map((variant, i) => ({
                color: colors[i],
                totalStock: totalStock[i],
                totalSales: variant.totalSales,
                price: price[i],
            }));

            try {
                await updateProduct({
                    productId: cproductID,
                    productName,
                    productCategory,
                    productBrand,
                    thumbnailFile,
                    productImage1,
                    productImage2,
                    productImage3,
                    productImage4,
                    productDescription,
                    variants: finalVariants,
                    newProductImages: [
                        productImage1[0] &&
                            (productImage1[0].path
                                ? `imageDB/product/${productImage1[0].path}`
                                : productImage1[0].preview),
                        productImage2[0] &&
                            (productImage2[0].path
                                ? `imageDB/product/${productImage2[0].path}`
                                : productImage2[0].preview),
                        productImage3[0] &&
                            (productImage3[0].path
                                ? `imageDB/product/${productImage3[0].path}`
                                : productImage3[0].preview),
                        productImage4[0] &&
                            (productImage4[0].path
                                ? `imageDB/product/${productImage4[0].path}`
                                : productImage4[0].preview),
                    ]
                        .filter(Boolean)
                        .map((url) => url.replace(ImageURL, '')),
                });
            } catch (error) {
                showInternalModal({ modal: <CrossedModal title="Failed to update product" /> });
                return;
            }
            window.location.reload();
            return;
        }

        // Entry point is screen navigation
        const newVariants = colors.map((color, index) => ({
            color,
            totalStock: totalStock[index],
            price: price[index],
        }));
        try {
            showLoadingModal();
            const newProductId = await addNewProducts({
                productName,
                productCategory,
                productBrand,
                thumbnailFile,
                productImage1,
                productImage2,
                productImage3,
                productImage4,
                productDescription,
                variants: newVariants,
            });
            setShopInfo((prev) => ({
                ...prev,
                shopProducts: [newProductId, ...prev.shopProducts],
            }));

            // set everything back to empty state
            setProductName('');
            setProductCategory(null);
            setProductBrand(null);
            setThumbnailFile([]);
            setProductImage1([]);
            setProductImage2([]);
            setProductImage3([]);
            setProductImage4([]);
            setProductDescription('');
            setVariants([
                {
                    color: '',
                    totalStock: 0,
                    totalSales: 0,
                    price: 0,
                },
            ]);
            setColors(['']);
            setTotalStock([0]);
            setPrice([0]);

            hideLoadingModal();

            showInternalModal({ modal: <TickedModal title="Product added successfully!" /> });
        } catch (error) {
            showInternalModal({ modal: <CrossedModal title="Failed to update product" /> });
        }
    }, [
        hideModal,
        colors,
        variants,
        totalStock,
        price,
        updateProduct,
        cproductID,
        productName,
        productCategory,
        productBrand,
        thumbnailFile,
        productImage1,
        productImage2,
        productImage3,
        productImage4,
        productDescription,
        showInternalModal,
        showLoadingModal,
        addNewProducts,
        setShopInfo,
        hideLoadingModal,
    ]);

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
                            border: `2px solid ${COLORS.grey}`,
                        },
                    }}
                >
                    <TableHead>
                        <TableRow style={{ backgroundColor: COLORS['light-grey'] }}>
                            <TableCell align="center">Colour</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Total Stock</TableCell>
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
                                        value={totalStock[i] - variant.totalSales}
                                        type="number"
                                        onChange={(e) => {
                                            const newTotalStock = [...totalStock];
                                            newTotalStock[i] = e.target.value;
                                            setTotalStock(newTotalStock);
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
                <Button
                    style={PlatformReusableStyles.PrimaryButtonStyles}
                    onClick={onSave}
                >
                    Save
                </Button>
            </ButtonContainer>
        </Container>
    );
}
