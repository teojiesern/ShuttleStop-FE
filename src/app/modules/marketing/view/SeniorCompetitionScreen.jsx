// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import COLORS from '../../../platform/Colors';
// import FONTSIZE from '../../../platform/style/FontSize';
// import FONTWEIGHT from '../../../platform/style/FontWeight';
// <<<<<<< marketing
// =======
// import ReusableStyles from '../../../platform/style/PlatformReusableStyles';
// >>>>>>> main
// import useCompetitionDetail from './hooks/useCompetitionDetail';
// import CompReusableStyles from './style/reusableStyle';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 100%;
// `;

// const Layout = styled.div`
//     width: 100%;
//     display: grid;
//     grid-template-columns: 5fr 1fr 2fr 2fr 2fr 2fr;
//     gap: 3rem;
//     align-items: center;
// `;

// const Title = styled.h1`
//     font-size: ${FONTSIZE.medium};
//     text-align: left;
//     font-weight: ${FONTWEIGHT.SEMI_BOLD};
//     color: ${COLORS.black};
//     text-align: left;
//     margin-bottom: 1rem;
// `;

// export default function MarketingTestScreen() {
//     const { getDetails } = useCompetitionDetail();
//     const [competitionDetails, setCompetitionDetails] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getDetails();
//                 setCompetitionDetails(data.competitions);
//             } catch (error) {
//                 console.error('Error fetching competition details:', error);
//             }
//         };

//         fetchData();
//     }, [getDetails]);

//     const months = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//     ];

//     const renderCompetitionDetailsByMonth = () => {
//         if (!competitionDetails) return null;

//         return months.map((month, index) => {
//             // Filter competition details by month
//             const filteredDetails = competitionDetails.filter(
//                 (competition) => new Date(competition.date).getMonth() === index,
//             );

//             return (
//                 <div key={month}>
//                     <Container>
//                         <Title>{month}</Title>
//                         {filteredDetails.map((detail) => (
// <<<<<<< marketing
//                             <div key={`${detail.compName}-${detail.date}-${detail.state}`}>
// =======
//                             <div key={detail}>
// >>>>>>> main
//                                 <Layout>
//                                     <CompReusableStyles.Text>{detail.compName}</CompReusableStyles.Text>
//                                     <CompReusableStyles.Text>{detail.date}</CompReusableStyles.Text>
//                                     <CompReusableStyles.Text>{detail.state}</CompReusableStyles.Text>
//                                     <CompReusableStyles.Text>{detail.fee}</CompReusableStyles.Text>
//                                     <CompReusableStyles.Text>{detail.deadline}</CompReusableStyles.Text>
//                                     <CompReusableStyles.Text>{detail.prize}</CompReusableStyles.Text>
// <<<<<<< marketing
//                                     <CompReusableStyles.SecondaryButtonStyles href={detail.url}>
//                                         Register
//                                     </CompReusableStyles.SecondaryButtonStyles>
//                                 </Layout>
// =======
//                                     <ReusableStyles.SecondaryButtonStyles href={detail.url}>
//                                         Register
//                                     </ReusableStyles.SecondaryButtonStyles>
//                                 </Layout>
//                                 console.log(detail.compName)
// >>>>>>> main
//                             </div>
//                         ))}
//                     </Container>
//                 </div>
//             );
//         });
//     };

//     return <>{renderCompetitionDetailsByMonth()}</>;
// }
