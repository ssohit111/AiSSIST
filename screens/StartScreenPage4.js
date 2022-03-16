import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const StartScreenPage4 = ({ setfourth, setfirst }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 10 }}>StartScreenPage4</Text>

            <Button title="Go to Page 1" onPress={() => { setfourth(false); setfirst(true); }} />
        </View>
    )
}

export default StartScreenPage4

const styles = StyleSheet.create({})