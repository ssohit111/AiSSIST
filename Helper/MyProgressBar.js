import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as Progress from 'react-native-progress';

const MyProgressBar = ({progress}) => {
    return (
        <View style={styles.bar}>
            <Progress.Bar progress={progress} width={200} height={7} />
        </View>
    )
}

export default MyProgressBar

const styles = StyleSheet.create({
    bar:{
        margin:35,
        alignItems:'center',

    }
})