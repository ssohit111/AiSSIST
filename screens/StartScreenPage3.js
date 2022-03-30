import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

import { Themecontext } from '../Contextcontroller';

const StartScreenPage3 = ({ setthird, setfourth, progress, setprogress }) => {

    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText

    const [doc, setDoc] = useState({});
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
            if (response.type == 'success') {
                let { name, size, uri } = response;
                let nameParts = name.split('.');
                let fileType = nameParts[nameParts.length - 1];
                var fileToUpload = {
                    name: name,
                    size: size,
                    uri: uri,
                    type: "application/" + fileType
                };
                // console.log(fileToUpload, '...............file')
                setDoc(fileToUpload);
            }
        });
    }

    const postDocument = () => {
        console.log(doc);
        //// INSERT CHOSEN EXCEL FILE (CORRECT ANSWER) DATABASE :- WRITE CODE




        setthird(false);
        setfourth(true);
        setprogress(0.75);
    }

    return (
        <View style={[styles.container, { flexDirection: "column", border: "solid" }, themeContainerStyle]}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.titleTextStyle, themeTextStyle]}><FontAwesome5 name="file-upload" size={35} color={themeTextStyle} /> Upload Correct Answers </Text>
                <TouchableOpacity onPress={pickDocument} style={{ width: 130, borderRadius: 4, backgroundColor: 'seagreen', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 30, marginBottom: 30 }}>
                    <Text style={[{ fontWeight: 'bold', textAlign: 'center' }, themeTextStyle]}>
                        Upload File
                    </Text>
                </TouchableOpacity>
                <Button title='Submit' onPress={postDocument} />

            </View>
        </View >
    )
}

export default StartScreenPage3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
    },
    titleTextStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        paddingLeft: 15,
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
})