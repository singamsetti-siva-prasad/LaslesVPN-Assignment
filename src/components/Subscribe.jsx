import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 5vw 0vw;
  height: 23vh;
  width: 80%;
  position: relative;
  left: 10%;
  border-radius: 20px;
  box-shadow: 0px 0px 22px 12px #e6e6e6;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 50%;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 1.4rem;

  text-align: center;
  /* margin: 10px; */
  /* padding: 5px 40px; */
`;
const Desc = styled.p`
  font-weight: 400;
  color: #4f5665;
  padding: 0% 7%;
  margin: 2% 4%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  width: 30%;
  height: 30%;
  max-width: 55px;
  font-weight: 700;
  padding: 15px 32px;

  color: #ffffff;
  background-color: #f53838;
  border-radius: 12px;
  font-size: 1rem;
  border: none;
  /* margin-left: 20px; */
  box-shadow: 0px 20px 15px -3px #ffb3b3, 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const Subscribe = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Subscribe Now for Get Special Features!</Title>
          <Desc>Let's subscribe with us and find the fun.</Desc>
        </Left>

        <Right>
          <Button>Subscribe</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Subscribe;
