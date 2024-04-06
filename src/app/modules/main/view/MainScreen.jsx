import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import Footer from '../../../platform/components/Footer/Footer';
import Header from '../../../platform/components/Header/Header';
import homeBanner from '../data/homeBanner';
import homeBanner2 from '../data/homeBanner2';
import homeBanner3 from '../data/homeBanner3';
import EmblaCarousel from './component/Embla/EmblaCarousel';

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 0;
    min-height: calc(100vh - 4rem);
    background-color: ${COLORS['bg-light-grey']};
`;

const PaddingHorizontal = styled.div`
    padding: 0 5rem;
`;

const ContentContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export default function MainScreen() {
    return (
        <Container>
            <PaddingHorizontal>
                <Header />
            </PaddingHorizontal>

            <ContentContainer>
                <EmblaCarousel banners={homeBanner} />
                <EmblaCarousel banners={homeBanner2} />
                <EmblaCarousel banners={homeBanner3} />
            </ContentContainer>

            <PaddingHorizontal>
                <Footer />
            </PaddingHorizontal>
        </Container>
    );
}
