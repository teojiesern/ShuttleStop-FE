
// import { useCallback, useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import COLORS from '../../../platform/Colors';
// import useModal from '../../../platform/modal/useModal';
// import FONTSIZE from '../../../platform/style/FontSize';
// import CompetitionLinkModal from './Modal/CompetitionLink';
// import HeadImage from './assets/image.png';
// import Line from './component/Border';
// import Dropdown from './component/DropDownYear';
// import HeadContainer from './component/HeadContainer';
// import useCompetitionDetail from './hooks/useCompetitionDetail';
// import CompReusableStyles from './style/reusableStyle';

// const ContentContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 100%;
//     position: relative;
// `;

// const DropDownContainer = styled.div`
//     border: 2px solid ${COLORS.grey};
//     padding: 0.2rem;
// `;

// const Sort = styled.div`
//     text-align: left;
//     padding-left: 2rem;
//     font-size: ${FONTSIZE['x-small']};
//     color: ${COLORS.darkGrey};
// `;

// const CompLink = styled.div`
//     text-align: right;
//     padding-right: 2rem;
//     font-size: ${FONTSIZE['x-small']};
//     color: ${COLORS.darkGrey};
//     cursor: pointer;
// `;

// const HeaderRow = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const HeaderLeft = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 2rem;
// `;

// const HeaderRight = styled.div`
//     display: flex;
//     align-items: center;
// `;
// const Layout = styled.div`
//     width: 100%;
//     padding-top: 2rem;
//     padding-left: 2rem;
//     display: grid;
//     grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
//     gap: 2rem;
//     align-items: center;
// `;

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 100%;
// `;

// const Title = styled.h1`
//     font-size: ${FONTSIZE.medium};
//     text-align: left;
//     font-weight: ${FONTWEIGHT.SEMI_BOLD};
//     color: ${COLORS.black};
//     text-align: left;
//     margin-bottom: 1rem;
// `;

// export default function CompetitionLayout() {
//     const { showModal, hideModal } = useModal();
//     const { getDetails } = useCompetitionDetail();
//     const [selectedYear, setSelectedYear] = useState(2024); // Set default year
//     const [competitionDetails, setCompetitionDetails] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getDetails(selectedYear);
//                 setCompetitionDetails(data);
//             } catch (error) {
//                 console.error('Error fetching competition details:', error);
//             }
//         };

//         fetchData();
//     }, [selectedYear, getDetails]);

//     const years = Array.from({ length: 4 }, (_, index) => 2024 + index);

//     const handleYearChange = useCallback((year) => {
//         setSelectedYear(year);
//     }, []);

//     const pressLink = useCallback(() => {
//         showModal({
//             modal: <CompetitionLinkModal hideModal={hideModal} />,
//         });
//     }, [showModal, hideModal]);

//     return (
//         <ContentContainer>
//             <HeadContainer
//                 imageUrl={HeadImage}
//                 top="48%"
//                 title="Competitions"
//             />

//             <HeaderRow>
//                 <HeaderLeft>
//                     <Sort>
//                         <p>Sort By</p>
//                     </Sort>
//                     <DropDownContainer>
//                         <Dropdown
//                             options={years}
//                             onChange={handleYearChange}
//                         />
//                     </DropDownContainer>
//                 </HeaderLeft>
//                 <HeaderRight>
//                     <CompLink onClick={pressLink}>
//                         <p>Promote Competition</p>
//                     </CompLink>
//                 </HeaderRight>
//             </HeaderRow>

//             <Layout>
//                 <CompReusableStyles.Text>Competition</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>Dates</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>State</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>Fee</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>Deadline</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>Prize</CompReusableStyles.Text>
//                 <CompReusableStyles.Text>Register</CompReusableStyles.Text>
//             </Layout>
//             <Line />

//             <Outlet />
//         </ContentContainer>
//     );
// }

