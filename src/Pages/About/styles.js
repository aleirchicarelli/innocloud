import styled from "styled-components";
import { media } from "../../config";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 800px;
  color: white;
  justify-content: flex-start;
  align-items: center;

  ${media.tablet`
    height: 800px;
  `}
  h2 {
    width: 80%;
    text-align:end ;
    color: #EAC358;
  }
`

export const Professional = styled.img`
  height: 500px;
  margin-top: 90px;
  ${media.tablet`
    margin-top: 0;

  `}
`

export const BlobWhite = styled.img`
  position: absolute;
  bottom: -20px;
  object-fit: cover;
  object-position: 0 0;
  height: 230px;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  height: 100%;
  ${media.tablet`
    align-items: flex-end;
    margin-bottom: 150px;

  `}
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    height: 100%;
    justify-content: flex-start;
  `}
`

export const BoxEnterprise = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  ${media.tablet`
    flex-direction: column-reverse;
    align-items: flex-end;
    margin-top: 20px;

  `}
  p {
    font-size: 16px;
    text-align: right;
    width: 50%;
    ${media.tablet`
      width: 90%;
      font-size: 14px;
    `}
  }
  h3 {
    width: 50%;
    font-size: 38px;
    text-transform: uppercase;
    margin-left: 80px;
     ${media.tablet`
      width: 100%;
      font-size: 28px;
      margin-bottom: 0;
      margin-left: 0;


    `}
  }
`

export const BoxProfessional = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  ${media.tablet`
    flex-direction: column-reverse;
    align-items: flex-start;
  `}
  p {
    width: 50%;
    font-size: 16px;
    ${media.tablet`
      width: 80%;
      font-size: 14px;
    `}
  }
  h3 {
    text-align: end;
    font-size: 38px;
    text-transform: uppercase;
    width: 20%;
    margin-right: 80px;
    ${media.tablet`
      width: 100%;
      font-size: 28px;
      margin-bottom: 0;
      margin-right: 0;


    `}
  }
`
