import { createTheme } from "@mui/material";
import { syne } from "./fonts";
import { responsiveFontSizes } from "@mui/material";

const defaultTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#ffeb3b'
        }
    },
    typography: {
        fontFamily: syne.style.fontFamily
    },
}))

defaultTheme.breakpoints.values.xs = 320

defaultTheme.typography.h1 = {
    ...defaultTheme.typography.h1,
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.7rem',
    },
    '@media (max-width:320px)': {
        fontSize: '2.2rem',
    },
}

export { defaultTheme }