import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import CustomerStatusContext from '../../../platform/app/data/CustomerStatusContext';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../context/CartContext';
import useCustomer from './hooks/useCustomer';
import useShop from './hooks/useShop';
import AddCartModal from './modal/AddCartModal';

const AllDetails = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const AllImage = styled.div`
    display: flex;
    flex-direction: column;
`;

const BigImg = styled.div`
    width: 400px;
    height: 400px;
    margin-bottom: 10px;
    position: relative;
`;

const SmallImg = styled.div`
    display: flex;
    gap: 13px;
    position: relative;
`;

const NextButton = styled.button`
    ${PlatformReusableStyles.SecondaryButtonStyles};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #e1f0eb66;
    color: ${COLORS.black};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 0;
    margin-right: 4px;

    &:hover {
        ${PlatformReusableStyles.PrimaryButtonStyles};
        width: 20px;
        height: 20px;
        padding: 0;
    }
`;

const PrevButton = styled.button`
    ${PlatformReusableStyles.SecondaryButtonStyles};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #e1f0eb66;
    color: ${COLORS.black};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 0;
    margin-left: 3px;

    &:hover {
        ${PlatformReusableStyles.PrimaryButtonStyles};
        width: 20px;
        height: 20px;
        padding: 0;
    }
`;

const Details = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Rate = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.darkGrey};
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const Selectt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WholeOption = styled.div`
    display: flex;
`;

const OptionsType = styled.p`
    width: 100px;
    text-align: left;
    margin-top: 15px;
`;

const AllOptionBtns = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
`;

const StyledInput = styled.input`
    height: 40px;
    width: 50px;
    text-align: center;
