import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

export default class COReusableStyles {
    static BorderConatiner = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid ${COLORS.grey};
        padding: 0.5rem 2rem;
    `;

    static Label = styled.span`
        color: ${COLORS.darkGrey};
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.REGULAR};
        text-align: center;
    `;

    static Text = styled.span`
        color: ${COLORS.black};
        font-size: ${FONTSIZE.small};
        font-weight: ${FONTWEIGHT.REGULAR};
        text-align: center;
    `;

    static Divider = styled.div`
        height: 1px;
        background-color: ${COLORS.grey};
        margin: 0.5rem -2rem;
    `;
}
