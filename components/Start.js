import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
export default function Start() {

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
    'I am a button',
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

      <View style={{ flex: 1, backgroundColor: "#ff5050", justifyContent: 'center' }} >
        <Text style={styles.titleTextStyle}> Start Here </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center' }} >
        <TouchableOpacity onPress={openImagePickerAsync} >
          <Text style={styles.textStyle} > <Feather name="camera" size={30} color="black" /> Take picture of Testpaper  </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center' }} >
        <TouchableOpacity onPress={openImagePickerAsync} >
          <Text style={styles.textStyle}> <Entypo name="upload" size={30} color="black" /> Upload correct answers  </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, backgroundColor: "pink", justifyContent: 'center' }} >
        <TouchableOpacity onPress={openImagePickerAsync} >
          <Text style={styles.textStyle}> <Feather name="camera" size={30} color="black" />  Take picture of Student's answers </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "#99ccff", justifyContent: 'center' }} >
        <Text style={styles.textStyle} onPress={showAlert}> Initiate A.I. !</Text>
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
    fontSize: 35,
    fontWeight: "bold",
    paddingLeft: 15
  },
  textStyle: {
    fontSize: 25,
    paddingLeft: 10
  }
});

