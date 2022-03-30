import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Alert } from 'react-native'

import { Themecontext } from '../Contextcontroller';

export default function Home() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Flex />
        </View>
    );
};

const showAlert = () => {
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )
}

const Flex = () => {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText;
    return (
        <>
            <View style={[styles.container, { flexDirection: "column", }, themeContainerStyle]}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 30, borderTopLeftRadius: 30, margin: 1, backgroundColor: 'red' }} >
                    <Text style={[styles.titleTextStyle, themeTextStyle]}> Welcome </Text>
                    <Text style={[styles.titleTextStyle, themeTextStyle]}> To AiSSIST</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                    <Text style={[styles.textStyle, themeTextStyle]} onPress={showAlert}> <FontAwesome5 name="play-circle" size={35} color={themeTextStyle} /> New Here? See How it works? </Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                    <Text style={[styles.textStyle, themeTextStyle]} onPress={showAlert}> <Entypo name="info-with-circle" size={35} color={themeTextStyle} /> Who are we</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                    <Text style={[styles.textStyle, themeTextStyle]} onPress={showAlert}> <Feather name="phone-call" size={35} color={themeTextStyle} /> Ping Us for Support </Text>
                </View>
            </View>
        </>
    );
};

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
        fontSize: 20,
        paddingLeft: 10,
        fontFamily: 'serif',
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



