
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
// import { globalStyles } from '../style/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as firebase from 'firebase'
import userdata from '../data/UserInfo';

const testSchema = yup.object({
    
    grade: yup.string()
            .required()
            .test('is-grade', 'Enter a valid grade', (val) => {
                return parseInt(val) > 0 & parseInt(val) < 13 ;
            }),
    subject: yup.string()
            .required(),
    testno: yup.string()
            .required("Test Number is required")
            .test('is-testno-valild', 'Enter a valid test number', (val) => {
                return parseInt(val) > 0 & parseInt(val) < 11 ;
            }),

        });

export default function StartScreenPage1({ setfirst, setsecond }) {


    const myForm = {
        grade: '',
        subject: '',
        testno: ''
    };

    const handleSubmit = (values) => {
        console.log(values);
        setfirst(false);
        setsecond(true);

        // Things are coming here successfully !!

        const testid = values.grade + values.subject + values.testno;
      
        console.log("New Test-ID is ",testid);
        

        const db = firebase.firestore();
        console.log(userdata.teacherid);

        db.collection('testsdata').add({
            
                "subject":values.subject,
                "teacherid":userdata.teacherid,
                "testid": testid,
              
        });

        // some changes are required here.

        // db.collection('testsdata').get().then((snapshot) =>{
        //     snapshot.docs.forEach(doc  =>{
        //         console.log(doc.data());
        //     })

        // });
       

    }

    return (
        <View style={styles.container}>
            <View style={styles.titlebox}>
                <Text style={styles.titleTextStyle}>Test Details</Text>
            </View>
            <View style={styles.formbox}>
                <View style={styles.formview}>
                    <Formik
                        initialValues={myForm}
                        onSubmit={handleSubmit}
                        validationSchema={testSchema}
                    >
                        {props => (
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Grade'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('grade')}
                                    value={props.values.grade}
                                    onBlur={props.handleBlur('grade')}
                                />
                                <Text style = {styles.errorText}>{props.touched.grade && props.errors.grade}</Text>

                                <TextInput
                                    style={styles.input}
                                    multiline
                                    placeholder='Subject'
                                    onChangeText={props.handleChange('subject')}
                                    value={props.values.subject}
                                    onBlur={props.handleBlur('subject')}
                                />
                                <Text style = {styles.errorText}>{props.touched.grade && props.errors.subject}</Text>

                                <TextInput
                                    style={styles.input}
                                    multiline
                                    placeholder='Test Number'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('testno')}
                                    value={props.values.testno}
                                    onBlur={props.handleBlur('Test Number')}
                                />
                                <Text style = {styles.errorText}>{props.touched.grade && props.errors.testno}</Text>

                                <Button title="Save & Proceed" onPress={props.handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 20,
        backgroundColor: 'white',
        // borderColor:'black',
        // borderWidth:3

    },
    titlebox: {
        
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        // borderColor:'blue',
        // borderWidth:3,
        textAlign: 'center',

        borderRadius:10,
        // backgroundColor:'red',
        marginTop:10
        
    },
    titleTextStyle: {
        alignItems: 'center',
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    formbox: {
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        fontSize: 20,
        // borderColor:'blue',
        // borderWidth:3,
    },
    input: {

        borderColor: 'black',
        borderWidth: 1,
        // marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        
        borderColor:'white',
        // borderWidth:5,
        padding:2,

        borderRadius:5,
        backgroundColor:'white',

    
    },
    formview: {
        // borderColor:'red',
        // borderWidth:10,
        width: '70%',
        padding: 10,
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:5,
        textAlign:'center'
    }

})