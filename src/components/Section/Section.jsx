import React from "react";
import styled from "styled-components";

import backgroundImage from "../images/model-s.jpg";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <H1>Model 3</H1>
        <P>Leasing starting at $349/mo</P>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const H1 = styled.h1`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 5px;
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
