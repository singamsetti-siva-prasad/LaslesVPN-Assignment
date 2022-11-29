import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

// const TopContainer = styled.div``;

const BottomContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

const Card = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: 1px solid gray;
  border-radius: 20px;
  margin: ${(props) => props.id === "middle" && "0px 30px"};
`;
const CardTop = styled.div`
  margin: 20px;
`;
const Img = styled.img`
  height: 175px;
  margin: 5px;
`;
const Desc = styled.h3`
  font-weight: 500;
  text-align: center;
`;
const CardMiddle = styled.div`
  margin-bottom: 30px;
`;
const UL = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const LI = styled.li`
  margin: 30px 10px;
  color: #4f5665;
`;
const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`;
const CardBottom = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const Head = styled.p`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`;

const Span = styled.span`
  color: #4f5665;
`;
const Button = styled.button`
  color: #f53838;
  border-color: #f53838;
  padding: 10px 40px;
  border-radius: 20px;
  margin: 20px;
  background-color: transparent;
  background-color: ${(props) => props.id === "premium" && "#F53838"};
  color: ${(props) => props.id === "premium" && "#FFFFFF"};
`;

const PlanBanner = () => {
  return (
    <Container>
      {/* <TopContainer></TopContainer> */}

      <BottomContainer>
        <Card>
          <CardTop>
            <Img src="assets/Free.svg"></Img>
            <Desc>Free Plan</Desc>
          </CardTop>
          <CardMiddle>
            <UL>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Unlimited Bandwitch
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Encrypted Connection
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Yes Traffic Logs
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Works on All Devices
              </LI>
            </UL>
          </CardMiddle>
          <CardBottom>
            <Head>Free</Head>
            <Button>Select</Button>
          </CardBottom>
        </Card>

        <Card id="middle">
          <CardTop>
            <Img src="assets/Free.svg"></Img>
            <Desc>Standard Plan</Desc>
          </CardTop>
          <CardMiddle>
            <UL>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Unlimited Bandwitch
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Encrypted Connection
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>No Traffic Logs
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Works on All Devices
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Connect Anywhere
              </LI>
            </UL>
          </CardMiddle>
          <CardBottom>
            <Head>
              $9 <Span>/month</Span>
            </Head>
            <Button>Select</Button>
          </CardBottom>
        </Card>

        <Card>
          <CardTop>
            <Img src="assets/Free.svg"></Img>
            <Desc>Premium Plan</Desc>
          </CardTop>
          <CardMiddle>
            <UL>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Unlimited Bandwitch
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Encrypted Connection
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>No Traffic Logs
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Works on All Devices
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Connect Anywhere
              </LI>
              <LI>
                <Icon src="assets/Group 1120.svg"></Icon>Get New Features
              </LI>
            </UL>
          </CardMiddle>
          <CardBottom>
            <Head>
              $12 <Span>/month</Span>
            </Head>
            <Button id="premium">Select</Button>
          </CardBottom>
        </Card>
      </BottomContainer>
    </Container>
  );
};

export default PlanBanner;
