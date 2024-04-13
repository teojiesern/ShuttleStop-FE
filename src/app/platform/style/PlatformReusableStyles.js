import COLORS from '../Colors';
import FONTWEIGHT from './FontWeight';

export default class PlatformReusableStyles {
    static PrimaryButtonStyles = {
        backgroundColor: COLORS.green,
        color: COLORS.white,
        fontWeight: FONTWEIGHT.REGULAR,
        padding: '0.8rem',
    };

    static SecondaryButtonStyles = {
        color: COLORS.black,
        fontWeight: FONTWEIGHT.REGULAR,
        padding: '0.8rem',
    };

    static OutlineButtonStyles = {
        color: COLORS.green,
        border: `1px solid ${COLORS.green}`,
        fontWeight: FONTWEIGHT.REGULAR,
        padding: '0.8rem',
    };
}
