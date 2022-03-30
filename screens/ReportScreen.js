import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Themecontext } from '../Contextcontroller';
export default function Reports() {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText;
    return (
        <View style={[styles.container, { flexDirection: "column", justifyContent: 'center', alignItems: 'center' }, themeContainerStyle]}>
            <Text style={[styles.titleTextStyle, themeTextStyle]}>Reports!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'white'
    },
    titleTextStyle: {
        fontSize: 50,
        paddingLeft: 15,
        fontFamily: 'serif',
        color: 'black'
    },
    textStyle: {
        fontSize: 22,
        paddingLeft: 10,
        color: 'black'
    },
    lightContainer: {
        // backgroundColor: '#d0d0c0',
        backgroundColor: 'white'
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        // color: '#242c40',
        color: 'black'
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});