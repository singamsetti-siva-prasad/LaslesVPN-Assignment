import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0px;
  height: 25vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Head = styled.h1`
  font-weight: 500;
  margin: 20px;
  font-size: calc(0.8rem + 1.2vw);
`;

const Desc = styled.p`
  font-weight: 400;
  color: #4f5665;
  font-size: calc(0.2rem + 1vw);
`;

const PlanBannerHead = () => {
  return (
    <Container>
      <Wrapper>
        <Head>Choose Your Plan</Head>
        <Desc>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default PlanBannerHead;
