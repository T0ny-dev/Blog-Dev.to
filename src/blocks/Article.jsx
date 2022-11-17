import styled from "styled-components"
import { LinkSecondaryyButton } from "../collections/Buttons"


const Article = ({className, article}) => {
  return (
    <div className={className}>
      <img src={article.social_image} alt="" />
      <div>
      <h3>{article.title}</h3>
      <LinkSecondaryyButton href={article.url} target={"_blank"}> Leer más </LinkSecondaryyButton>
      </div>
    </div>
  )
}

export default styled(Article)`
  box-shadow: 0px 0px 12px rgba(0,0,0,0.5);
  border: 1px solid #e6e6e6;
  width: min(300px , 100%);

  div {
    padding:1.5rem;
  }

  img {
    width:100%;
  }
`