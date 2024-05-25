import Lottie from 'react-lottie';
import skeleton from '../../animation/skeleton.json';

export default function Skeleton() {
    return (
        <Lottie
            options={{ animationData: skeleton }}
            isClickToPauseDisabled
        />
    );
}
