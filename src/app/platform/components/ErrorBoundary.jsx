import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../Colors';
import Logo from '../icons/logo.svg';
import RootError from '../icons/rootError.svg';
import FONTSIZE from '../style/FontSize';
import FONTWEIGHT from '../style/FontWeight';

const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 5rem;
    min-height: calc(100vh - 10rem);
`;

const StyledLogo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
`;

const ContentDescription = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

const ContentImg = styled.img`
    flex: 1;
`;

const StyledH1 = styled.h1`
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE['xxx-large']};
`;

const StyledH2 = styled.h2`
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-size: ${FONTSIZE.large};
`;

const StyledDescription = styled.p`
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE.medium};
`;

export default function ErrorBoundary() {
    return (
        <LayoutContainer>
            <StyledLogo to="/">
                <img
                    src={Logo}
                    width={500}
                />
            </StyledLogo>

            <ContentContainer>
                <ContentDescription>
                    <StyledH1>So Sorry 😔</StyledH1>
                    <StyledH2>An unexpected error has been encountered</StyledH2>
                    <StyledDescription>
                        We are currently looking into this issue, we are deeply sorry for any inconveniences
                    </StyledDescription>
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', width: 'fit-content' }}
                    >
                        <Button
                            style={{
                                padding: '1rem',
                                backgroundColor: COLORS.green,
                                color: COLORS.white,
                                fontWeight: FONTWEIGHT.REGULAR,
                            }}
                        >
                            Back to home
                        </Button>
                    </Link>
                </ContentDescription>
                <ContentImg
                    src={RootError}
                    width={400}
                />
            </ContentContainer>
        </LayoutContainer>
    );
}
