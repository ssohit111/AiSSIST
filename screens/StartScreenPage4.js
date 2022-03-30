import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import StudentInfo from '../data/StudentInfo'

import { Themecontext } from '../Contextcontroller';

const StartScreenPage4 = ({

    setfourth,
    sethelperforfourth,
    progress,
    setprogress }) => {


    const { Dark, changeTheme } = React.useContext(Themecontext);
    const themeContainerStyle = Dark === false ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = Dark === false ? styles.lightThemeText : styles.darkThemeText;

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);    //this is the current student selected in dropdown
    const [items, setItems] = React.useState([{}])
    const [Name_of_Students, setName_of_Students] = React.useState(null);
    React.useEffect(() => {
        setName_of_Students(StudentInfo.map((ele, index) => {
            const lbl = ele.name;
            const val = ele.lname;
            setItems((prevArray) => [...prevArray, { label: lbl, value: val }]);

            return (<Text key={index} >{lbl}</Text>)
        }))

    }, [])


    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={[styles.titleTextStyle, themeTextStyle]}>Scan Answers</Text>
            <Text style={[styles.textStyle, themeTextStyle]} >Select Student </Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems} style={{ width: 200, alignItems: 'center', justifyContent: 'center', marginLeft: 100 }} />
            {
                value ?
                    (<View style={{ position: 'absolute', bottom: 50 }}>
                        <Button title="Enter to Scan Answers" onPress={() => { setfourth(false); sethelperforfourth(true) }} />
                    </View>) :
                    (null)
            }
            {/* <Button title="Enter Details for New Test" onPress={() => { setfourth(false); setfirst(true); }} /> */}
        </View>

    )
}

export default StartScreenPage4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100

    },
    titleTextStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        paddingLeft: 15,
        marginBottom: 100,
    },
    textStyle: {
        fontSize: 22,
        paddingLeft: 10,
        marginBottom: 10,
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
})