import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    const {viewStyle, textStyle} = styles;

    return(
        <View style={viewStyle}>
        <Text style={textStyle}>Auth</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 30,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;