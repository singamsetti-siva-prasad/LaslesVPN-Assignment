import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  margin-top: 10%;
`;
const Wrapper = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
`;
const HeadContent = styled.h1`
  font-size: calc(1.5rem + 2vw);
  font-weight: 500;
  margin: 20px;
`;
const Desc = styled.p`
  margin: 20px;
  color: #4f5665;
  font-size: calc(0.2rem + 1vw);
`;
const Button = styled.button`
  width: 40%;
  max-height: 60px;
  padding: 20px 50px;
  font-weight: 700;
  color: #ffffff;
  background-color: #f53838;
  border-radius: 12px;
  font-size: 1rem;
  border: none;
  margin-left: 10%;
  box-shadow: 0px 20px 15px -3px #ffb3b3, 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const RightContainer = styled.div`
  width: 60%;
  /* padding: 50px; */
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 600px;
  object-fit: contain;
  padding: 0px 20px;
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <HeadContent>Want anything to be easy with LaslesVPN.</HeadContent>
          <Desc>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </Desc>
          <Button>Get Started</Button>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <Image src="assets/Illustration 1.svg"></Image>
          </ImageContainer>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Banner;
