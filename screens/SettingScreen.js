import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Themecontext } from '../Themecontroller';
export default function Settings() {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    const handlePress = () => {
        changeTheme(!Dark);
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
                    </View>
                </View>) : (<View style={[styles1.container, {
                    flexDirection: "column",
                }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 10 }} >
                            <Text style={styles1.titleTextStyle}> Settings </Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} ><Text style={styles1.textStyle}>Dark Theme </Text>{Dark === true ? (<Button title='OFF' onPress={handlePress} />) : (<Button title='ON' onPress={handlePress} />)}</View>
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
        fontSize: 25,
        paddingLeft: 10,
        color: 'white'
    }
});