
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
// import { globalStyles } from '../style/global';
import { Formik } from 'formik';

export default function StartScreenPage1({ setfirst, setsecond }) {


    const myForm = {
        grade: '',
        subjectid: '',
        testno: ''
    };

    const handleSubmit = (values) => {
        console.log(values);
        setfirst(false);
        setsecond(true);

        // Things are coming here successfully !!



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
                                    placeholder='Subject'
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

        borderRadius: 10,
        // backgroundColor:'red',
        marginTop: 10

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
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

        borderColor: 'white',
        // borderWidth:5,
        padding: 3,

        borderRadius: 5,
        backgroundColor: 'white',


    },
    formview: {
        // borderColor:'red',
        // borderWidth:10,
        width: '70%',
        padding: 10,
    }

})