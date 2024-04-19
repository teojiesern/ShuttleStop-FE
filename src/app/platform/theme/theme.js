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
                    '&.Mui-disabled': {
                        background: '#f3f3f3',
                        color: '#000000',
                    },
                    padding: '0.8rem',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: COLORS.grey,
                    '&.Mui-checked': {
                        color: COLORS.green,
                    },
                },
            },
        },
    },
});

export default theme;
