import React from "react";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Slide = styled.div`
  flex: 1;
  margin: 0px 40px;
`;

const Carousel = () => {
  return (
    <Container>
      <Wrapper>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
        <Slide>
          <CarouselCard></CarouselCard>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Carousel;
