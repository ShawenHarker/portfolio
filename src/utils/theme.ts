import { createTheme } from '@mui/material';

const heading = 'roboto-condensed, sans-serif';

const theme = createTheme({
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
            xs: 0,
            sm: 768,
            md: 1282,
            lg: 1440,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: 'lato, sans-sarif',
        h1: {
            fontFamily: heading,
            fontSize: 36,
            fontWeight: 900,
        },
        h2: {
            fontFamily: heading,
            fontSize: 30,
            fontWeight: 900,
        },
        h3: {
            fontFamily: heading,
            fontSize: 26,
            fontWeight: 700,
        },
        h5: {
            fontFamily: heading,
            fontSize: 20,
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: 20,
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: 18,
            fontWeight: 600,
        },
        caption: {
            fontSize: 14,
            fontWeight: 300,
        },
    },
    palette: {
        primary: {
            main: '#ededed',
        },
        secondary: {
            main: '#9c9a9a',
        },
        background: {
            paper: '#081b29',
        },
        text: {
            primary: '#ededed',
            secondary: '#00abf0',
            disabled: '#9c9a9a'
        },
    },
});

export default theme;