import { createTheme } from '@mui/material';
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
                        main: '#38B1ED',
                        text: '#38B1ED'
                    },
                    secondary: {
                        main: '#0000FF',
                    },
                    divider: '#0A1929',
                    text: {
                        primary: '#001E3C',
                        secondary: '#f1f1f1',
                    },
                    background: {
                        default: '#ffffff',
                        paper: '#EFFAFF',
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#333',
                        text: '#38B1ED'
                    },
                    secondary: {
                        main: '#38B1ED',
                    },
                    divider: '#f3f3f3',
                    background: {
                        default: '#001E3C',
                        paper: '#0A1929',
                    },
                    text: {
                        primary: '#f1f1f1',
                        secondary: '#f1f1f1',
                    },
                }),
        },
        typography: {
            h1: {
                fontSize: '5rem',
                fontWeight: 800,
                '@media (max-width:900px)': {
                    fontSize: '3rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '2.5rem',
                },
            }
        }
    });

    const theme = React.useMemo(() => createTheme(getPalette(mode)), [mode])
    return { colorMode, theme }
};

export default useCustomTheme;