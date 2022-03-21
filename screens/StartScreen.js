import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useState, useContext } from 'react'
import { Themecontext } from '../Contextcontroller';
import StartScreenPage2 from './StartScreenPage2';
import StartScreenPage1 from './StartScreenPage1'
import StartScreenPage3 from './StartScreenPage3';
import StartScreenPage4 from './StartScreenPage4';
import StartScreenPage4Helper from '../Helper/StartScreenPage4Helper';
import MyProgressBar from '../Helper/MyProgressBar'





export default function StartScreen() {

    const [progress, setprogress] = useState(0)

    return (
        <View style={styles.container}>
            <MyProgressBar progress={progress} />
            <Flex progress={progress} setprogress={setprogress} />
        </View>
    );
};



const Flex = ({ progress, setprogress }) => {
    const { Dark, changeTheme } = useContext(Themecontext);
    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [helperforfourth, sethelperforfourth] = useState(false)


    return (
        <>
            {
                first === true ? (<StartScreenPage1 setfirst={setfirst} setsecond={setsecond} progress={progress} setprogress={setprogress} />) : (null)
            }
            {
                second === true ? (<StartScreenPage2 setsecond={setsecond} setthird={setthird} progress={progress} setprogress={setprogress} />) : (null)
            }
            {
                third === true ? (<StartScreenPage3 setthird={setthird} setfourth={setfourth} progress={progress} setprogress={setprogress} />) : (null)
            }
            {
                fourth === true ? (<StartScreenPage4 setfourth={setfourth} sethelperforfourth={sethelperforfourth} progress={progress} setprogress={setprogress} />) : (null)
            }
            {
                helperforfourth === true ? (<StartScreenPage4Helper sethelperforfourth={sethelperforfourth} setfirst={setfirst} progress={progress} setprogress={setprogress} />) : (null)
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderColor:'red',
        // borderWidth:3,
        flex: 1
    }
});

