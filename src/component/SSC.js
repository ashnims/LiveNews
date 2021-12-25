import styled from "styled-components";

export const Container = styled.body`
  margin: 0;
  background-color: rgb(131, 236, 236);
  overflow: hidden;
  width: 100%;
  heigth: 100%;
`;
export const Display = styled.header`
  background-color: rgb(25, 165, 165);
  height: 30vh;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.header`
  position: relative;
  font-family: Papyrus, fantasy;
  left: 40px;
  font-size: 40px;
  color: black;
  margin: 15px 0px;
  font-weight: bold;
  overflow-x: hidden;
  @media screen and (max-width: 768px) {
    left: 40%;
  }
`;
export const Form = styled.form`
  position: absolute;
  left: 40%;
  top: 100px;
  overflow-x: hidden;
  @media screen and (max-width: 768px) {
    left: 28%;
    top: 120px;
  }
`;

export const Input = styled.input`
  font-size: 25px;
  padding: 5px;
  border: none;
  border-radius: 15px;
  margin-right: 5px;
`;
export const Button = styled.input`
  font-size: 25px;
  padding: 5px;
  border: none;

  border-radius: 15px;
  transition: all 0.4s;
  background-color: rgb(131, 236, 236);

  &:active {
    transform: scale(0.5);
  }
  &:hover {
    color: white;
  }
`;
export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  padding: 30px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;
  }
`;

export const InnerCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  transition: all 0.4s;
  &:hover {
    transform: scale(0.9);
  }
  @media screen and (max-width: 768px) {
    margin: 30px;
  }
`;
export const Image = styled.img`
  width: 700px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 650px;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  background-color: #ebfbff;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.div`
  display: flex;
  padding: 0px 10px;
`;
export const P1 = styled.p`
  color: red;
`;
export const P2 = styled.p`
  position: relative;
  left: 10px;
`;
export const P = styled.p`
  padding: 0px 10px;
  font-size: 20px;
`;
