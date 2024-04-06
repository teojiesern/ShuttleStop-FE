import styled from 'styled-components';
import Footer from '../../../platform/components/Footer/Footer';
import Header from '../../../platform/components/Header/Header';
import homeBanner from '../data/homeBanner';
import EmblaCarousel from './component/Embla/EmblaCarousel';

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 0;
    min-height: calc(100vh - 4rem);
`;

const PaddingHorizontal = styled.div`
    padding: 0 5rem;
`;

const ContentContainer = styled.div`
    margin: 2rem 0;
    display: flex;
`;

export default function MainScreen() {
    return (
        <Container>
            <PaddingHorizontal>
                <Header />
            </PaddingHorizontal>

            <ContentContainer>
                <EmblaCarousel banners={homeBanner} />
            </ContentContainer>

            <PaddingHorizontal>
                <Footer />
            </PaddingHorizontal>
        </Container>
    );
}
