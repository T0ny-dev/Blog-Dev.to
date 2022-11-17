import { createContext, useState } from "react";

export const lightTheme = {
  type:"light",
  colors: {
    lightText: "#fff",
    text:"#14213d",
    primary:"#F2439D",
    background : "#fff",
    darkBackground:"#2555D4"
    
  }
}

export const darkTheme = {
  type:"dark",
  colors: {
    background : "#0f0f0f",
  }
}

export const ThemeContext = createContext([lightTheme, () => {}]);


const ThemeProvider = ({ children }) => {
  const themeState = useState(lightTheme)
  return (<ThemeContext.Provider value={themeState} >{children}</ThemeContext.Provider>)
};

export default ThemeProvider