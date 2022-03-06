import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
export default function StartScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Flex />
        </View>
    );
};
//MY USABLE FUNCTION
let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
};
const showAlert = () => {
    Alert.alert(
        'Alert Title',
        'A.I. Processing Started........',
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
    return (
        <View style={[styles.container, {
            flexDirection: "column",
            border: "solid"

        }]}>

            <View style={{ flex: 1, justifyContent: 'center', elevation: 3, alignItems: 'center', elevation: 9 }} >
                <Text style={styles.titleTextStyle}> Start Here </Text>
            </View>

            <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center', elevation: 7 }} >
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={styles.textStyle} > <Feather name="camera" size={30} color="black" /> Take picture of Testpaper  </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center', elevation: 5 }} >
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={styles.textStyle}> <Entypo name="upload" size={30} color="black" /> Upload correct answers  </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center', elevation: 3 }} >
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={styles.textStyle}> <Feather name="camera" size={30} color="black" />  Take picture of Student's answers </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, backgroundColor: 'skyblue', padding: 15, borderRadius: 10, elevation: 5 }} onPress={showAlert}>Initiate A.I.</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "white",
        paddingTop: 20
    },
    titleTextStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45,
        paddingLeft: 15,
    },
    textStyle: {
        fontSize: 25,
        paddingLeft: 10
    },

});

