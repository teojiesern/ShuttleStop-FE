import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

export default class CompReusableStyles {
    static BorderContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid ${COLORS.grey};
        padding: 1rem;
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

    static TextDescription = styled.p`
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.REGULAR};
        color: ${COLORS.grey};
    `;

    static Divider = styled.div`
        height: 1px;
        background-color: ${COLORS.grey};
        margin: 1rem -1rem;
    `;
}
