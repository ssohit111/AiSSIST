import React from "react";
import { View, Text } from 'react-native'
import { Themecontext, LoginContext } from "./Contextcontroller";

// //Supress warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


import { Navigator, NavigatorDark } from "./components/TabNavigators";
import LoginScreen from './screens/LoginScreen'

export default function App() {
  const [Dark, setDark] = React.useState(false);
  const changeTheme = (new_Theme) => {
    setDark(new_Theme)
  }

  const [Login, setLogin] = React.useState(false);
  const changeLogin = (new_Login) => {
    setLogin(new_Login);
  }

  return (
    <Themecontext.Provider value={{ Dark, changeTheme }} >
      <LoginContext.Provider value={{ Login, changeLogin }}>
        {true ? (<>{Dark === true ? (<NavigatorDark />) : (<Navigator />)}</>) : (<LoginScreen />)}
      </LoginContext.Provider>
    </Themecontext.Provider>
  );
}