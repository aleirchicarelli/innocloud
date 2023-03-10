import styled from "styled-components";
import { media } from "../../config";

export const Menu = styled.div`
  background-color: rgba(2, 70, 108, 0.8);
  display: flex;
  width: 92%;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  position: fixed;
`

export const LogoImg = styled.img`
  width: 70px;
`

export const Nav = styled.nav`
   display: flex;
   width: 30%;
   justify-content: space-between;
   
  
  a {
   color: white;
   text-decoration: none;
  }
`
