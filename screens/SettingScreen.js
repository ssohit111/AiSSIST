import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Themecontext, LoginContext } from '../Contextcontroller';
export default function Settings() {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    const { Login, changeLogin } = React.useContext(LoginContext);
    const handlePress = () => {
        changeTheme(!Dark);
    }
    const handlePress1 = () => {
        changeLogin(!Login);
    }
    return (
        <>
            {
                Dark === false ? (<View style={[styles.container, {
                    flexDirection: "column",
                }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 10 }} >
                            <Text style={styles.titleTextStyle}> Settings </Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} ><Text style={styles.textStyle}>Dark Theme </Text>{Dark === true ? (<Button title='OFF' onPress={handlePress} />) : (<Button title='ON' onPress={handlePress} />)}</View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <TouchableOpacity
                                onPress={handlePress1}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) : (<View style={[styles1.container, {
                    flexDirection: "column",
                }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 10 }} >
                            <Text style={styles1.titleTextStyle}> Settings </Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} ><Text style={styles1.textStyle}>Dark Theme </Text>{Dark === true ? (<Button title='OFF' onPress={handlePress} />) : (<Button title='ON' onPress={handlePress} />)}</View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} ><Button title='Log Out' onPress={handlePress1} /></View>
                    </View>
                </View>)
            }
        </>
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
        fontSize: 25,
        paddingLeft: 10,
        color: 'black'
    },

    button: {
        backgroundColor: 'blue',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
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
        fontSize: 25,
        paddingLeft: 10,
        color: 'white'
    },

    button: {
        backgroundColor: 'blue',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});