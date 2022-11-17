import styled from "styled-components"
import Container from "../elements/Container";
import Article from "../blocks/Article"
import Row from "../elements/Row";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";


const InnerContainer = styled.div`
  background-color: ${props => props?.theme?.colors?.darkBackground || "#0f0f0f"};
  color:${props => props?.theme?.colors?.lightText || "#fff"};
  padding-top:60px;
  padding-bottom:60px;
`;


const Articles = ({}) => {

  let articlesFromDevTo = useContext(UserContext);
  let [ theme ] = useContext(ThemeContext)
  
  return (
    <InnerContainer theme={theme}>
      <Container>
        <h2>Artículos en Dev.to</h2><br/>
        <Row>
        {
          articlesFromDevTo.map((article) => {
            return <Article article={article} key={article.id}></Article>
          })
        }
        </Row>
      </Container>
    </InnerContainer>
  );
}


export default Articles;