import CoachHeadImage from './assets/coachesHead.png';
import HeadContainer from './component/HeadContainer'; // Import the HeadContainer component

export default function MarketingTestScreenTwo() {
    return (
        <div>
            <HeadContainer
                imageUrl={CoachHeadImage}
                top="40%"
                title="Coaches"
            />
        </div>
    );
}
