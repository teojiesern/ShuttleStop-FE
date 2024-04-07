import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import Footer from '../../../platform/components/Footer/Footer';
import Header from '../../../platform/components/Header/Header';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import homeBanner from '../data/homeBanner';
import homeBanner2 from '../data/homeBanner2';
import homeBanner3 from '../data/homeBanner3';
import homeCoachesLists from '../data/homeCoachesLists';
import homeProductsLists from '../data/homeProductsLists';
import Star from './assets/star.svg';
import EmblaCarousel from './component/Embla/EmblaCarousel';

const RootContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 0;
    min-height: calc(100vh - 4rem);
`;

const PaddingHorizontal = styled.div`
    padding: 0 5rem;
`;

const ContentContainer = styled.div`
    margin: 1rem 0 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${COLORS['bg-light-grey']};
`;

const DisplayContainer = styled.div`
    padding: 2rem 5rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    box-sizing: border-box;
`;

const DisplayHeader = styled.h2`
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const DisplayList = styled.div`
    display: flex;
    overflow-x: auto;
    width: 100%;
    gap: 2rem;
    box-sizing: border-box;
    overflow-y: hidden;
`;

const DisplayCard = styled.div`
    position: relative;
    display: flex;
    flex: 0 0 auto;
    /* 6rem is gap of 2rem * 3, divide by 4 because we wanted 4 cards on view */
    width: calc((100% - 6rem) / 4);
    box-sizing: border-box;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background-color: ${COLORS.white};
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const CoachAvatar = styled.img`
    border-radius: 100%;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
`;

const CoachProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    /* side effect because of hack */
    padding-bottom: 4rem;
`;

const TextMdSemiBold = styled.p`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const TextSmRegular = styled.p`
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.REGULAR};
`;

const CoachSummary = styled.div`
    display: flex;
    width: 100%;
    background-color: ${COLORS['neutral-green']};
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    /* hacks, do not follow */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const CoachLabel = styled.p`
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.REGULAR};
`;

const CoachTitle = styled.p`
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const CoachDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`;

export default function MainScreen() {
    const navigate = useNavigate();

    const mockData = [];
    for (let i = 0; i < 6; i++) {
        mockData.push(
            <DisplayCard>
                <CoachProfile>
                    <CoachAvatar src={homeCoachesLists.image} />
                    <TextMdSemiBold>{homeCoachesLists.name}</TextMdSemiBold>
                    <TextSmRegular style={{ color: COLORS.darkGrey }}>{homeCoachesLists.location}</TextSmRegular>
                </CoachProfile>
                <CoachSummary>
                    <CoachDetailContainer>
                        <CoachLabel>Level:</CoachLabel>
                        <CoachTitle>{homeCoachesLists.level}</CoachTitle>
                    </CoachDetailContainer>
                    <CoachDetailContainer>
                        <CoachLabel>Age:</CoachLabel>
                        <CoachTitle>{homeCoachesLists.age}</CoachTitle>
                    </CoachDetailContainer>
                    <CoachDetailContainer>
                        <CoachLabel>Rating:</CoachLabel>
                        <CoachTitle>
                            {/* TODO: maybe revisit this to see if can center align the star */}
                            {homeCoachesLists.rating} <img src={Star} />
                        </CoachTitle>
                    </CoachDetailContainer>
                </CoachSummary>
            </DisplayCard>,
        );
    }

    return (
        <RootContainer>
            <PaddingHorizontal>
                <Header />
            </PaddingHorizontal>

            <ContentContainer>
                <EmblaCarousel banners={homeBanner} />

                <DisplayContainer>
                    <DisplayHeader>Browse by Product</DisplayHeader>
                    <DisplayList>
                        {homeProductsLists.map((product) => (
                            <DisplayCard
                                key={product.name}
                                onClick={() => navigate(`customer/${product.name.toLowerCase()}`)}
                            >
                                <img src={product.url} />
                                <TextMdSemiBold>{product.name}</TextMdSemiBold>
                            </DisplayCard>
                        ))}
                    </DisplayList>
                </DisplayContainer>

                <EmblaCarousel banners={homeBanner2} />

                <DisplayContainer>
                    <DisplayHeader>Find your Coach</DisplayHeader>
                    <DisplayList>{mockData}</DisplayList>
                </DisplayContainer>

                <EmblaCarousel banners={homeBanner3} />
            </ContentContainer>

            <PaddingHorizontal>
                <Footer />
            </PaddingHorizontal>
        </RootContainer>
    );
}
