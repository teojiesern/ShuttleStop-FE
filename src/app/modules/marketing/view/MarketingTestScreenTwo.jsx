import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import arrowLeft from './assets/arrowLeft.png';
import arrowRight from './assets/arrowRight.png';
import CoachHeadImage from './assets/coachesHead.png';
import CoachView from './component/CoachView';
import HeadContainer from './component/HeadContainer'; // Import the HeadContainer component
import useCoachDetail from './hooks/useCoachDetail';
import CoachReusableStyle from './style/reusableStyle';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;
const CoachContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    padding-left: 5rem;
`;
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;
    align-item: center;
    justify-content: center;
`;
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-item: flex-end;
    justify-content: flex-end;
`;
const CoachesLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
`;
const UpdateProfileLink = styled.div`
    text-align: right;
    padding-right: 1rem;
    font-size: ${FONTSIZE['x-small']};
    color: ${COLORS.darkGrey};
    cursor: pointer;
    padding-bottom: 2rem;
`;

export default function MarketingTestScreenTwo() {
    const { getCoachDetails } = useCoachDetail();
    const [coaches, setCoach] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getCoachDetails().then((data) => {
            setCoach(data.coach);
        });
    }, [getCoachDetails]);
    console.log(coaches);

    const index = coaches.length / 8;

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < Math.ceil(index) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <ContentContainer>
            <HeadContainer
                imageUrl={CoachHeadImage}
                top="43%"
                title="Coaches"
            />
            <LinkContainer>
                {/* update action to profile link */}
                <UpdateProfileLink
                    onClick={() => navigate('/marketing/coach-registration')}
                    style={{ cursor: 'pointer' }}
                >
                    <CoachReusableStyle.Text>Coach Registeration</CoachReusableStyle.Text>
                </UpdateProfileLink>
                <img
                    src={arrowRight}
                    alt="arrow"
                    width="20px"
                    height="20px"
                />
            </LinkContainer>

            <CoachContainer>
                <CoachesLayout>
                    {coaches.length === 0 ? (
                        <p>No coach available</p>
                    ) : (
                        coaches.slice(currentIndex * 6, currentIndex * 6 + 6).map((coach) => (
                            <div key={coach.coachID}>
                                <ContentContainer
                                    onClick={() => navigate('/marketing/coach-profile', { state: { coach } })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <CoachView
                                        coachName={coach.coachName}
                                        state={coach.state}
                                        level={coach.level}
                                        targetAge={coach.targetAge}
                                        rating={coach.rating}
                                    />
                                </ContentContainer>
                            </div>
                        ))
                    )}
                </CoachesLayout>
            </CoachContainer>
            <NavContainer>
                <Button onClick={handlePrevClick}>
                    <img
                        src={arrowLeft}
                        alt="arrow"
                        width="25px"
                        height="25px"
                    />
                </Button>
                {Array.from({ length: Math.ceil(index) }, (_, i) => (
                    <Button
                        key={i}
                        selected={currentIndex === i}
                        onClick={() => setCurrentIndex(i)}
                        style={{
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                            backgroundColor: currentIndex === i ? COLORS.green : COLORS['light-grey'],
                            cursor: 'pointer',
                        }}
                    >
                        <CoachReusableStyle.Text> {i + 1}</CoachReusableStyle.Text>
                    </Button>
                ))}
                <Button onClick={handleNextClick}>
                    <img
                        src={arrowRight}
                        alt="arrow"
                        width="25px"
                        height="25px"
                    />
                </Button>
            </NavContainer>
        </ContentContainer>
    );
}
