import DeleteOutline from '@mui/icons-material/DeleteOutline';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import Storefront from '@mui/icons-material/Storefront';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../../customer/context/CartContext';
import DeleteItemModal from '../modal/DeleteItemModal';
import CheckoutBar from './component/CheckoutBar';
import COReusableStyles from './styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
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

function handleSelectAllChange() {}
function handleSelectStoresChange() {}

export default function ShoppingCartScreen() {
    const [productQty, setProductQty] = useState({});
    const [productTotal, setProductTotal] = useState({});
    const { showModal, hideModal } = useModal();
    const { cart } = useContext(CartContext);

    useEffect(() => {
        const initialQty = cart.reduce((acc, product) => {
            acc[product.id] = product.quantity;
            return acc;
        }, {});
        setProductQty(initialQty);

        const initialProductTotal = cart.reduce((acc, product) => {
            acc[product.id] = product.quantity * product.price;
            return acc;
        }, {});
        setProductTotal(initialProductTotal);
    }, [cart]);

    const handleActionClick = useCallback(
        (productId) => {
            showModal({
                modal: (
                    <DeleteItemModal
                        hideModal={hideModal}
                        productId={productId}
                    />
                ),
            });
        },
        [showModal, hideModal],
    );

    const handleIncreamentChange = useCallback((productId) => {
        setProductQty((prevQty) => {
            const updatedQty = prevQty[productId] + 1;
            const updatedTotal = updatedQty * cart.find((product) => product.id === productId).price;
            setProductTotal((prevTotal) => ({
                ...prevTotal,
                [productId]: updatedTotal,
            }));
            return {
                ...prevQty,
                [productId]: updatedQty,
            };
        });
    }, []);

    const handleDecrementChange = useCallback(
        (productId) => {
            if (productQty[productId] > 1) {
                setProductQty((prevQty) => {
                    const updatedQty = prevQty[productId] - 1;
                    const updatedTotal = updatedQty * cart.find((product) => product.id === productId).price;
                    setProductTotal((prevTotal) => ({
                        ...prevTotal,
                        [productId]: updatedTotal,
                    }));
                    return {
                        ...prevQty,
                        [productId]: updatedQty,
                    };
                });
            } else {
                showModal({
                    modal: (
                        <DeleteItemModal
                            hideModal={hideModal}
                            productId={productId}
                        />
                    ),
                });
            }
        },
        [productQty, setProductQty, showModal, hideModal],
    );

    if (cart.length === 0) {
        return (
            <Wrapper>
                <COReusableStyles.BorderConatiner>
                    <Layout>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleSelectAllChange}
                                    disabled
                                />
                            }
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
                        control={<Checkbox onChange={handleSelectAllChange} />}
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

            {cart.map((product) => (
                <COReusableStyles.BorderConatiner key={product.id}>
                    <FormControlLabel
                        control={<Checkbox onChange={handleSelectStoresChange} />}
                        label={
                            <CheckboxLabelContainer>
                                <Storefront />
                                <COReusableStyles.Text style={{}}>Titan Badminton Store</COReusableStyles.Text>
                            </CheckboxLabelContainer>
                        }
                    />
                    <COReusableStyles.Divider />
                    <Layout>
                        <FormControlLabel
                            control={<Checkbox />}
                            label={
                                <CheckboxLabelContainer>
                                    <img
                                        src={product.imgSrc}
                                        alt={product.name}
                                        width="100px"
                                    />
                                    <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                        {product.name}
                                        <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                            {[
                                                product.options.color ? product.options.color : '',
                                                product.options.size ? product.options.size : '',
                                                product.options.grade ? product.options.grade : '',
                                            ]
                                                .filter(Boolean)
                                                .join(', ')}
                                        </p>
                                    </COReusableStyles.Text>
                                </CheckboxLabelContainer>
                            }
                        />
                        <COReusableStyles.Text>RM{product.price.toFixed(2)}</COReusableStyles.Text>
                        <QuantityControlContainer>
                            <QuantityChangeButton onClick={() => handleDecrementChange(product.id)}>
                                -
                            </QuantityChangeButton>
                            <QuantityChangeButton style={{ cursor: 'auto' }}>
                                <p>{productQty[product.id]}</p>
                            </QuantityChangeButton>
                            <QuantityChangeButton onClick={() => handleIncreamentChange(product.id)}>
                                +
                            </QuantityChangeButton>
                        </QuantityControlContainer>
                        <COReusableStyles.Text>RM{productTotal[product.id].toFixed(2)}</COReusableStyles.Text>
                        <IconButton
                            onClick={() => handleActionClick(product.id)}
                            aria-label="delete"
                            style={{ color: COLORS.black }}
                        >
                            <DeleteOutline />
                        </IconButton>
                    </Layout>
                </COReusableStyles.BorderConatiner>
            ))}
            <CheckoutBar />
        </Wrapper>
    );
}
