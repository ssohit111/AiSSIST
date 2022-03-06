import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Alert } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Flex />
    </View>
  );
};

const showAlert = () => {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
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
    }]}>

      <View style={{ flex: 2, backgroundColor: "#ff5050", justifyContent: 'center' }} >
        <Text style={styles.titleTextStyle}> Welcome To AiSSIST </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center' }} >
        <Text style={styles.textStyle} onPress={showAlert}> New Here? See Video  <FontAwesome5 name="play-circle" size={40} color="black" />  </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center' }} >
        <Text style={styles.textStyle} onPress={showAlert}> About Us  <Entypo name="info-with-circle" size={30} color="black" /> </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "pink", justifyContent: 'center' }} >
        <Text style={styles.textStyle} onPress={showAlert}> Press to call support  <Feather name="phone-call" size={30} color="black" /> </Text>


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




