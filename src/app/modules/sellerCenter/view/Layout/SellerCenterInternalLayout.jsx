import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import SellerCenterSideNav from '../components/SellerCenterSideNav';

const Container = styled.div`
    display: flex;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const BorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
`;

const ContentHeader = styled.h1`
    font-size: ${FONTSIZE['x-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const formatPathName = (pathName) =>
    pathName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

export default function SellerCenterInternalLayout() {
    const location = useLocation();
    const pathName = location.pathname.split('/')[2];

    return (
        <Container>
            <SellerCenterSideNav />
            <ContentContainer>
                <ContentHeader>{formatPathName(pathName)}</ContentHeader>
                <BorderContainer>
                    <Outlet />
                </BorderContainer>
            </ContentContainer>
        </Container>
    );
}
