import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import TickedModal from '../../../../platform/modal/TickedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import PurchasesContext from '../../context/PurchaseContext';
import useCustomer from '../hooks/useCustomer';
import useShop from '../hooks/useShop';
import RateProductModal from '../modal/RateProductModal';
import PurchaseItem from './PurchaseItem';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 98%;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
`;

const Seller = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TextStatus = styled.p`
    color: ${COLORS.green};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.grey};
    margin: 0;
`;

const BorderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
    justify-content: space-between;
`;

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 0 15px;
`;

const AlignRight = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 98%;
    padding: 0 8px;
`;

const Rated = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`;

const TextGrey = styled.p`
    color: ${COLORS.darkGrey};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    padding: 0 8px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const TextGreySmall = styled.p`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
`;

export default function PurchaseShop({ shop, shippedDate, deliveredDate, purchase }) {
    const navigate = useNavigate();
    const { setStatusChange } = useContext(PurchasesContext);
    const { getShop } = useShop();
    const { completeOrder } = useCustomer();
    const { showModal } = useModal();
    const [rating, setRating] = useState(5);
    const [ratingSubmitted, setRatingSubmitted] = useState(false);
    const [shopInfo, setShopInfo] = useState(null);

    useEffect(() => {
        const fetchShopInfo = async () => {
            const info = await getShop(shop.products[0].product);
            setShopInfo(info);
        };

        fetchShopInfo();
    }, [getShop, shop.products]);

    let totalPrice = 5.9;
    const totalProduct = shop.products.length;
    const { status } = shop.products[0];

    shop.products.map((product) => {
        totalPrice += product.selectedVariantPrice * product.quantity;
        return totalPrice;
    });

    const handleStatusChange = async () => {
        const trackingNumbers = shop.products.flatMap((product) => product.trackingNumber);
        await completeOrder(trackingNumbers);
        setStatusChange(true);
        showModal({
            modal: <TickedModal title="Order Received" />,
            cmaxWidth: 'sm',
        });
        navigate('/customer/my-purchase/completed', { replace: true });
    };

    return (
        <BorderContainer>
            <All>
                <Item>
                    <HeaderContainer>
                        <Seller>
                            <img
                                src={shopInfo ? shopInfo.logoPath : ''}
                                alt="logo"
                                width={30}
                            />
                            <p>{shopInfo ? shopInfo.name : ''}</p>
                        </Seller>
                        <TextStatus>{status}</TextStatus>
                    </HeaderContainer>
                    <StyledHr />
                    {shop.products.map((product) => (
                        <PurchaseItem
                            key={`${product.product}-${product.selectedVariant}`}
                            product={product}
                        />
                    ))}
                    <StyledHr />
                </Item>
                <Bottom>
                    {status === 'To Ship' ? (
                        <TextGreySmall>Product will be shipped out by {shippedDate}</TextGreySmall>
                    ) : (
                        ''
                    )}
                    {status === 'Shipping' ? (
                        <TextGreySmall>Product will be delivered by {deliveredDate}</TextGreySmall>
                    ) : (
                        ''
                    )}
                    {status === 'Completed' ? <TextGreySmall>Order Completed</TextGreySmall> : ''}
                    <PriceContainer>
                        <p>Order Total ({totalProduct} item):</p>
                        <p>RM{totalPrice.toFixed(2)}</p>
                    </PriceContainer>
                </Bottom>
                {status === 'Shipping' ? (
                    <AlignRight>
                        <Button
                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles, width: '160px' }}
                            onClick={handleStatusChange}
                        >
                            ORDER RECEIVED
                        </Button>
                    </AlignRight>
                ) : (
                    ''
                )}
                {status === 'Completed' ? (
                    <AlignRight>
                        {purchase.rated || ratingSubmitted ? (
                            <Rated>
                                <TextGrey>You have rated the product</TextGrey>
                            </Rated>
                        ) : (
                            <Button
                                style={{ ...PlatformReusableStyles.PrimaryButtonStyles, width: '90px' }}
                                onClick={() => {
                                    showModal({
                                        modal: (
                                            <RateProductModal
                                                rating={rating}
                                                setRating={setRating}
                                                shop={shop}
                                                shopInfo={shopInfo}
                                                orderId={purchase.orderId}
                                                setRatingSubmitted={setRatingSubmitted}
                                            />
                                        ),
                                        disableBackdropDismiss: false,
                                        cmaxWidth: 'md',
                                    });
                                }}
                            >
                                RATE
                            </Button>
                        )}
                    </AlignRight>
                ) : (
                    ''
                )}
            </All>
        </BorderContainer>
    );
}
