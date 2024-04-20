import { Button } from '@mui/material';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import logoTitan from '../assets/logoTitan.png';
import racquet from '../assets/racquet.png';
import RatingBar from '../components/RatingBar';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 60vh;
    width: 100%;
    padding: 0 10px;
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

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 10px;
`;

const Title = styled.p`
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const TextMedium = styled.p`
    font-size: ${FONTSIZE.medium};
`;

const TextMediumGrey = styled.p`
    font-size: ${FONTSIZE.large};
    color: ${COLORS.darkGrey};
`;

export default function RateProductModal(props) {
    const { rating, setRating, setRatingSubmitted } = props;

    const { hideModal } = useModal();

    return (
        <CenteredDiv>
            <Title>Rate Product</Title>
            <AlignLeft>
                <Seller>
                    <img
                        src={logoTitan}
                        alt="seller logo"
                        width={40}
                        style={{ border: `2px solid ${COLORS.black}`, borderRadius: '50%' }}
                    />
                    <TextMedium>Titan Badminton Store</TextMedium>
                </Seller>
            </AlignLeft>
            <hr style={{ border: `solid 1px ${COLORS.grey}`, width: '90%', margin: 0 }} />
            <AlignLeft>
                <img
                    src={racquet}
                    alt="product"
                    width={60}
                />
                <VerticalContainer>
                    <TextMedium>YONEX ASTOX 77PRO</TextMedium>
                    <TextMediumGrey>Red</TextMediumGrey>
                </VerticalContainer>
            </AlignLeft>
            <RatingBar
                rating={rating}
                setRating={setRating}
            />
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
                        setRatingSubmitted(true);
                        hideModal();
                    }}
                >
                    Post
                </Button>
            </AlignRight>
        </CenteredDiv>
    );
}
