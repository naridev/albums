import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
    return (
        <Header headerText={'Album'}/>
    );
};

AppRegistry.registerComponent('albums', () => App);
