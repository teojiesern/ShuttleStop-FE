import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CompetitionLinkModal from './Modal/CompetitionLink';
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

// const NavLinkContainer = styled.div`
//     display: flex;
//     gap: 4rem;
//     position: absolute; /* Add absolute positioning */
//     bottom: 0; /* Position at the bottom */
//     left: 50%; /* Align center horizontally */
//     transform: translateX(-50%); /* Center horizontally */
//     padding: 0rem; /* Add padding for better visibility */
// `;

// const StyledNavLink = styled(NavLink)`
//     font-size: ${FONTSIZE.small};
//     font-weight: ${FONTWEIGHT.SEMI_BOLD};
//     color: ${COLORS.black};
//     text-decoration: none;
// `;
const Sort = styled.div`
    text-align: left;
    padding-left: 2rem;
    font-size: ${FONTSIZE['x-small']};
    color: ${COLORS.darkGrey};
`;

const CompLink = styled.div`
    text-align: right;
    padding-right: 2rem;
    font-size: ${FONTSIZE['x-small']};
    color: ${COLORS.darkGrey};
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
    padding-left: 2rem;
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
    padding-left: 2rem;
    padding-top: 2rem;
`;

export default function CompetitionLayout() {
    const { showModal, hideModal } = useModal();

    const pressLink = useCallback(() => {
        showModal({
            modal: <CompetitionLinkModal hideModal={hideModal} />,
        });
    }, [showModal]);

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
            console.log('Original competitions:', data.competitions);

            const shouldFilterByYear = selectedYear !== undefined && selectedYear !== null;

            const filteredCompetitions = shouldFilterByYear
                ? data.competitions.filter((competition) => {
                      const competitionYear = new Date(competition.date).getFullYear();
                      const selectedYearNum = Number(selectedYear);

                      if (selectedYearNum === 0) {
                          return true;
                      }

                      return competitionYear === selectedYearNum;
                  })
                : data.competitions; // If no year is provided, return all competitions

            setFiltered(filteredCompetitions);
            console.log('Filtered competitions:', filteredCompetitions);
        });
    }, [getDetails, selectedYear]);

    const renderCompetitionDetailsByMonth = () => {
        if (filtered === null || filtered === undefined) {
            return <p>There are no competitions yet...</p>;
        }

        return months.map((month, index) => {
            // Filter competition details by month
            const filteredDetails = filtered.filter((competition) => new Date(competition.date).getMonth() === index);
            console.log(filteredDetails);
            if (filteredDetails.length === 0) {
                return null;
            }

            return (
                <div key={month}>
                    <Title>{month}</Title>
                    <ContentContainer>
                        {filteredDetails.map((competitions) => (
                            <div key={competitions.compID}>
                                <ContentContainer>
                                    <Layout>
                                        <CompReusableStyles.Text>{competitions.compName}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.date}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.state}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.fee}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.deadline}</CompReusableStyles.Text>
                                        <CompReusableStyles.Text>{competitions.prize}</CompReusableStyles.Text>
                                        <Button
                                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                                            onClick={() => {
                                                window.location.href = competitions.url;
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
                        <p>Sort By</p>
                    </Sort>
                    <DropDownContainer>
                        <Dropdown
                            options={years}
                            onChange={handleYearChange}
                        />
                    </DropDownContainer>
                </HeaderLeft>
                <HeaderRight>
                    <CompLink onClick={pressLink}>
                        <p>Promote Competition</p>
                    </CompLink>
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
            <Line />

            <ContentContainer>{renderCompetitionDetailsByMonth()}</ContentContainer>
        </ContentContainer>
    );
}
