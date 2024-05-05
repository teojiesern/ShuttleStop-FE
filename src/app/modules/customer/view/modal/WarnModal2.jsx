import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import warning from '../assets/warning.jpeg';

export default function WarnModal2() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
        width: 100%;
        border: 1px solid ${COLORS.black};
        gap: 30px;
    `;

    const TextLarge = styled.p`
        font-size: ${FONTSIZE.large};
        font-weight: ${FONTWEIGHT.BOLD};
    `;

    return (
        <Container>
            <img
                src={warning}
                alt="warning"
                style={{ width: '200px', height: '200px' }}
            />
            <TextLarge>Maximum Price must be greater than Minimum Price</TextLarge>
        </Container>
    );
}
