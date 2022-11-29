import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 350px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px gray solid;
  border-radius: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  margin: 10px;
`;

const NameContainer = styled.div`
  flex: 2;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin: 3px 0px;
`;

const Place = styled.p`
  font-size: 14px;
  color: #4f5665;
`;

const Rating = styled.p`
  flex: 1;
  text-align: end;
`;
const Span = styled.span``;
const Star = styled.img`
  height: 15px;
  margin-right: 15px;
`;
const Bottom = styled.div``;
const Review = styled.p`
  padding: 10px 15px;
  color: #4f5665;
`;

const CarouselCard = ({ EachCard, index }) => {
  return (
    <Container key={index}>
      <Wrapper>
        <Top>
          <ProfilePic src={EachCard.img}></ProfilePic>
          <NameContainer>
            <Name>{EachCard.name}</Name>
            <Place>{EachCard.city}</Place>
          </NameContainer>
          <Rating>{EachCard.data}</Rating>
          <Span>
            <Star src={EachCard.star}></Star>
          </Span>
        </Top>
        <Bottom>
          <Review>{EachCard.review}</Review>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CarouselCard;
