import styled from "styled-components";
import { media } from "../../config";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  position: relative;
  padding-bottom: 150px;
  width: 100%;
  h2 {
  font-size: 40px;
  position: absolute;
  top: -100px;
  left: 180px;
  color: #EAC358;
  }
`
export const BoxCard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
  margin-top: 100px;
  
  ${media.tablet`
    width: fit-content;
    grid-template-columns:  auto auto;

 `}

  ${media.phone`
    grid-template-columns:  auto;

 `}
`