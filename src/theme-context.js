import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        content: 'light color'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        content: 'dark color'
    }
};

export const ToolBarContext = React.createContext(themes.light);