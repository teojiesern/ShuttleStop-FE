import { useCallback, useEffect, useState } from 'react';

const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onDotButtonClick = useCallback(
        (index) => {
            console.log('index', index);
            if (!emblaApi) return;
            console.log('in heres');
            emblaApi.scrollTo(index);
        },
        [emblaApi],
    );

    const onInit = useCallback((innerEmblaApi) => {
        setScrollSnaps(innerEmblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((innerEmblaApi) => {
        setSelectedIndex(innerEmblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

export default useDotButton;
