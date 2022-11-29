import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 140px;
  height: 23vh;
  width: 80%;
  position: relative;
  left: 10%;
  border-radius: 20px;
  box-shadow: 0px 0px 22px 12px #e6e6e6;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 5%;
  width: 100%;
`;

const EachCard = styled.div`
  display: flex;
  /* flex-basis: 33%; */
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: #ffe6e6;
  border-radius: 50%;
  height: 3vw;
  width: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.2rem + 1vw);
`;
const Icon = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 50%;
  object-fit: contain;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0% 1%;
`;
const Count = styled.p`
  margin-left: 7%;
  font-weight: 700;
  font-size: calc(0.5rem + 1.2vw);
`;
const CardName = styled.p`
  font-weight: 400;
  font-size: calc(0.3rem + 0.8vw);
  color: #4f5665;
`;

const ContentCard = () => {
  return (
    <Container>
      <Wrapper>
        <EachCard>
          <IconWrapper>
            <Icon src="assets/Group 1216.svg"></Icon>
          </IconWrapper>

          <TextWrapper>
            <Count>90+</Count>
            <CardName>Users</CardName>
          </TextWrapper>
        </EachCard>
        <EachCard>
          <IconWrapper>
            <Icon src="assets/Group 1215.svg"></Icon>
          </IconWrapper>
          <TextWrapper>
            <Count>30+</Count>
            <CardName>Locations</CardName>
          </TextWrapper>
        </EachCard>
        <EachCard>
          <IconWrapper>
            <Icon src="assets/Group 1217.svg"></Icon>
          </IconWrapper>
          <TextWrapper>
            <Count>50+</Count>
            <CardName>Servers</CardName>
          </TextWrapper>
        </EachCard>
      </Wrapper>
    </Container>
  );
};

export default ContentCard;
