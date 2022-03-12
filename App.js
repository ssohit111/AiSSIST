import React from "react";

import { Themecontext } from "./Themecontroller";

import { Navigator, NavigatorDark } from "./components/TabNavigators";

export default function App() {
  const [Dark, setDark] = React.useState(true);
  const changeTheme = (new_Theme) => {
    setDark(new_Theme)
  }
  return (
    <Themecontext.Provider value={{ Dark, changeTheme }} >
      {Dark === false ? (<Navigator />) : (<NavigatorDark />)}
    </Themecontext.Provider>
  );
}
