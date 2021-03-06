import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { Alert } from 'react-native';

const CameraPreviewStartScreenPage4Helper = ({
    setPreviewVisible,
    setCapturedImage,
    CapturedImage,
    sethelperforfourth,
    setfirst,
    progress,
    setprogress

}) => {
    const Number_of_photos = CapturedImage.length;
    const img = (CapturedImage[Number_of_photos - 1]).uri;

    // function callalert(){
    //     console.log("alert called");
    //     Alert.alert(
    //         'test data received successfully',
    //         [
    //         ],
    //         { cancelable: false }
    //     )
    // }

    const handleDone = () => {

        // INSERT CAPTURED IMAGE TO QUESTION PAPER DATABASE :- WRITE CODE

        // setprogress(1);
        // setTimeout(() => {
        //     callalert();
        // }, 4000);

        setprogress(0);
        console.log("new test data received.")

        sethelperforfourth(false);
        setfirst(true);

        setPreviewVisible(null);
        setCapturedImage([{}]);






    }

    const handleNext = () => {
        setPreviewVisible(null);
    }

    const handleCancel = () => {
        setCapturedImage(CapturedImage.filter(item => item.uri != img))
        setPreviewVisible(null);
    }

    return (
        <>
            <View style={{ backgroundColor: 'transparent', flex: 1, width: '100%', height: '100%' }}><ImageBackground source={{ uri: img }} style={{ flex: 1 }} /></View>

            <View style={{ marginBottom: 20, }} >
                <TouchableOpacity onPress={handleDone} style={{ width: 70, height: 40, borderRadius: 50, backgroundColor: 'green', position: 'absolute', bottom: 0, left: 10 }} ><Text style={{ textAlign: 'center', alignItems: 'center', paddingTop: 11, fontWeight: 'bold' }}>Done</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleNext} style={{ width: 70, height: 40, borderRadius: 50, backgroundColor: 'lightblue', position: 'absolute', bottom: 0, left: 160 }} ><Text style={{ textAlign: 'center', alignItems: 'center', paddingTop: 11, fontWeight: 'bold' }}>Next</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={{ width: 70, height: 40, borderRadius: 50, backgroundColor: 'red', position: 'absolute', bottom: 0, right: 10 }} ><Text style={{ textAlign: 'center', alignItems: 'center', paddingTop: 11, fontWeight: 'bold' }}>Cancel</Text></TouchableOpacity>
            </View>
        </>
    )
}

export default CameraPreviewStartScreenPage4Helper

const styles = StyleSheet.create({})