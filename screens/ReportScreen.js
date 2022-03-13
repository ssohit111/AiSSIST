import React from 'react'
import { Text, View } from 'react-native'
import { Themecontext } from '../Contextcontroller';
export default function Reports() {
    const { Dark, changeTheme } = React.useContext(Themecontext);
    return (
        <>
            {
                Dark === false ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 30, color: 'black' }}>Reports!</Text>
                </View>) : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                    <Text style={{ fontSize: 30, color: 'white' }}>Reports!</Text>
                </View>)
            }
        </>
    );
}