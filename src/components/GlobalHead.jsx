import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  width: 40%;
  text-align: center;
  margin: 10px;
`;
const Desc = styled.p`
  width: 40%;
  text-align: center;
  color: #4f5665;
  font-weight: 400; ;
`;

const GlobalHead = () => {
  return (
    <Container>
      <Title>Huge Global Network of Fast VPN</Title>
      <Desc>
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </Desc>
    </Container>
  );
};

export default GlobalHead;
