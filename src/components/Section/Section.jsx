import React from "react";
import styled from "styled-components";
// import back from "../images/model-s.jpg";

import arrow from "../images/down-arrow.svg";
import { Fade } from "react-awesome-reveal";

function Section({ title, desc, bcg }) {
  return (
    <Wrap imgUrl={bcg}>
      <Fade direction="up" triggerOnce={true} fraction={0.5} duration={1500}>
        <ItemText>
          <H1>{title}</H1>
          <P>Leasing starting at $349/mo</P>
          <P>{desc}</P>
        </ItemText>
      </Fade>

      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src={arrow} />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
  z-index: 1;
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

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
