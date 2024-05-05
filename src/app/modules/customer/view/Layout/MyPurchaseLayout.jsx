import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import SellerCenterSideNav from '../components/MyAccountSideNav';
import MyPurchaseHeader from '../components/MyPurchaseHeader';

const Container = styled.div`
    display: flex;
    margin-top: 1.5rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const ContentHeader = styled.h1`
    font-size: ${FONTSIZE['x-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function MyPurchaseLayout() {
    return (
        <Container>
            <SellerCenterSideNav />
            <ContentContainer>
                <ContentHeader>My Purchase</ContentHeader>
                <MyPurchaseHeader />
                <Outlet />
            </ContentContainer>
        </Container>
    );
}
