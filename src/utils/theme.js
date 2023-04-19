import { createTheme } from "@mui/material";
import { syne } from "./fonts";

const defaultTheme = createTheme({
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
    }
})

export { defaultTheme }