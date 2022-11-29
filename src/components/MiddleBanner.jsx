import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  width: 50%;
  padding: 4%;
  height: 100%;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding: 0px 20px;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 4%;
`;

const HeadContent = styled.h1`
  font-size: calc(0.8rem + 1.2vw);
  font-weight: 500;
  margin: 20px;
`;
const Desc = styled.p`
  margin: 20px;
  font-weight: 400;
  font-size: 15px;
  color: #4f5665;
  font-size: calc(0.2rem + 1vw);
`;
const Icon = styled.img`
  height: 20px;
  margin-left: 5%;
`;
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Feature = styled.li`
  margin: 4% 0px;
  font-size: calc(0.2rem + 1vw);
`;
const Span = styled.span`
  color: #4f5665;
  margin-left: 10px;
`;

const MiddleBanner = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <ImageContainer>
            <Image src="assets/Illustration 2.svg"></Image>
          </ImageContainer>
        </LeftContainer>
        <RightContainer>
          <HeadContent>We Provide Many Features You Can Use</HeadContent>
          <Desc>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </Desc>
          <FeatureList>
            <Feature>
              <Icon src="assets/Group 1120.svg"></Icon>
              <Span>Powerfull online protection</Span>
            </Feature>
            <Feature>
              <Icon src="assets/Group 1120.svg"></Icon>
              <Span>Internet without borders</Span>
            </Feature>
            <Feature>
              <Icon src="assets/Group 1120.svg"></Icon>
              <Span>Supercharged VPN</Span>
            </Feature>
            <Feature>
              <Icon src="assets/Group 1120.svg"></Icon>
              <Span>No specific time limits</Span>
            </Feature>
          </FeatureList>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default MiddleBanner;
