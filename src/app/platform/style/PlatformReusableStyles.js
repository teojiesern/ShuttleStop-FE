import COLORS from '../Colors';
import FONTWEIGHT from './FontWeight';

export default class PlatformReusableStyles {
    static PrimaryButtonStyles = {
        backgroundColor: COLORS.green,
        color: COLORS.white,
        fontWeight: FONTWEIGHT.REGULAR,
    };

    static SecondaryButtonStyles = {
        backgroundColor: COLORS.white,
        color: COLORS.black,
        fontWeight: FONTWEIGHT.REGULAR,
    };

    static OutlineButtonStyles = {
        backgroundColor: COLORS.white,
        color: COLORS.green,
        border: `1px solid ${COLORS.green}`,
        fontWeight: FONTWEIGHT.REGULAR,
    };
}
