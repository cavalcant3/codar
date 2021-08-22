import React from "react";
import { Navcontainer } from "./Navbar.styles";
import { Logo } from './Navbar.styles'

function Navbar() {
  return <Navcontainer>
    
    <Logo>Codar.</Logo>

    <ul>
    
      <li>login</li>
      <li>Início</li>
      <li>Serviços</li>
      <li>Contato</li>
      
    </ul>
    
  </Navcontainer>;
}

export default Navbar;
