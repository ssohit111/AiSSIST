import React from "react";
import { View, Text } from 'react-native'
import { Themecontext, LoginContext } from "./Themecontroller";

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
        {Login === false ? (<LoginScreen />) : (<Navigator />)}
      </LoginContext.Provider>
    </Themecontext.Provider>
  );
}
