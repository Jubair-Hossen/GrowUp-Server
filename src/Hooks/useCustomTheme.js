import { createTheme } from '@mui/material';
import { amber, deepOrange } from '@mui/material/colors';
import React from 'react';

const useCustomTheme = () => {
    const [mode, setMode] = React.useState(localStorage.getItem('mode') || 'light');

    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                    localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light',)
                );
            },
        }),
        [mode],
    );
    const getPalette = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                        main: '#38B1ED'
                    },
                    divider: amber[200],
                    text: {
                        primary: '#000000',
                        secondary: '#f1f1f1',
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#333'
                    },
                    divider: deepOrange[700],
                    background: {
                        default: '#333',
                        paper: '#0A1929',
                    },
                    text: {
                        primary: '#f1f1f1',
                        secondary: '#f1f1f1',
                    },
                }),
        },
    });

    const theme = React.useMemo(() => createTheme(getPalette(mode)), [mode])
    return { colorMode, theme }
};

export default useCustomTheme;