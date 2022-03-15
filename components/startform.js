
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
// import { globalStyles } from '../style/global';
import { Formik } from 'formik';

export default function StartForm() {


  const myForm={
    grade:'',
    subjectid:'',
    testno:''
  };

  const handleSubmit =  (values) => {
    console.log(values);

    // Things are coming here successfully !!



  }

  return (
    
    <View style={styles.formview}>
      <Formik
        initialValues={myForm}
        onSubmit={handleSubmit}
      >
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Grade'
              keyboardType='numeric'
              onChangeText={props.handleChange('grade')}
              value={props.values.grade}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder='Subject-ID'
              onChangeText={props.handleChange('subjectid')}
              value={props.values.subjectid}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder='Test Number'
              keyboardType='numeric'
              onChangeText={props.handleChange('testno')}
              value={props.values.testno}
            />
            
            <Button title="Go to scanning the question paper" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}


const styles = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        margin:15,
        padding:10
    },
    formview:{
        // borderColor:'red',
        // borderWidth:10,
        width:'70%',
        margin:5,
        padding:15,
    }

})