import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Start() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Flex />
    </View>
  );
};


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
           <Text style={styles.textStyle} > <Feather name="camera" size={30} color="black" /> Take picture of Testpaper  </Text>
      </View>
      
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center'}} >
           <Text style={styles.textStyle}> <Entypo name="upload" size={30} color="black" /> Upload correct answers  </Text>
      </View>
      
      <View style={{ flex: 1, backgroundColor: "pink", justifyContent: 'center'}} >
            <Text style={styles.textStyle}> <Feather name="camera" size={30} color="black" />  Take picture of Student's answers </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#99ccff", justifyContent: 'center'}} >
            <Text style={styles.textStyle}> Initiate A.I. !</Text>
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
  titleTextStyle:{
    fontSize:35,
    fontWeight: "bold",
    paddingLeft: 15
  },
  textStyle:{
    fontSize:25,
    paddingLeft: 10
  }
});

