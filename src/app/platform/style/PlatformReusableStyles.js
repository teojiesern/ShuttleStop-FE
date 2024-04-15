import COLORS from '../Colors';
import FONTWEIGHT from './FontWeight';

export default class PlatformReusableStyles {
    static PrimaryButtonStyles = {
        backgroundColor: COLORS.green,
        color: COLORS.white,
        fontWeight: FONTWEIGHT.REGULAR,
    };

    static SecondaryButtonStyles = {
        color: COLORS.black,
        fontWeight: FONTWEIGHT.REGULAR,
    };

    static OutlineButtonStyles = {
        color: COLORS.green,
        border: `1px solid ${COLORS.green}`,
        fontWeight: FONTWEIGHT.REGULAR,
    };

    static BlackOutlineButtonStyles = {
        color: COLORS.black,
        border: `1px solid ${COLORS.black}`,
        fontWeight: FONTWEIGHT.REGULAR,
    };
}
