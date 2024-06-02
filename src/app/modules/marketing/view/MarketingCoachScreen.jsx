import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import CustomerInfoContext from '../../../platform/app/data/CustomerInfoContext';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import ErrorModal from './Modal/ErrorModal';
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
    justify-content: center;
`;
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
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

export default function MarketingCoachScreen() {
    const { getCoachDetails } = useCoachDetail();
    const customer = useContext(CustomerInfoContext);
    const [coaches, setCoach] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const { showModal, hideModal } = useModal();
    const startIndex = currentIndex * 6;
    const endIndex = Math.min(startIndex + 6, coaches.length);
    const coachesPerPage = 6;

    useEffect(() => {
        getCoachDetails().then((data) => {
            setCoach(data);
        });
    }, [getCoachDetails]);

    const index = coaches.length / 6;
    const totalPages = Math.ceil(coaches.length / coachesPerPage);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < totalPages - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleRegister = () => {
        const isCustomerIdUndefined = customer === null;
        if (isCustomerIdUndefined) {
            return showModal({
                modal: (
                    <ErrorModal
                        hideModal={hideModal}
                        title="Please log in to register coach!"
                    />
                ),
            });
        }

        const isRegisteredForOneCoach = coaches.some(
            (coach) => coach.customerID === customer?.customerInfo?.customerID,
        );

        if (isRegisteredForOneCoach) {
            return showModal({
                modal: (
                    <ErrorModal
                        hideModal={hideModal}
                        title="You can only register for one coach! "
                    />
                ),
            });
        }

        navigate('/marketing/coach-registration');
    };

    return (
        <ContentContainer>
            <HeadContainer
                imageUrl={CoachHeadImage}
                top="40%"
                title="Coaches"
            />
            <LinkContainer>
                {/* update action to profile link */}
                <UpdateProfileLink
                    onClick={handleRegister}
                    style={{ cursor: 'pointer' }}
                >
                    <CoachReusableStyle.Text>Coach Registration</CoachReusableStyle.Text>
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
                        coaches.slice(startIndex, endIndex).map((coach) => (
                            <div key={coach.coachId}>
                                <ContentContainer
                                    onClick={() => {
                                        navigate(`/marketing/coach-profile/${coach.coachId}`);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <CoachView
                                        coachImage={coach.file}
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
