import { useCallback, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import NavLinkStylesUtil from '../../../platform/utils/NavLinkStylesUtil';
import CompetitionLinkModal from '../view/Modal/CompetitionLink';
import HeadImage from '../view/assets/image.png';
import Line from '../view/component/Border';
import Dropdown from '../view/component/DropDownYear';
import HeadContainer from '../view/component/HeadContainer';
import useCompetitionDetail from '../view/hooks/useCompetitionDetail';
import CompReusableStyles from '../view/style/reusableStyle';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: relative;
`;

const NavLinkContainer = styled.div`
    display: flex;
    gap: 4rem;
    position: absolute; /* Add absolute positioning */
    bottom: 0; /* Position at the bottom */
    left: 50%; /* Align center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    padding: 0rem; /* Add padding for better visibility */
`;

const StyledNavLink = styled(NavLink)`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
    text-decoration: none;
`;
const Sort = styled.div`
    text-align: left;
    padding-left: 2rem;
    font-size: ${FONTSIZE.medium};
    color: ${COLORS.darkGrey};
`;

const CompLink = styled.div`
    text-align: right;
    padding-right: 2rem;
    font-size: ${FONTSIZE.medium};
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
    padding-top: 2rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
`;

export default function CompetitionLayout() {
    const { showModal, hideModal } = useModal();

    const pressLink = useCallback(() => {
        showModal({
            modal: <CompetitionLinkModal hideModal={hideModal} />,
        });
    }, [showModal]);

    const [setSelectedYear] = useState();
    const { getDetails } = useCompetitionDetail();

    // const navigate = useNavigate();

    const years = Array.from({ length: 4 }, (_, index) => 2024 + index);

    const handleYearChange = (year) => {
        setSelectedYear(year);
        //  navigate(`/senior/${year}`);
        getDetails(year).then((filteredCompetitions) => {
            console.log(filteredCompetitions);
        });
    };

    return (
        <div>
            <ContentContainer>
                <HeadContainer
                    imageUrl={HeadImage}
                    top="48%"
                    title="Competitions"
                />
                <NavLinkContainer>
                    <StyledNavLink
                        style={NavLinkStylesUtil.activeStyle}
                        to=""
                        end
                    >
                        JUNIOR
                    </StyledNavLink>
                    <StyledNavLink
                        style={NavLinkStylesUtil.activeStyle}
                        to="senior"
                    >
                        SENIOR
                    </StyledNavLink>
                </NavLinkContainer>
                <Line />
            </ContentContainer>
            <h1>
                <br />
                <br />
            </h1>
            <HeaderRow>
                <HeaderLeft>
                    <Sort>Sort By</Sort>
                    <div>
                        <Dropdown
                            options={years}
                            onChange={handleYearChange}
                        />
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <CompLink onClick={pressLink}>Promote Competition</CompLink>
                </HeaderRight>
            </HeaderRow>

            <Layout>
                <CompReusableStyles.Text>Competition</CompReusableStyles.Text>
                <CompReusableStyles.Text>Dates</CompReusableStyles.Text>
                <CompReusableStyles.Text>State</CompReusableStyles.Text>
                <CompReusableStyles.Text>Fee</CompReusableStyles.Text>
                <CompReusableStyles.Text>Deadline</CompReusableStyles.Text>
                <CompReusableStyles.Text>Prize</CompReusableStyles.Text>
                <CompReusableStyles.Text>Register</CompReusableStyles.Text>
            </Layout>
            <Line />
            <Outlet />
        </div>
    );
}
