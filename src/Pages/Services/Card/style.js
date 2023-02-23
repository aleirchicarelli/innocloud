import styled from "styled-components";
import { media } from "../../../config";

export const CardContent = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 20px 20px 30px #888888;

  :hover{
    cursor: pointer;
    background-color: #DCDEDF;
    transform: matrix(#888888);
  }

  ${media.tablet`
   
  `}
`
export const Icon = styled.img`
  height: 20%;
`
export const Text = styled.p`
  font-size : 21px;
  font-weight: bold;
` 