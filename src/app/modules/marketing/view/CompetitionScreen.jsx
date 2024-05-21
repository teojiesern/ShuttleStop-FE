import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CompetitionLinkModal from './Modal/CompetitionLink';
import arrowRight from './assets/arrowRight.png';
import HeadImage from './assets/image.png';
import Line from './component/Border';
import Dropdown from './component/DropDownYear';
import HeadContainer from './component/HeadContainer';
import useCompetitionDetail from './hooks/useCompetitionDetail';
import CompReusableStyles from './style/reusableStyle';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: relative;
`;

const DropDownContainer = styled.div`
    border: 2px solid ${COLORS.grey};
    padding: 0.2rem;
`;

const Sort = styled.div`
    text-align: left;
    font-size: ${FONTSIZE['x-small']};
    color: ${COLORS.darkGrey};
`;

const CompLink = styled.div`
    text-align: right;
    padding-right: 0.5rem;
    cursor: pointer;
`;

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;
const Layout = styled.div`
    width: 100%;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    text-align: left;
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
    text-align: left;
    margin-bottom: 1rem;
    padding-top: 1rem;
`;

export default function CompetitionScreen() {
    const { showModal, hideModal } = useModal();

    const years = Array.from({ length: 4 }, (_, index) => 2024 + index);
    const { getDetails } = useCompetitionDetail();
    const [filtered, setFiltered] = useState(null);
    const [selectedYear, setSelectedYear] = useState();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    useEffect(() => {
        if (selectedYear !== undefined) {
            // Perform any other actions based on the updated selectedYear
            console.log('Selected year has changed:', selectedYear);
        }
    }, [selectedYear]);

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    useEffect(() => {
        getDetails().then((data) => {
            const shouldFilterByYear = selectedYear !== undefined && selectedYear !== null;

            const filteredCompetitions = shouldFilterByYear
                ? data.filter((competition) => {
                      const competitionYear = new Date(competition.date).getFullYear();
                      const selectedYearNum = Number(selectedYear);

                      if (selectedYearNum === 0) {
                          return true;
                      }

                      return competitionYear === selectedYearNum;
                  })
                : data; // If no year is provided, return all competitions

            setFiltered(filteredCompetitions);
        });
    }, [getDetails, selectedYear]);

    const addNewCompetition = useCallback((newCompetition) => {
        setFiltered((prevFiltered) => [...prevFiltered, newCompetition]);
    }, []);

    const pressLink = useCallback(() => {
        showModal({
            modal: (
                <CompetitionLinkModal
                    hideModal={hideModal}
                    onSave={addNewCompetition}
                />
            ),
        });
    }, [showModal, hideModal, addNewCompetition]);

    const renderCompetitionDetailsByMonth = () => {
        if (filtered === null || filtered === undefined) {
            return <p>There are no competitions yet...</p>;
        }

        return months.map((month, index) => {
            // Filter competition details by month
            const filteredDetails = filtered.filter((competition) => new Date(competition.date).getMonth() === index);
            if (filteredDetails.length === 0) {
                return null;
            }

            return (
                <div key={month}>
                    <Title>{month}</Title>
                    <ContentContainer>
                        {filteredDetails.map((competitions) => (
                            // eslint-disable-next-line no-underscore-dangle
                            <div key={competitions.competitionId}>
                                <ContentContainer>
                                    <Layout>
                                        <CompReusableStyles.Text>{competitions.name}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>
                                            {new Date(competitions.date).toLocaleDateString('en-GB')}
                                        </CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.state}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.fee}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>
                                            {new Date(competitions.deadline).toLocaleDateString('en-GB')}
                                        </CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.prize}</CompReusableStyles.Text>
                                        <Button
                                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                                            onClick={() => {
                                                window.open(competitions.url, '_blank');
                                            }}
                                        >
                                            Register
                                        </Button>
                                    </Layout>
                                </ContentContainer>
                                <br />
                                <Line />
                            </div>
                        ))}
                    </ContentContainer>
                </div>
            );
        });
    };

    return (
        <ContentContainer>
            <ContentContainer>
                <HeadContainer
                    imageUrl={HeadImage}
                    top="48%"
                    title="Competitions"
                />
            </ContentContainer>

            <HeaderRow>
                <HeaderLeft>
                    <Sort>
                        <CompReusableStyles.TextDescription>Sort By</CompReusableStyles.TextDescription>
                    </Sort>
                    <DropDownContainer>
                        <Dropdown
                            options={years}
                            onChange={handleYearChange}
                        />
                    </DropDownContainer>
                </HeaderLeft>
                <HeaderRight onClick={pressLink}>
                    <CompLink>
                        <CompReusableStyles.TextDescription>Promote Competition</CompReusableStyles.TextDescription>
                    </CompLink>
                    <img
                        src={arrowRight}
                        alt="arrow"
                        width="20px"
                        height="20px"
                    />
                </HeaderRight>
            </HeaderRow>

            <Layout>
                <CompReusableStyles.TextDescription>Competition</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>Dates</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>State</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>Fee</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>Deadline</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>Prize</CompReusableStyles.TextDescription>
                <CompReusableStyles.TextDescription>Register</CompReusableStyles.TextDescription>
            </Layout>

            <ContentContainer>{renderCompetitionDetailsByMonth()}</ContentContainer>
        </ContentContainer>
    );
}
