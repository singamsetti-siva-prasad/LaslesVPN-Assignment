import React from "react";
import styled from "styled-components";
import { device } from "./responsive";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 0.1%;

  /* background-color: aliceblue; */
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

const LeftContainer = styled.div`
  width: 20%;
  height: 100%;
`;

const Logo = styled.img`
  width: 40%;
`;

const MiddleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
`;

const NavLinks = styled.p`
  font-size: calc(0.2rem + 1vw);
  text-decoration: none;
  color: #4f5665;
  font-weight: 400;
  margin: 1%;
  font-size: calc(0.5rem + 0.8vw);

  margin-right: ${(props) => props.type === "signin" && "20px"};
  font-size: ${(props) => props.type === "signin" && "calc(0.2rem + 1vw);"};
  font-weight: ${(props) => props.type === "signin" && "500"};
`;
const RightContainer = styled.div`
  width: 20%;
  /* background-color: lightpink; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
`;

const Button = styled.button`
  font-weight: 900;
  line-height: 9px;
  color: #f53855;
  border-radius: 20px;
  padding: 1vw 1vw;
  margin-right: 5%;
  background-color: #ffffff;
  border-color: #f53855;
  font-size: calc(0.1rem + 0.8vw);
`;

const Navbar = () => {
  return (
    <Container>
      <NavWrapper>
        <LeftContainer>
          <Logo src="assets/Logo.svg"></Logo>
        </LeftContainer>
        <MiddleContainer>
          <NavLinks>About</NavLinks>
          <NavLinks>Features</NavLinks>
          <NavLinks>Pricing</NavLinks>
          <NavLinks>Testimonials</NavLinks>
          <NavLinks>Help</NavLinks>
        </MiddleContainer>
        <RightContainer>
          <NavLinks type="signin">Sign In</NavLinks>
          <Button>Sign Up</Button>
        </RightContainer>
      </NavWrapper>
    </Container>
  );
};

export default Navbar;
