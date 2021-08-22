import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
     font-family: 'roboto';
     src: url('@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');');

`;

export const Navcontainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #fff;
  box-sizing: border-box;
`;

export const Navbar = styled.h3``;

export const Logo = styled.h3`
  font-family: ${createGlobalStyle};
`;
