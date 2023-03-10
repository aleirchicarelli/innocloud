  import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  margin-top: 100px;
  background-color: #02466c;
`

export const BlobBlue = styled.img`
  height: 170px;
  width: 100%;
  position: absolute;
  top: -170px;
  left: 0; 
  z-index: 0;
  object-fit: cover;
  object-position: 0 0;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 25px;
  align-items: center;  

  h2 {
    width: 90%;
    font-size: 30px;
    color: #EAC358;
    margin-top: 50px;
  }
`
export const BoxForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
`

export const FormItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const BoxInput = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  label {
    width: 100px;
    font-size: 14px;
    height: 30px;
  }

  input {
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    border: none;
  }

  textarea{
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  }
`
export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  input {
    cursor: pointer;
    background-color: #013155;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff
  }
  input + input {
    margin-left:10px;
  }
`
