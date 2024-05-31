import { Button } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import RateEachProduct from '../components/RateEachProduct';
import useCustomer from '../hooks/useCustomer';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
    width: 90%;
    padding: 2rem;
`;

const Seller = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const AlignLeft = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 90%;
`;

const AlignRight = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 90%;
`;

const Title = styled.p`
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;
const TextMedium = styled.p`
    font-size: ${FONTSIZE.medium};
`;

export default function RateProductModal(props) {
    const { rating, setRating, setRatingSubmitted, shop, shopInfo, orderId } = props;
    const { updateProductRating } = useCustomer();
    const [ratings, setRatings] = useState([]);
    const [productIds, setProductIds] = useState([]);

    const { hideModal } = useModal();

    const uniqueProducts = useMemo(
        () =>
            shop.products.reduce((unique, product) => {
                if (!unique.some((item) => item.product === product.product)) {
                    unique.push(product);
                }
                return unique;
            }, []),
        [shop.products],
    );

    useEffect(() => {
        const initialRatings = new Array(uniqueProducts.length).fill(5);
        setRatings(initialRatings);

        const uniqueProductIds = uniqueProducts.map((product) => product.product);
        setProductIds(uniqueProductIds);
    }, [uniqueProducts]);

    const handleRating = async () => {
        setRatingSubmitted(true);
        hideModal();
        await updateProductRating(orderId, productIds, ratings);
    };

    return (
        <CenteredDiv>
            <Title>Rate Product</Title>
            <AlignLeft>
                <Seller>
                    <img
                        src={shopInfo ? shopInfo.logoPath : ''}
                        alt="seller logo"
                        width={40}
                        style={{ border: `2px solid ${COLORS.black}`, borderRadius: '50%' }}
                    />
                    <TextMedium>{shopInfo ? shopInfo.name : ''}</TextMedium>
                </Seller>
            </AlignLeft>
            <hr style={{ border: `solid 1px ${COLORS.grey}`, width: '90%', margin: 0 }} />
            {uniqueProducts.map((product, index) =>
                product.rated ? null : (
                    <RateEachProduct
                        key={product.product}
                        product={product}
                        rating={rating}
                        setRating={setRating}
                        ratings={ratings}
                        setRatings={setRatings}
                        index={index}
                    />
                ),
            )}
            <AlignRight>
                <Button
                    style={{
                        ...PlatformReusableStyles.PrimaryButtonStyles,
                        width: '100px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => {
                        handleRating();
                    }}
                >
                    Post
                </Button>
            </AlignRight>
        </CenteredDiv>
    );
}
