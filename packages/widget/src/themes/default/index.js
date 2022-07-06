import { createTheme, ThemeProvider as MUITheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { palette, typography } from './customize';
import { GlobalStyl } from './GlobalStyl';
import React from "react"

const _theme = createTheme({
    palette,
    typography,
    shape: {
        borderRadius: 2,
    },
});

export const theme = {
    colors: palette,
    font: {
        xs: '10px',
        sm: '13px',
        md: '16px',
        lg: '20px',
        xl: '25px',
    },
    radius: {
        xs: '5px',
        sm: '10px',
        md: '14px',
    },
    shadow: {
        custom: '0px 12px 20px #DEDEDE',
    },
    name: 'Default',
};

const Default = ({ children }) => (
    <MUITheme theme={_theme}>
        <ThemeProvider theme={theme}>
            <GlobalStyl />
            {children}
        </ThemeProvider>
    </MUITheme>
);
export default Default;
