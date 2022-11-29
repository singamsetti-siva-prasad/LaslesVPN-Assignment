import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 80px 0px;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 35px;
  width: 35%;
  text-align: center;
  margin: 10px;
`;
const Desc = styled.p`
  width: 40%;
  text-align: center;
  color: #4f5665;
  font-weight: 400; ;
`;

const CarouselHead = () => {
  return (
    <Container>
      <Title>Trusted by Thousands of Happy Customer</Title>
      <Desc>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </Desc>
    </Container>
  );
};

export default CarouselHead;
