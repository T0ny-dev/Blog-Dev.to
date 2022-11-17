import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const InnerLayout = styled.div`
  background-color: ${props => props?.theme?.colors?.background || "#0f0f0f"};
  color: ${props => (props?.theme?.colors?.text || "#fff")}
`

const Layout = ({children}) => {
  let [theme] = useContext(ThemeContext);
  return (<InnerLayout theme={theme}>{children}</InnerLayout>);
};

export default Layout;