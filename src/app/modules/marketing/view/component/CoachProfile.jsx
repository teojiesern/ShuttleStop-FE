import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ReusableStyle from '../../../../platform/style/PlatformReusableStyles';
import RatingModal from '../Modal/RatingModal';
import ageIcon from '../assets/ageIcon.png';
import coachPic from '../assets/coach.jpeg';
import levelIcon from '../assets/levelIcon.png';
import locationIcon from '../assets/location.png';
import CoachReusableStyle from '../style/reusableStyle';

const ContainerCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const BorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.grey};
    padding: 1.5rem;
`;
const RateContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
`;
const GridContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
`;
const GridDescriptionContainer = styled.div`
    width: 65%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;

const Title = styled.p`
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.BOLD};
    color: ${COLORS.black};
`;

export default function CoachProfile() {
    const location = useLocation();
    const coach = location.state?.coach;
    const [value, setValue] = useState(0);
    const { showModal, hideModal } = useModal();

    const rateNow = useCallback(() => {
        showModal({
            modal: (
                <RatingModal
                    hideModal={hideModal}
                    coach={coach}
                />
            ),
        });
    }, [showModal]);

    useEffect(() => {
        if (coach) {
            setValue(coach.rating); // Set the initial value to coach.rating
        }
    }, [coach]);

    return (
        <CoachReusableStyle.ContainerColumn>
            <CoachReusableStyle.ContainerRow>
                <GridContainer>
                    <img
                        src={coachPic}
                        alt="coach"
                        width="200px"
                        height="200px"
                    />
                    <ContainerCol>
                        <Title>{coach.coachName}</Title>
                        <br />
                        <CoachReusableStyle.ContainerRow style={{ paddingBottom: '40px', paddingTop: '20px' }}>
                            <img
                                src={locationIcon}
                                alt="location"
                                width="20px"
                                height="20px"
                            />
                            <CoachReusableStyle.TextDescription>{coach.state}</CoachReusableStyle.TextDescription>
                        </CoachReusableStyle.ContainerRow>
                        <CoachReusableStyle.ContainerRow style={{ paddingBottom: '40px' }}>
                            <img
                                src={levelIcon}
                                alt="location"
                                width="20px"
                                height="20px"
                            />
                            <CoachReusableStyle.TextDescription>{coach.level}</CoachReusableStyle.TextDescription>
                        </CoachReusableStyle.ContainerRow>
                        <CoachReusableStyle.ContainerRow>
                            <img
                                src={ageIcon}
                                alt="location"
                                width="20px"
                                height="20px"
                            />
                            <CoachReusableStyle.TextDescription>{coach.targetAge}</CoachReusableStyle.TextDescription>
                        </CoachReusableStyle.ContainerRow>
                    </ContainerCol>
                    <br />

                    <CoachReusableStyle.ContainerRow>
                        <CoachReusableStyle.TextDescription style={{ paddingTop: '4px' }}>
                            {coach.rating.toFixed(1)}
                        </CoachReusableStyle.TextDescription>
                        <Rating
                            name="read-only"
                            value={value}
                            readOnly
                            padding="none"
                        />
                    </CoachReusableStyle.ContainerRow>
                    <BorderContainer>
                        <CoachReusableStyle.TextDescription style={{ paddingBottom: '20px' }}>
                            <span>Fee per Session</span>
                            <span style={{ marginLeft: '180px' }}>RM{coach.feePerSession}</span>
                        </CoachReusableStyle.TextDescription>
                        <CoachReusableStyle.TextDescription style={{ paddingBottom: '20px' }}>
                            <span>Monthly(4sessions)</span>
                            <span style={{ marginLeft: '150px' }}>RM{coach.feePerSession * 4}</span>
                        </CoachReusableStyle.TextDescription>
                        <CoachReusableStyle.TextDescription style={{ paddingBottom: '35px' }}>
                            <span>Monthly(8sessions)</span>
                            <span style={{ marginLeft: '150px' }}>RM{coach.feePerSession * 8}</span>
                        </CoachReusableStyle.TextDescription>
                        <Button
                            onClick={() => {
                                window.open(`tel:${coach.contact}`);
                            }}
                            style={ReusableStyle.PrimaryButtonStyles}
                        >
                            Contact Now
                        </Button>
                    </BorderContainer>
                </GridContainer>
            </CoachReusableStyle.ContainerRow>
            <GridDescriptionContainer>
                <CoachReusableStyle.BorderContainerRow>
                    <CoachReusableStyle.TextDescription>Qualification</CoachReusableStyle.TextDescription>
                    <CoachReusableStyle.Text style={{ paddingLeft: '20px', lineHeight: '1.5' }}>
                        {coach.qualification}
                    </CoachReusableStyle.Text>
                </CoachReusableStyle.BorderContainerRow>
                <CoachReusableStyle.BorderContainerRow>
                    <CoachReusableStyle.TextDescription>Experience</CoachReusableStyle.TextDescription>
                    <CoachReusableStyle.Text style={{ paddingLeft: '35px', lineHeight: '1.5' }}>
                        {coach.experience}
                    </CoachReusableStyle.Text>
                </CoachReusableStyle.BorderContainerRow>
                <CoachReusableStyle.BorderContainerRow>
                    <CoachReusableStyle.TextDescription>Archivement</CoachReusableStyle.TextDescription>
                    <CoachReusableStyle.Text style={{ paddingLeft: '20px', lineHeight: '1.5' }}>
                        {coach.archivement}
                    </CoachReusableStyle.Text>
                </CoachReusableStyle.BorderContainerRow>
                <CoachReusableStyle.BorderContainerRow>
                    <CoachReusableStyle.TextDescription>Time slots</CoachReusableStyle.TextDescription>
                    <CoachReusableStyle.Text style={{ paddingLeft: '50px', lineHeight: '1.5' }}>
                        {coach.timeslot.split('\n').map((slot) => (
                            <p
                                key={slot}
                                style={{ marginBottom: '20px' }}
                            >
                                {slot}
                            </p>
                        ))}
                    </CoachReusableStyle.Text>
                </CoachReusableStyle.BorderContainerRow>
                <CoachReusableStyle.BorderContainerRow>
                    <CoachReusableStyle.TextDescription>Location</CoachReusableStyle.TextDescription>
                    <CoachReusableStyle.Text style={{ paddingLeft: '53px', lineHeight: '1.5' }}>
                        {' '}
                        {coach.location}
                    </CoachReusableStyle.Text>
                </CoachReusableStyle.BorderContainerRow>
                <CoachReusableStyle.BorderContainerRow>
                    <RateContainer>
                        <CoachReusableStyle.ContainerRow>
                            <CoachReusableStyle.TextDescription style={{ paddingTop: '4px' }}>
                                {coach.rating.toFixed(1)}
                            </CoachReusableStyle.TextDescription>
                            <Rating
                                name="read-only"
                                value={value}
                                readOnly
                            />
                        </CoachReusableStyle.ContainerRow>

                        <Button
                            onClick={rateNow}
                            style={ReusableStyle.OutlineButtonStyles}
                        >
                            Rate Now
                        </Button>
                    </RateContainer>
                </CoachReusableStyle.BorderContainerRow>
            </GridDescriptionContainer>
        </CoachReusableStyle.ContainerColumn>
    );
}
