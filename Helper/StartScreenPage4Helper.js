import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { Camera } from 'expo-camera'
import CameraPreviewStartScreenPage4Helper from './CameraPreviewStartScreenPage4Helper'

import { Themecontext } from '../Contextcontroller';

let { camera } = Camera

const StartScreenPage4Helper = ({ sethelperforfourth, setfirst, progress, setprogress }) => {

    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText;


    const [startCamera, setStartCamera] = useState(false)
    const [flashMode, setFlashMode] = React.useState('off')
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
    const [PreviewVisible, setPreviewVisible] = useState(null);
    const [CapturedImage, setCapturedImage] = useState([{}]);

    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            // start the camera
            setStartCamera(true)
        } else {
            Alert.alert('Access denied')
        }

    }

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        console.log(photo);
        setPreviewVisible(true)
        setCapturedImage([...CapturedImage, photo]);
    }



    const __handleFlashMode = () => {
        if (flashMode === 'on') {
            setFlashMode('off')
        } else if (flashMode === 'off') {
            setFlashMode('on')
        } else {
            setFlashMode('auto')
        }

    }



    const __switchCamera = () => {
        if (cameraType === 'back') {
            setCameraType('front')
        } else {
            setCameraType('back')
        }
    }


    return (

        <>
            {
                PreviewVisible && CapturedImage.length ?
                    (<CameraPreviewStartScreenPage4Helper
                        setPreviewVisible={setPreviewVisible}
                        setCapturedImage={setCapturedImage}
                        CapturedImage={CapturedImage}
                        sethelperforfourth={sethelperforfourth}
                        setfirst={setfirst}
                        progress={progress}
                        setprogress={setprogress}
                    />) :
                    (<>
                        {
                            startCamera ?

                                (<Camera style={[{ flex: 1, width: "100%" }, themeContainerStyle]} ref={(r) => { camera = r }} flashMode={flashMode} type={cameraType} >
                                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', flex: 1, width: '100%', padding: 20, justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={__takePicture} style={[{ width: 70, height: 70, borderRadius: 50, }, themeContainerStyle]} />
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, left: 300, width: '18%', padding: 15, }}>
                                        <TouchableOpacity onPress={__switchCamera}  ><MaterialIcons name="flip-camera-ios" size={40} color="white" /></TouchableOpacity>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, left: 10, width: '18%', padding: 15, }}>
                                        <TouchableOpacity onPress={__handleFlashMode}  ><Ionicons name="ios-flash-outline" size={40} color="white" /></TouchableOpacity>
                                    </View>


                                </Camera >) :

                                (<View style={[styles.container, { flexDirection: "column", border: "solid" }, themeContainerStyle]}>

                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[styles.titleTextStyle, themeTextStyle]}><Ionicons name="ios-camera-outline" size={35} color="white" /> Scan Answers </Text>
                                        <TouchableOpacity onPress={__startCamera} style={{ width: 130, borderRadius: 4, backgroundColor: 'seagreen', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 20 }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                                                Take a picture
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View >)}
                    </>)
            }
        </>
    );
}

export default StartScreenPage4Helper

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
    textStyle: {
        fontSize: 22,
        paddingLeft: 10,
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

});