`;

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Seller = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const TextXLarge = styled.p`
    font-size: ${FONTSIZE['x-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const Text3XLarge = styled.p`
    font-size: ${FONTSIZE['xxx-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    margin-top: 20px;
`;

const TextSmallGrey = styled.p`
    font-size: ${FONTSIZE.small};
    color: ${COLORS.darkGrey};
`;

export default function ProductDetailScreen() {
    const { isLogin } = useContext(CustomerStatusContext);
    const navigate = useNavigate();
    const { getProductById } = useCustomer();
    const { getShop } = useShop();
    const [product, setProduct] = useState();
    const [productShop, setProductShop] = useState();
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedVariantPrice, setSelectedVariantPrice] = useState(0);

    const { id } = useParams();
    useEffect(() => {
        async function fetchProduct() {
            try {
                const p = await getProductById(id);
                setProduct(p);
                setSelectedVariant(p.variants[0].color);
                setSelectedVariantPrice(p.variants[0].price);
                const s = await getShop(id);
                setProductShop(s);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [id, getProductById, getShop]);

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant.color);
        setSelectedVariantPrice(variant.price);
    };
    const [quantity, setQuantity] = useState(1);
    const [inputQuantity, setInputQuantity] = useState(quantity);

    const { addToCart, buyNow, buyNowProduct } = useContext(CartContext);

    const { showModal } = useModal();

    const handleAddToCart = () => {
        if (!isLogin) {
            navigate('/authentication/login', { replace: true });
        } else {
            addToCart(product, selectedVariant, quantity, selectedVariantPrice);
            showModal({
                modal: <AddCartModal />,
                disableBackdropDismiss: true,
            });
        }
    };

    const navigateToCheckout = useCallback(
        (item) => {
            const queryString = `?from=buyNow&products=${encodeURIComponent(JSON.stringify(item))}`;
            navigate({
                pathname: '/checkout/checkoutScreen',
                search: queryString,
            });
        },
        [navigate],
    );

    const handleBuyNow = () => {
        buyNow({ product, selectedVariant, quantity, selectedVariantPrice });
    };

    useEffect(() => {
        if (buyNowProduct) {
            navigateToCheckout(buyNowProduct);
            buyNow(null);
        }
    }, [buyNowProduct, navigateToCheckout, buyNow]);

    const [imageListStart, setImageListStart] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleNextClick = () => {
        if (imageListStart < product.productImages.length - 4) {
            setImageListStart(imageListStart + 1);
        }
    };

    const handlePrevClick = () => {
        if (imageListStart > 0) {
            setImageListStart(imageListStart - 1);
        }
    };

    const handleNextClickBigImage = () => {
        if (selectedImageIndex < product.productImages.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
            if (selectedImageIndex === imageListStart + 2 && imageListStart < product.productImages.length - 4) {
                setImageListStart(imageListStart + 1);
            }
        }
    };

    const handlePrevClickBigImage = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
            if (selectedImageIndex === imageListStart + 1 && imageListStart > 0) {
                setImageListStart(imageListStart - 1);
            }
        }
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <AllDetails>
                <AllImage>
                    <BigImg>
                        {product.productImages.length > 1 && (
                            <PrevButton
                                onClick={handlePrevClickBigImage}
                                style={{ width: '40px', height: '40px' }}
                            >
                                <ArrowBackIosOutlined style={{ fontSize: '22px' }} />
                            </PrevButton>
                        )}
                        <img
                            src={product.productImages[selectedImageIndex]}
                            alt={product.name}
                            width={400}
                            height={400}
                        />
                        {product.productImages.length > 1 && (
                            <NextButton
                                onClick={handleNextClickBigImage}
                                style={{ width: '40px', height: '40px' }}
                            >
                                <ArrowForwardIosOutlined style={{ fontSize: '22px' }} />
                            </NextButton>
                        )}
                    </BigImg>
                    <SmallImg>
                        {product.productImages.length > 4 && (
                            <PrevButton onClick={handlePrevClick}>
                                <ArrowBackIosOutlined style={{ fontSize: '10px' }} />
                            </PrevButton>
                        )}
                        {product.productImages.slice(imageListStart, imageListStart + 4).map((image, index) => (
                            <button
                                key={Math.random()}
                                onClick={() => handleImageClick(imageListStart + index)}
                                style={{
                                    ...(imageListStart + index === selectedImageIndex
                                        ? PlatformReusableStyles.OutlineButtonStyles
                                        : PlatformReusableStyles.SecondaryButtonStyles),
                                    padding: '5px',
                                    width: '90px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index}`}
                                    width={80}
                                    height={80}
                                />
                            </button>
                        ))}
                        {product.productImages.length > 4 && (
                            <NextButton onClick={handleNextClick}>
                                <ArrowForwardIosOutlined style={{ fontSize: '10px' }} />
                            </NextButton>
                        )}
                    </SmallImg>
                </AllImage>
                <Details>
                    <TextXLarge>{product.name}</TextXLarge>
                    <Rate>
                        {product.rate > 0 ? (
                            <>
                                <TextSmallGrey>{product.rate.toFixed(1)}</TextSmallGrey>
                                <Rating
                                    name="read-only"
                                    value={product.rate}
                                    precision={0.5}
                                    readOnly
                                />
                            </>
                        ) : (
                            <TextSmallGrey>No Rating</TextSmallGrey>
                        )}
                        <TextSmallGrey>({product.numReviews} reviews)</TextSmallGrey>
                    </Rate>
                    <Text3XLarge>RM {selectedVariantPrice.toFixed(2)}</Text3XLarge>
                    <StyledHr />
                    <Selectt>
                        <WholeOption key="color">
                            <OptionsType>Color</OptionsType>
                            <AllOptionBtns>
                                {product.variants.map((variant) => (
                                    <Button
                                        style={
                                            variant.color === selectedVariant
                                                ? {
                                                      ...PlatformReusableStyles.OutlineButtonStyles,
                                                      width: '80px',
                                                      height: '50px',
                                                  }
                                                : {
                                                      ...PlatformReusableStyles.BlackOutlineButtonStyles,
                                                      width: '80px',
                                                      height: '50px',
                                                  }
                                        }
                                        key={variant.color}
                                        // selected={variant.color === selectedVariant}
                                        onClick={() => handleVariantChange(variant)}
                                    >
                                        {variant.color}
                                    </Button>
                                ))}
                            </AllOptionBtns>
                        </WholeOption>
                        <WholeOption>
                            <OptionsType>quantity </OptionsType>
                            <AllOptionBtns>
                                <Button
                                    aria-label="Add"
                                    style={{
                                        ...PlatformReusableStyles.BlackOutlineButtonStyles,
                                        width: '50px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => {
                                        const newQuantity = Math.max(1, quantity - 1);
                                        setInputQuantity(newQuantity);
                                        setQuantity(newQuantity);
                                    }}
                                >
                                    <RemoveIcon />
                                </Button>
                                <StyledInput
                                    id="quantity"
                                    value={inputQuantity}
                                    onChange={(e) => {
                                        setInputQuantity(e.target.value);
                                    }}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            const newQuantity = parseInt(e.target.value, 10);
                                            if (!Number.isNaN(newQuantity) && newQuantity > 0) {
                                                setQuantity(newQuantity);
                                            } else {
                                                setInputQuantity(quantity);
                                            }
                                            e.target.blur();
                                        }
                                    }}
                                />

                                <Button
                                    aria-label="Add"
                                    style={{
                                        ...PlatformReusableStyles.BlackOutlineButtonStyles,
                                        width: '50px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => {
                                        const newQuantity = Math.max(1, quantity + 1);
                                        setInputQuantity(newQuantity);
                                        setQuantity(newQuantity);
                                    }}
                                >
                                    <AddIcon />
                                </Button>
                            </AllOptionBtns>
                        </WholeOption>
                        <WholeOption>
                            <AllOptionBtns>
                                <Button
                                    style={{
                                        ...PlatformReusableStyles.OutlineButtonStyles,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '5px',
                                        width: '190px',
                                        fontWeight: `${FONTWEIGHT.SEMI_BOLD}`,
                                        height: '50px',
                                    }}
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCartOutlinedIcon />
                                    ADD TO CART
                                </Button>
                                <Button
                                    style={{
                                        ...PlatformReusableStyles.PrimaryButtonStyles,
                                        width: '130px',
                                        fontWeight: `${FONTWEIGHT.SEMI_BOLD}`,
                                        height: '50px',
                                    }}
                                    onClick={handleBuyNow}
                                >
                                    BUY NOW
                                </Button>
                            </AllOptionBtns>
                        </WholeOption>
                    </Selectt>
                </Details>
            </AllDetails>
            <hr />
            {productShop ? (
                <Seller>
                    <img
                        src={productShop.logoPath}
                        alt="seller logo"
                        width={60}
                        height={60}
                        style={{ border: `2px solid ${COLORS.black}`, borderRadius: '50%' }}
                    />
                    <p>{productShop.name}</p>
                </Seller>
            ) : null}
            <hr />
            <ProductDescription>
                <TextXLarge>Description</TextXLarge>
                <p style={{ whiteSpace: 'pre-wrap' }}>{product.productDescription}</p>
            </ProductDescription>
            <br />
        </div>
    );
}
