import styled from "styled-components";
import { media } from "../../config";

export const Menu = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 90%;
  background-color: rgba(2, 70, 108, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;

  ${media.tablet`
    width: 87%;

  `}
  
`

export const LogoImg = styled.img`
  width: 70px;
`

export const Nav = styled.nav`
  ${media.desktop`
    display: flex;
    width: 400px;
  `}

  ${media.tablet`
    display: flex;
    width: 300px;
    margin-right: 30px;
  `}

  

  ${media.phone`
    display: none;
  `}
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;

  }
`
