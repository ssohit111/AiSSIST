import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const StartScreenPage4 = ({ setfourth, setfirst }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>StartScreenPage4</Text>
            <View style={{ marginBottom: 20 }}>
                <Button title="Submit this page" onPress={() => { }} />
            </View>
            <Button title="Enter Details for New Test" onPress={() => { setfourth(false); setfirst(true); }} />
        </View>
    )
}

export default StartScreenPage4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleTextStyle: {
        alignItems: 'center',
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        marginBottom: 20
    },
})