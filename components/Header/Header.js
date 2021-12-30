import React from 'react';
import {StyleSheet,View, Text} from 'react-native'

const Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.headerText}>Native ToDo List</Text>
        </View>
        
    );
};


const Styles = StyleSheet.create({
    header: {
        backgroundColor: '#a4b0be',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
    },

    headerText: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
export default Header;