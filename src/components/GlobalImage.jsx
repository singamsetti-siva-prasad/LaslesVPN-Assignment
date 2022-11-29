import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 80%;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Bottom = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  margin-top: 10px;
`;
const SLogo = styled.img`
  display: flex;
  height: 100%;
  max-height: 50px;

  width: 100%;
  /* object-fit: ${(props) => props.id === "amazon" && "fill"};
  width: ${(props) => props.id === "netflix" && "80px"}; */
`;

const GlobalImage = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <MainImg src="assets/Huge Global.svg"></MainImg>
        </Top>
        <Bottom>
          <SLogo src="assets/Mask Group (1).svg"></SLogo>
          <SLogo id="amazon" src="assets/Mask Group (2).svg"></SLogo>
          <SLogo src="assets/Mask Group (3).svg"></SLogo>
          <SLogo src="assets/Mask Group (4).svg"></SLogo>
          <SLogo id="netflix" src="assets/Mask Group.svg"></SLogo>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default GlobalImage;
