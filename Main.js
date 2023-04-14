import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';

export default function Main() {
    const theme = {
        ...DefaultTheme,
        myOwnProperty: true,
        // Specify custom property in nested object
        colors: {
            myOwnColor: '#BADA55',
            ...DefaultTheme.colors,
            primary: '#6200ee',
            accent: '#03dac6',
            secondary: '#03dac6',
            error: '#B00020',
            background: '#ffffff',
            surface: '#ffffff',
            text: '#000000',
        },
    };

    return (
        <PaperProvider theme={theme}>

                <App/>

        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);