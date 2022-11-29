import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Carousel2 = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <ArrowCircleRightOutlinedIcon></ArrowCircleRightOutlinedIcon>,
    prevArrow: <ArrowCircleLeftOutlinedIcon></ArrowCircleLeftOutlinedIcon>,
  };
  const CardData = [
    {
      img: "assets/Ellipse 175.png",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      rating: "4.5",
      name: "Viezh Robert",
      city: "Warsaw, Poland",
      star: "assets/Vector.svg",
    },
    {
      img: "assets/Ellipse 175(1).png",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      rating: "4.5",
      name: "Viezh Robert",
      city: "Warsaw, Poland",
      star: "assets/Vector.svg",
    },
    {
      img: "assets/Ellipse 175 (2).png",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      rating: "4.5",
      name: "Viezh Robert",
      city: "Warsaw, Poland",
      star: "assets/Vector.svg",
    },
    {
      img: "assets/Ellipse 175 (2).png",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      rating: "4.5",
      name: "Viezh Robert",
      city: "Warsaw, Poland",
      star: "assets/Vector.svg",
    },
  ];

  return (
    <Container>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {CardData.map((EachCard, index) => (
          <CarouselCard EachCard={EachCard} index={index}></CarouselCard>
        ))}
      </Slider>
      <button onCLick={sliderRef?.slickPrev}>
        <ArrowCircleLeftOutlinedIcon></ArrowCircleLeftOutlinedIcon>
      </button>
      <button onCLick={sliderRef?.slickNext}>
        <ArrowCircleRightOutlinedIcon></ArrowCircleRightOutlinedIcon>
      </button>
    </Container>
  );
};

export default Carousel2;
