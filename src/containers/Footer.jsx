import { useContext } from "react"
import styled from "styled-components"
import {PrimaryButton} from "../collections/Buttons"
import { ThemeContext } from "../contexts/ThemeContext"
import { darkTheme } from "../contexts/ThemeContext"
import { lightTheme } from "../contexts/ThemeContext"


const InnerContainer = styled.div`
  background-color: ${props => props?.theme?.colors?.background || "#fff"};
  color:${props => props?.theme?.colors?.text || "#fff"};
  padding-top:60px;
  padding-bottom:60px;
`;


const Footer = ({className}) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme.type === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
  }

  return (
    <InnerContainer theme={theme} >
      <footer className={className}>
        <p>Gracias por visitar esta web</p><br/>
        <PrimaryButton theme={theme} onClick={toggleTheme}> Cambiar tema</PrimaryButton>
      </footer>
    </InnerContainer>
  )
}

export default styled(Footer)`
  text-align:center;
  padding-top:30px;
  padding-bottom:30px;

  button{
    
    display:inline-block;
  }
`;