import React, { Component } from 'react';
import Button from './themed-button';
import { ToolBarContext } from './theme-context'

//Heirarchy: App => Toolbar  = >ToolBarButton

export default class App extends React.Component {
    render() {
        console.log(ToolBarContext)
        return (
            <ToolBarContext.Provider value='light'>
                <Toolbar />
            </ToolBarContext.Provider>
        )
    }
}

const Toolbar = () => {
    return (
        <div>
            <ToolBarButton />  {/*no props passed*/}
        </div>
    )
}

const ToolBarButton = () => {
    return (
        <ToolBarContext.Consumer>
            {theme => {
                console.log(theme)
                console.log(theme.background)
                return (<button 
                style={{
                    backgroundColor: theme.background,
                    height: 50,
                    width: 100
                }}> </button>)
            }}
        </ToolBarContext.Consumer>
    )
}