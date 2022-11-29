import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ContentCard from "../components/ContentCard";
import MiddleBanner from "../components/MiddleBanner";
import PlanBanner from "../components/PlanBanner";
import PlanBannerHead from "../components/PlanBannerHead";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import GlobalHead from "../components/GlobalHead";
import GlobalImage from "../components/GlobalImage";
import CarouselHead from "../components/CarouselHead";
import Carousel2 from "../components/Carousel2";

const Container = styled.div`
  padding: 0px 70px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Banner></Banner>
      <ContentCard></ContentCard>
      <MiddleBanner></MiddleBanner>
      <PlanBannerHead></PlanBannerHead>
      <PlanBanner></PlanBanner>
      <GlobalHead></GlobalHead>
      <GlobalImage></GlobalImage>
      {/* <CarouselHead></CarouselHead>
      <Carousel2></Carousel2> */}
      <Subscribe></Subscribe>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
