import styled from "styled-components";

export const Container = styled.div`
  height: 790px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;


  h2 {
    width: 80%;
    text-align: end ;
    color: #EAC358;
    font-size: 50px;
  }
`

export const Professional = styled.img`
  height: 500px;
  margin-top: 310px;
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
  margin-top: -10%;
  display: flex;
  height: 850%;

`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BoxEnterprise = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
 
  p {
    font-size: 26px;
    width: 80%;

  }
  h3 {
    width: 50%;
    font-size: 38px;
    text-transform: uppercase;
    margin-left: 80px;

  }
`

export const BoxProfessional = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  
  p {
    width: 80%;
    font-size: 26px;
  
  }
  h3 {
    text-align: end;
    font-size: 38px;
    text-transform: uppercase;
    width: 20%;
    margin-right: 80px;
  
  }
`
