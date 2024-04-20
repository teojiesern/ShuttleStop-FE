import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

export default class CompReusableStyles {
    static BorderContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid ${COLORS.grey};
        padding-top: 2rem;
    `;

    static BorderContainerRow = styled.div`
        display: flex;
        flex-direction: row;
        border: 1px solid ${COLORS.grey};
        padding: 2rem;
        gap: 7rem;
    `;

    static ContainerRow = styled.div`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding-bottom: 1rem;
    `;

    static ContainerColumn = styled.div`
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
    `;

    static Line = styled.div`
        position: flex;
        bottom: -1rem;
        width: 100%;
        border-bottom: 1px solid ${COLORS['light-grey']};
    `;

    static Text = styled.p`
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.REGULAR};
        color: ${COLORS.black};
    `;

    static TextBold = styled.p`
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.BOLD};
        color: ${COLORS.black};
    `;

    static TextDescription = styled.p`
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.REGULAR};
        color: ${COLORS.darkGrey};
    `;

    static Title = styled.p`
        font-size: ${FONTSIZE.medium};
        font-weight: ${FONTWEIGHT.BOLD};
        color: ${COLORS.black};
    `;

    static Divider = styled.div`
        height: 1px;
        background-color: ${COLORS.grey};
        margin: 1rem -1rem;
    `;
}
