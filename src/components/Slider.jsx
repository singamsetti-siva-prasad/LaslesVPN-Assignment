import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;

  /* inorder to move the arrow to middle we have to keep 
  the position of arrow as absolute and parent container a relative
  to position them centre top-0 bottom-0, margin-auto*/
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

/* we move this wrapper when we click on the button and 
this wrapper contains slides which contains images and info
*/
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100vw;
  height: 100vh;
  /* background-color: rgb(100, 20, 30); */
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const Image = styled.img`
  height: 80%;
  padding-left: 25px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-top: 50px;
  font-weight: 800;
  font-size: 70px;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 50px 0px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-color: transparent;
  /* border: none; */
  border-radius: 5px;
  cursor: pointer;
  transition: transform 250ms, opacity 400ms;
  &:hover {
    background-color: gray;
    transform: scale(1.2);
    opacity: 1;
  }
`;

const Slider = () => {
  const navigate = useNavigate();
  const [slideIndex, setslideIndex] = useState("0");

  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button onClick={() => navigate("productspage")}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("left")}>
        <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
