import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Themecontext, LoginContext } from '../Contextcontroller';
export default function Settings() {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText;

    const { Login, changeLogin } = React.useContext(LoginContext);
    const handlePress = () => {
        changeTheme(!Dark);
    }
    const handlePress1 = () => {
        changeLogin(!Login);
    }
    return (
        <>
            <View style={[styles.container, { flexDirection: "column", }, themeContainerStyle]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 10 }} >
                        <Text style={[styles.titleTextStyle, themeTextStyle]}> Settings </Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} ><Text style={[styles.textStyle, themeTextStyle]}>Dark Theme </Text>{Dark === true ? (<TouchableOpacity onPress={handlePress} style={styles.button1}>
                        <Text style={[styles.buttonText, themeTextStyle]}>OFF</Text>
                    </TouchableOpacity>) : (<TouchableOpacity
                        onPress={handlePress}
                        style={styles.button1}
                    >
                        <Text style={[styles.buttonText, themeTextStyle]}>ON</Text>
                    </TouchableOpacity>)}</View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={handlePress1}
                            style={styles.button}
                        >
                            <Text style={[styles.buttonText, themeTextStyle]}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
    },
    titleTextStyle: {
        fontSize: 50,
        paddingLeft: 15,
        fontFamily: 'serif',
    },
    textStyle: {
        fontSize: 25,
        paddingLeft: 10,
    },

    button: {
        backgroundColor: 'seagreen',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        backgroundColor: 'seagreen',
        width: '20%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        // color: 'white',
        fontWeight: '700',
        fontSize: 16,
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
