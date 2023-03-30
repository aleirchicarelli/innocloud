import styled from "styled-components";

export const Container = styled.div`
  height: 900px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Box = styled.div`
  width: fit-content;
  color: white;
  text-align: center;
  margin-top: 100px;

  h1 {
    width: 500px;
    font-size: 50px;
    line-height: 65px;
  }
  p {
    width: 350px;
    font-size: 14px;
    text-align: start;
    margin-top: -30px;
  }
`

export const BoxImage = styled.img`
  width: 200px;
  height: auto;
`

export const BlobBackground = styled.img`
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 40px;
  left: -80px;
  z-index: -1;
`
