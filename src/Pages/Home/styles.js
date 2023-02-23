import styled from "styled-components";
import { media } from "../../config";


export const Container = styled.div`
  height: 800px;
  width: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
    height: 850px;
    flex-direction: column;
  `}
`

export const Box = styled.div`
  width: fit-content;
  color: white;
  text-align: center;
  margin-top: 100px;

  ${media.tablet`
    margin-top: 0;

  `}
 

  h1 {
    width: 300px;
    line-height: 65px;
    
    ${media.desktop`
      font-size: 74px;
    `}

    ${media.tablet`
      font-size: 44px;
    `}
  }
  p {
    width: 350px;
    font-size: 14px;
    text-align: start;
    margin-top: -30px;
    margin-top: 100px;

    ${media.tablet`
      font-size: 16px;
      margin-top: -10px;
      width: 300px;
    `}
  }
`

export const BoxImage = styled.img`
  height: auto;
  width: 400px;
  ${media.desktop`
    width: 400px;
  `}
  ${media.tablet`
    width: 200px;
   
  `}

  ${media.phone`
    width: 200px;
  `}
`
export const BlobBackground = styled.img`
  width: 50%;
  top: -50px;
  left: -80px;
  object-fit: contain;
  position: absolute; 
  z-index: -1;

  ${media.desktop`
    width: 50%;
    left: -40px;
  `}

  ${media.tablet`
    height: 800px;
    width: auto;
    top: 50px;
    left: -250px;
  `}

  ${media.phone`
    width: 60%;
    top: 0px;
    left: -30px;
  `}

`
