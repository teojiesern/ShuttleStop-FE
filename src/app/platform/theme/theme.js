import { createTheme } from '@mui/material/styles';
import COLORS from '../Colors';

const theme = createTheme({
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    stroke: COLORS.grey,
                    color: COLORS.grey,
                    strokeWidth: 0,
                    '&.Mui-checked': {
                        color: COLORS.green,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    },
});

export default theme;
