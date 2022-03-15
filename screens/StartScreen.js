import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useState, useContext } from 'react'
import { Themecontext } from '../Contextcontroller';
import StartScreenPage2 from './StartScreenPage2';
import StartForm from '../components/startform'
export default function StartScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Flex />
        </View>
    );
};



const Flex = () => {
    const { Dark, changeTheme } = useContext(Themecontext);
    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);


    return (
        <>
            {
                first === true ? (<StartForm setfirst={setfirst} setsecond={setsecond} />) : (null)
            }
            {
                second === true ? (<StartScreenPage2 setsecond={setsecond} setthird={setthird} />) : (null)
            }
        </>
    );
};

