import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import DotButton from './DotButton';
import useDotButton from './useDotButton';

const EmblaViewPort = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const EmblaContainer = styled.div`
    display: flex;
`;

const EmblaSlide = styled.div`
    flex: 0 0 100%;
    min-width: 0;
`;

const EmblaImage = styled.img`
    width: 100%;
`;

const StyledDotButtonContainer = styled.div`
    bottom: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 5rem 0 2rem 0;
    position: absolute;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

export default function EmblaCarousel({ banners }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <EmblaViewPort ref={emblaRef}>
            <EmblaContainer>
                {banners.map((banner) => (
                    <EmblaSlide key={banner.id}>
                        <EmblaImage src={banner.url} />
                    </EmblaSlide>
                ))}
            </EmblaContainer>
            <StyledDotButtonContainer>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        selected={index === selectedIndex}
                    />
                ))}
            </StyledDotButtonContainer>
        </EmblaViewPort>
    );
}
