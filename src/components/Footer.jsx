import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #f8f8f8;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 4%;
`;

const LeftContainer = styled.div`
  width: 25%;
`;
const Logo = styled.img`
  height: 30%;
  width: 60%;
`;

const Desc = styled.p``;
const IconContainer = styled.div`
  margin: 8% 0%;
`;
const Icon = styled.img`
  background-color: transparent;
  height: 2%;
  width: 10%;
  margin-right: 15px;
  cursor: pointer;
`;
const Copyright = styled.p`
  color: #afb5c0;
`;

const RightContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const UnorderedList = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  padding: 4%;
  margin: ${(props) => props.id === "head" && "10px 0px"};
  font-weight: ${(props) => props.id === "head" && "500"};

  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <Logo src="assets/Logo.svg"></Logo>
          <Desc>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </Desc>
          <IconContainer>
            <Icon src="assets/Facebook.svg"></Icon>
            <Icon src="assets/Twitter.svg"></Icon>
            <Icon src="assets/Instagram.svg"></Icon>
          </IconContainer>
          <Copyright>©2020LaslesVPN</Copyright>
        </LeftContainer>
        <RightContainer>
          <UnorderedList>
            <ListItem id="head">Products</ListItem>
            <ListItem>Download</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>Locations</ListItem>
            <ListItem>Server</ListItem>
            <ListItem>Countries</ListItem>
            <ListItem>Blog</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem id="head">Engage</ListItem>
            <ListItem>LaslesVPN?</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Tutorials</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms of Service</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem id="head">Earn</ListItem>
            <ListItem>Affiliate</ListItem>
            <ListItem>Become Partner</ListItem>
          </UnorderedList>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
