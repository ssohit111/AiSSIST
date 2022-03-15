import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { Camera } from 'expo-camera'
import CameraPreview from '../Helper/CameraPreview';

let { camera } = Camera

const StartScreenPage2 = ({ setsecond, setthird }) => {
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
                    (<CameraPreview setPreviewVisible={setPreviewVisible} setCapturedImage={setCapturedImage} CapturedImage={CapturedImage} setsecond={setsecond} setthird={setthird} />) :
                    (<>
                        {
                            startCamera ?

                                (<Camera style={{ flex: 1, width: "100%" }} ref={(r) => { camera = r }} flashMode={flashMode} type={cameraType} >
                                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', flex: 1, width: '100%', padding: 20, justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={__takePicture} style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: '#fff' }} />
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, width: '100%', padding: 15, marginLeft: 300 }}>
                                        <TouchableOpacity onPress={__switchCamera}  ><MaterialIcons name="flip-camera-ios" size={40} color="white" /></TouchableOpacity>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, width: '100%', padding: 15, marginLeft: 15 }}>
                                        <TouchableOpacity onPress={__handleFlashMode}  ><Ionicons name="ios-flash-outline" size={40} color="white" /></TouchableOpacity>
                                    </View>


                                </Camera >) :

                                (<View style={[styles.container, { flexDirection: "column", border: "solid" }]}>

                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.titleTextStyle}><Ionicons name="ios-camera-outline" size={35} color="black" /> Scan Question Paper </Text>
                                        <TouchableOpacity onPress={__startCamera} style={{ width: 130, borderRadius: 4, backgroundColor: '#14274e', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 20 }}>
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

export default StartScreenPage2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'white'
    },
    titleTextStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        paddingLeft: 15,
        color: 'black',
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
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'black'
    },
    titleTextStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 35,
        paddingLeft: 15,
        color: 'white'
    },
    textStyle: {
        fontSize: 22,
        paddingLeft: 10,
        color: 'white'
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