import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import coachPhoto from '../assets/coachPhoto.png';
import star from '../assets/star.png';
import CoachReusableStyles from '../style/reusableStyle';

const DescriptionContainer = styled.div`
    display: flex;
    border-top: 1px solid ${COLORS.black};
`;

const DescriptionLayout = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-left: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
`;
const DescriptionLayout2 = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
`;
const DescriptionWrapper = styled.div`
    background-color: ${COLORS['light-green']};
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export default function CoachView({ coachName, state, level, targetAge, rating }) {
    return (
        <CoachReusableStyles.BorderContainer>
            <Container>
                <img
                    src={coachPhoto}
                    alt="HeadImage"
                    style={{ width: '150px', height: '150px' }}
                />
            </Container>

            <CoachReusableStyles.Title style={{ textAlign: 'center', padding: '10px ' }}>
                {coachName}
            </CoachReusableStyles.Title>

            <CoachReusableStyles.TextDescription style={{ textAlign: 'center', paddingBottom: '20px' }}>
                {state}
            </CoachReusableStyles.TextDescription>
            <DescriptionWrapper>
                <DescriptionContainer>
                    <DescriptionLayout>
                        <CoachReusableStyles.TextDescription>Level</CoachReusableStyles.TextDescription>
                        <CoachReusableStyles.TextDescription>Age</CoachReusableStyles.TextDescription>
                        <CoachReusableStyles.TextDescription>Rating</CoachReusableStyles.TextDescription>
                    </DescriptionLayout>
                </DescriptionContainer>
                <DescriptionLayout2>
                    <CoachReusableStyles.Text style={{ paddingBottom: '20px', paddingLeft: '10px' }}>
                        {level}
                    </CoachReusableStyles.Text>
                    <CoachReusableStyles.Text style={{ paddingBottom: '20px' }}>{targetAge}</CoachReusableStyles.Text>
                    <CoachReusableStyles.Text style={{ paddingBottom: '20px' }}>
                        {rating}
                        <img
                            src={star}
                            alt="HeadImage"
                            style={{ width: '15px', height: '15px', paddingLeft: '5px' }}
                        />
                    </CoachReusableStyles.Text>
                </DescriptionLayout2>
            </DescriptionWrapper>
        </CoachReusableStyles.BorderContainer>
    );
}
