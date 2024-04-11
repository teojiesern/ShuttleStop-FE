import COLORS from '../Colors';
import FONTWEIGHT from '../style/FontWeight';

export default class NavLinkStylesUtil {
    static activeStyle = ({ isActive }) => ({
        color: isActive ? COLORS.green : COLORS.black,
    });

    static activeStyleWithFontWeight = ({ isActive }) => ({
        color: isActive ? COLORS.green : COLORS.black,
        fontWeight: isActive ? FONTWEIGHT.SEMI_BOLD : FONTWEIGHT.REGULAR,
    });
}
