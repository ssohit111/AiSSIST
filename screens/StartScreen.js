
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import Line from '../components/Line';

import StartForm from '../components/startform';


import { Themecontext } from '../Contextcontroller';

export default function StartScreen() {

    return (
        <View style={styles.container}>

            {/* <ScrollView> */}
            
            <View style={styles.titlebox}>
                <Text  style={styles.titleTextStyle}>Please enter the test details</Text>    
            </View>

            <View style={styles.formbox}>

                <StartForm />

            </View>

            {/* </ScrollView> */}

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
    const { Dark, changeTheme } = React.useContext(Themecontext);
    return (
        <>
            {
                Dark === false ? (<View style={[styles.container, {
                    flexDirection: "column",
                    border: "solid"

                }]}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 5, margin: 10 }} >
                        <Text style={styles.titleTextStyle}> Please enter the test details </Text>
                    </View>
                    {/* <Line /> */}
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles.textStyle} > <Feather name="camera" size={30} color="black" /> <Text style={{ marginBottom: 20 }}>Take Picture of Question Paper</Text>  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles.textStyle}> <Entypo name="upload" size={30} color="black" /> Upload Correct Answers  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles.textStyle}> <Feather name="camera" size={30} color="black" />  Take Picture of Student's Answers </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={showAlert}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Initiate A.I.</Text>
                        </TouchableOpacity>
                    </View>


                </View>) : (<View style={[styles1.container, {
                    flexDirection: "column",
                    border: "solid"

                }]}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 5, margin: 10 }} >
                        <Text style={styles1.titleTextStyle}> START HERE </Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles1.textStyle} > <Feather name="camera" size={30} color="white" /> <Text style={{ marginBottom: 20 }}>Take picture of Question Paper</Text>  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles1.textStyle}> <Entypo name="upload" size={30} color="white" /> Upload correct answers  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 7 }} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Text style={styles1.textStyle}> <Feather name="camera" size={30} color="white" />  Take picture of Student's answers </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={showAlert}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Initiate A.I.</Text>
                        </TouchableOpacity>
                    </View>


                </View>)
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'white',
        // borderColor:'black',
        // borderWidth:3

    },
    titleTextStyle: {
        alignItems: 'center',
        fontSize: 25,
        color: 'black',
    },
    titlebox:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1.5,
        // borderColor:'blue',
        // borderWidth:3,
        textAlign:'center',
        marginTop:10
    },
    formbox:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:5,
        fontSize:20,
        // borderColor:'blue',
        // borderWidth:3,
    },
    textStyle: {
        fontSize: 22,
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
// const styles1 = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignSelf: "stretch",
//         paddingTop: 20,
//         backgroundColor: 'black'
//     },
//     titleTextStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: 35,
//         paddingLeft: 15,
//         color: 'white'
//     },
//     textStyle: {
//         fontSize: 22,
//         paddingLeft: 10,
//         color: 'white'
//     },
//     button: {
//         backgroundColor: 'blue',
//         width: '50%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: '700',
//         fontSize: 16,
//     },

// });
