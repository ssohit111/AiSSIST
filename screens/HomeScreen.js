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
    return (
        < >

            {
                Dark === false ? (<View style={[styles.container, {
                    flexDirection: "column",
                }]}><View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 30, borderTopLeftRadius: 30, margin: 1 }} >
                        <Text style={styles.titleTextStyle}> Welcome </Text>
                        <Text style={styles.titleTextStyle}> To AiSSIST</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                        <Text style={styles.textStyle} onPress={showAlert}> <FontAwesome5 name="play-circle" size={30} color="black" /> New Here? See How it works? </Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                        <Text style={styles.textStyle} onPress={showAlert}> <Entypo name="info-with-circle" size={30} color="black" /> Who are we</Text>
                    </View>
                    {/* <View
                style={{
                    flex: 0.15,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                }}
            /> */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                        <Text style={styles.textStyle} onPress={showAlert}> <Feather name="phone-call" size={30} color="black" /> Ping Us for Support </Text>


                    </View></View>)
                    : (<View style={[styles1.container, {
                        flexDirection: "column",
                    }]} ><View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 30, borderTopLeftRadius: 30, margin: 1 }} >
                            <Text style={styles1.titleTextStyle}> Welcome </Text>
                            <Text style={styles1.titleTextStyle}> To AiSSIST</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5, }} >
                            <Text style={styles1.textStyle} onPress={showAlert}> <FontAwesome5 name="play-circle" size={30} color="white" /> New Here? See How it works? </Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                            <Text style={styles1.textStyle} onPress={showAlert}> <Entypo name="info-with-circle" size={30} color="white" /> Who are we</Text>
                        </View>
                        {/* <View
                style={{
                    flex: 0.15,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                }}
            /> */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10, elevation: 5 }} >
                            <Text style={styles1.textStyle} onPress={showAlert}> <Feather name="phone-call" size={30} color="white" /> Ping Us for Support </Text>


                        </View></View>)
            }

        </>
    );
};

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
        fontSize: 25,
        paddingLeft: 10,
        color: 'black'
    }
});
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'black'
    },
    titleTextStyle: {
        fontSize: 50,
        paddingLeft: 15,
        fontFamily: 'serif',
        color: 'white'
    },
    textStyle: {
        fontSize: 22,
        paddingLeft: 10,
        color: 'white'
    }
});




