import DeleteOutline from '@mui/icons-material/DeleteOutline';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import Storefront from '@mui/icons-material/Storefront';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import CrossedModal from '../../../platform/modal/CrossedModal';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../../customer/context/CartContext';
import useShop from '../../customer/view/hooks/useShop';
import DeleteItemModal from '../modal/DeleteItemModal';
import COReusableStyles from './styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 64px;
    gap: 1rem;
`;
const CenteredContainer = styled.div`
    display: flex;
    color: ${COLORS.grey};
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;
const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr 1fr;
    gap: 1rem;
    align-items: center;
`;
const CheckboxLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;
    gap: 1rem;
`;
const QuantityControlContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`;
const QuantityChangeButton = styled.button`
    border: 1px solid ${COLORS.grey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    background: none;
    width: 48px;
    height: 48px;
    cursor: pointer;
`;
const BottomBar = styled.div`
    position: fixed;
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 84px;
    box-shadow: 0 0 10px ${COLORS.darkGrey};
    padding: 0.5rem 5rem;
`;
const BottomLayout = styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
`;
const TotalCheckout = styled.span`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.green};
    text-align: center;
`;

export default function ShoppingCartScreen() {
    const [productTotal, setProductTotal] = useState({});
    const [checkedProducts, setCheckedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [groupedProduct, setGroupedProducts] = useState({});
    const { showModal, hideModal } = useModal();
    const { getShop } = useShop();
    const { cart, increaseQty, decreaseQty } = useContext(CartContext);

    useEffect(() => {
        const initialProductTotal = cart.reduce((acc, item) => {
            acc[item.product.productId] = item.quantity * item.product.minPrice;
            return acc;
        }, {});
        setProductTotal(initialProductTotal);
    }, [cart]);

    const calculateTotalPrice = useCallback(() => {
        let total = 0;
        checkedProducts.forEach((item) => {
            total += productTotal[item.product.productId] || 0;
        });
        return total;
    }, [checkedProducts, productTotal]);

    const handleProductChecked = useCallback((item) => {
        setCheckedProducts((prevCheckedProducts) => {
            if (prevCheckedProducts.includes(item)) {
                return prevCheckedProducts.filter((element) => element !== item);
            }
            return [...prevCheckedProducts, item];
        });
    }, []);

    const handleSelectStoresChange = useCallback(
        (shopName) => {
            setCheckedProducts((prevCheckedProducts) => {
                const group = groupedProduct[shopName];
                const product = group.products.map((item) => item);

                const allChecked = product.every((item) => prevCheckedProducts.includes(item));

                if (allChecked) {
                    return prevCheckedProducts.filter((element) => !product.includes(element));
                }
                return [...new Set([...prevCheckedProducts, ...product])];
            });
        },
        [groupedProduct],
    );

    const handleSelectAllChange = useCallback(
        (event) => {
            setCheckedProducts(() => {
                if (event.target.checked) {
                    return cart.map((product) => product);
                }
                return [];
            });
        },
        [cart],
    );

    const handleActionClick = useCallback(
        (item) => {
            showModal({
                modal: (
                    <DeleteItemModal
                        hideModal={hideModal}
                        item={item}
                        onDelete={() => {
                            setProductTotal((prevTotal) => {
                                const updatedTotal = { ...prevTotal };
                                delete updatedTotal[item.product.productId];
                                return updatedTotal;
                            });
                            setCheckedProducts(checkedProducts.filter((element) => element !== item));
                        }}
                    />
                ),
            });
        },
        [showModal, hideModal, checkedProducts],
    );

    const handleIncrementChange = useCallback(
        (item) => {
            increaseQty(item);
            const product = cart.find((element) => element === item);
            setProductTotal((prevTotal) => ({
                ...prevTotal,
                [product.product.productId]: product.quantity * product.product.minPrice,
            }));
        },
        [increaseQty, cart],
    );

    const handleDecrementChange = useCallback(
        (item) => {
            const product = cart.find((element) => element === item);
            if (product.quantity > 1) {
                decreaseQty(item);
                setProductTotal((prevTotal) => ({
                    ...prevTotal,
                    [product.productId]: product.quantity * product.product.minPrice,
                }));
            } else {
                showModal({
                    modal: (
                        <DeleteItemModal
                            hideModal={hideModal}
                            item={item}
                            onDelete={() => {
                                setProductTotal((prevTotal) => {
                                    const updatedTotal = { ...prevTotal };
                                    delete updatedTotal[item.product.productId];
                                    return updatedTotal;
                                });
                                setCheckedProducts(checkedProducts.filter((element) => element !== item));
                            }}
                        />
                    ),
                });
            }
        },
        [setProductTotal, decreaseQty, showModal, hideModal, cart, checkedProducts],
    );

    const handleCheckoutClick = useCallback(() => {
        showModal({ modal: <CrossedModal title="You have not selected any items for checkout" /> });
        setTimeout(() => {
            hideModal();
        }, 3000);
    }, [showModal, hideModal]);

    useEffect(() => {
        const updatedTotalPrice = calculateTotalPrice(productTotal, checkedProducts);
        setTotalPrice(updatedTotalPrice);
    }, [productTotal, checkedProducts, calculateTotalPrice]);

    useEffect(() => {
        async function groupProducts() {
            const groups = {};
            const promises = cart.map(async (item) => {
                const shop = await getShop(item.product.productId);
                if (!groups[shop.name]) {
                    groups[shop.name] = {
                        shop,
                        products: [],
                    };
                }
                groups[shop.name].products.push(item);
            });

            await Promise.all(promises);

            Object.values(groups).forEach((group) => {
                group.products.sort((a, b) => cart.indexOf(a) - cart.indexOf(b));
            });

            setGroupedProducts(groups);
        }

        groupProducts();
    }, [cart, getShop]);

    if (cart.length === 0) {
        return (
            <Wrapper>
                <COReusableStyles.BorderConatiner>
                    <Layout>
                        <FormControlLabel
                            control={<Checkbox disabled />}
                            label={
                                <COReusableStyles.Label style={{ marginLeft: '1.5rem' }}>
                                    Product
                                </COReusableStyles.Label>
                            }
                        />
                        <COReusableStyles.Label>Unit Price</COReusableStyles.Label>
                        <COReusableStyles.Label>Quantity</COReusableStyles.Label>
                        <COReusableStyles.Label>Total Price</COReusableStyles.Label>
                        <COReusableStyles.Label>Action</COReusableStyles.Label>
                    </Layout>
                </COReusableStyles.BorderConatiner>

                <CenteredContainer>
                    <ProductionQuantityLimits style={{ fontSize: '150px' }} />
                    <span
                        style={{
                            color: COLORS.grey,
                            fontSize: FONTSIZE['xx-large'],
                            fontWeight: FONTWEIGHT.SEMI_BOLD,
                            marginLeft: '2rem',
                        }}
                    >
                        Your cart is empty
                    </span>
                </CenteredContainer>
                <CenteredContainer>
                    <Button
                        component={Link}
                        to="/"
                        style={{ ...PlatformReusableStyles.OutlineButtonStyles }}
                    >
                        <p>BACK TO HOME</p>
                    </Button>
                </CenteredContainer>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <COReusableStyles.BorderConatiner>
                <Layout>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleSelectAllChange}
                                checked={cart.length > 0 && checkedProducts.length === cart.length}
                            />
                        }
                        label={
                            <COReusableStyles.Label style={{ marginLeft: '1.5rem' }}>Product</COReusableStyles.Label>
                        }
                    />
                    <COReusableStyles.Label>Unit Price</COReusableStyles.Label>
                    <COReusableStyles.Label>Quantity</COReusableStyles.Label>
                    <COReusableStyles.Label>Total Price</COReusableStyles.Label>
                    <COReusableStyles.Label>Action</COReusableStyles.Label>
                </Layout>
            </COReusableStyles.BorderConatiner>

            {Object.entries(groupedProduct).map(([shopName, group]) => (
                <COReusableStyles.BorderConatiner key={shopName}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => handleSelectStoresChange(shopName)}
                                checked={group.products.every((item) => checkedProducts.includes(item))}
                            />
                        }
                        label={
                            <CheckboxLabelContainer>
                                <Storefront />
                                <COReusableStyles.Text style={{}}>{shopName}</COReusableStyles.Text>
                            </CheckboxLabelContainer>
                        }
                    />
                    {group.products.map((item) => (
                        <React.Fragment key={item.product.productId}>
                            <COReusableStyles.Divider />
                            <Layout>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={() => handleProductChecked(item)}
                                            checked={checkedProducts.includes(item)}
                                        />
                                    }
                                    label={
                                        <CheckboxLabelContainer>
                                            <img
                                                src={item.product.thumbnailImage}
                                                alt={item.product.name}
                                                width="100px"
                                                height="100px"
                                            />
                                            <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                                {item.product.name}
                                                <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                                    {item.selectedVariant}
                                                </p>
                                            </COReusableStyles.Text>
                                        </CheckboxLabelContainer>
                                    }
                                />
                                <COReusableStyles.Text>RM{item.product.minPrice.toFixed(2)}</COReusableStyles.Text>
                                <QuantityControlContainer>
                                    <QuantityChangeButton onClick={() => handleDecrementChange(item)}>
                                        -
                                    </QuantityChangeButton>
                                    <QuantityChangeButton style={{ cursor: 'auto' }}>
                                        <p>{item.quantity}</p>
                                    </QuantityChangeButton>
                                    <QuantityChangeButton onClick={() => handleIncrementChange(item)}>
                                        +
                                    </QuantityChangeButton>
                                </QuantityControlContainer>
                                {productTotal[item.product.productId] !== undefined && (
                                    <COReusableStyles.Text>
                                        RM{productTotal[item.product.productId].toFixed(2)}
                                    </COReusableStyles.Text>
                                )}
                                <IconButton
                                    onClick={() => handleActionClick(item)}
                                    aria-label="delete"
                                    style={{ color: COLORS.black }}
                                >
                                    <DeleteOutline />
                                </IconButton>
                            </Layout>
                        </React.Fragment>
                    ))}
                </COReusableStyles.BorderConatiner>
            ))}
            <BottomBar>
                <BottomLayout>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleSelectAllChange}
                                checked={cart.length > 0 && checkedProducts.length === cart.length}
                            />
                        }
                        label={<COReusableStyles.Text>Select All ({cart.length})</COReusableStyles.Text>}
                    />
                    <COReusableStyles.Text>Total Item: {checkedProducts.length} item(s)</COReusableStyles.Text>
                    <TotalCheckout>RM{totalPrice.toFixed(2)}</TotalCheckout>
                    {checkedProducts.length === 0 ? (
                        <Button
                            onClick={handleCheckoutClick}
                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                        >
                            <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>CHECK OUT</p>
                        </Button>
                    ) : (
                        <Button
                            component={Link}
                            to={{
                                pathname: 'checkoutScreen',
                                search: `?from=cart&products=${encodeURIComponent(JSON.stringify(checkedProducts))}`,
                            }}
                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                        >
                            <p style={{ fontWeight: FONTWEIGHT.SEMI_BOLD }}>CHECK OUT</p>
                        </Button>
                    )}
                </BottomLayout>
            </BottomBar>
        </Wrapper>
    );
}
