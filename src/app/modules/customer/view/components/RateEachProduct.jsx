import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FONTSIZE from '../../../../platform/style/FontSize';
import useCustomer from '../hooks/useCustomer';
import RatingBar from './RatingBar';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90%;
    padding: 0 10px;
`;

const AlignLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 10px;
`;

const TextMedium = styled.p`
    font-size: ${FONTSIZE.medium};
`;

export default function RateEachProduct({ product, rating, setRating, ratings, setRatings, index }) {
    const { getProductById } = useCustomer();
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        const fetchProductInfo = async () => {
            const info = await getProductById(product.product);
            setProductInfo(info);
        };

        fetchProductInfo();
    }, [getProductById, product]);

    return (
        <CenteredDiv>
            <AlignLeft>
                <img
                    src={productInfo ? productInfo.thumbnailImage : ''}
                    alt="product"
                    width={60}
                />
                <VerticalContainer>
                    <TextMedium>{productInfo ? productInfo.name : 'product'}</TextMedium>
                </VerticalContainer>
            </AlignLeft>
            <RatingBar
                rating={rating}
                setRating={setRating}
                ratings={ratings}
                setRatings={setRatings}
                index={index}
            />
        </CenteredDiv>
    );
}
