import styled from "styled-components"
import { titleStyles } from "../collections/styles";
import Container from "../elements/Container";
import Span from "../elements/Span";
import {LinkSecondaryyButton, PrimaryButton} from "../collections/Buttons";
import Row from "../elements/Row";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";


const H1Title = styled.h1`
  ${titleStyles}
`;

const InfoContainer = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  gap:1rem;
`;


const Header = ({className}) => {
  let articlesFromDevTo = useContext(UserContext);
  let [theme] = useContext(ThemeContext)

  return (
    <Container>
      <header className={className}>
        <InfoContainer>
          <H1Title>Bienvenid@s, mi <br/> nombre es <Span>Tony</Span><br/>
            Desarrollador Web
          </H1Title>
          <Row>
            <a href="https://t0ny-dev.netlify.app/">
              <PrimaryButton theme={theme}>Proyectos</PrimaryButton>
            </a>
            <a href="https://drive.google.com/file/d/12cajUOHjxeS_LJExgEOxzc_36r2VnsOC/view">
              <PrimaryButton theme={theme}>Descargar CV</PrimaryButton>
            </a>
          </Row>
          <LinkSecondaryyButton>Leer articulos de DEV.to ({articlesFromDevTo.length})</LinkSecondaryyButton>
        </InfoContainer>
        <img src="/avatar.png" alt=" foto tony" style={{ height: '300px'}}/>
      </header>
    </Container>
  );
}


export default styled(Header)`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
  padding-top:60px;
  margin-bottom:60px;
  align-items: center;
  a {
    text-decoration: none
  }
`;