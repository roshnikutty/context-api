import React from 'react';
import { ThemeContext } from './theme-context';

function ThemedButton(props) {
    return(
        <ThemeContext.Consumer>
            {theme => (<button {...props}
            style={{backgroundColor: theme.background}}/>)} 
        </ThemeContext.Consumer>
    )
}

//background property of whichever theme (dark or light) is passed on in the consumer

export default ThemedButton;