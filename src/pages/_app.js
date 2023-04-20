import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '@/utils/theme';
import { CssBaseline } from '@mui/material';


export default function App({ Component, pageProps }) {

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
