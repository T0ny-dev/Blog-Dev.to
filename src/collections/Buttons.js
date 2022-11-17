import styled, { css } from "styled-components";


export const PrimaryButtonStyle = css`
  display:block;
  border:none;
  cursor:pointer;
  padding:1rem 1.2rem;
  border-radius:12px;
  font-weight:bold;
  text-transform:uppercase;
  background-color: ${ props => (props?.theme?.colors?.primary) || "#F2439D"};
  color:${ props => (props?.theme?.colors?.lightText) || "white"};
`;

export const SecondaryButtonStyle = css`
  font-weight:bold;
  text-decoration:underline;
  text-transform:uppercase;
  text-decoration-thickness:3px;
  display:inline-block;
  background-color:transparent;
  color:#C7B222;
`;


export const LinkPrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`;

export const PrimaryButton = styled.button`
  ${PrimaryButtonStyle}
`;

export const LinkSecondaryyButton = styled.a`
  ${SecondaryButtonStyle}
`;

export const SecondaryButton = styled.button`
  ${SecondaryButtonStyle}
`;

