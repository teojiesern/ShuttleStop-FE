import { useEffect } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieAddToCart from '../../../../platform/animation/lottieAddToCart.json';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 60vh;
    width: 100%;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE['xxx-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function AddCartModal() {
    const { hideModal } = useModal();

    useEffect(() => {
        const timer = setTimeout(() => {
            hideModal();
        }, 2000);

        return () => clearTimeout(timer);
    });

    return (
        <CenteredDiv>
            <Lottie
                options={{ animationData: lottieAddToCart }}
                isClickToPauseDisabled
                width={250}
                height={250}
            />
            <Title>Product is added to cart</Title>{' '}
        </CenteredDiv>
    );
}
