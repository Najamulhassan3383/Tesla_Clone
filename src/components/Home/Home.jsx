import React from "react";
import styled from "styled-components";
import Section from "../Section/Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online"
        bcg={require("../images/model-s.jpg")}
      />
      <Section
        title="Model 3"
        desc="Order Online"
        bcg={require("../images/model-3.jpg")}
      />
      <Section
        title="Model y"
        desc="Order Online"
        bcg={require("../images/model-y.jpg")}
      />
      <Section
        title="Model x"
        desc="Order Online"
        bcg={require("../images/model-x.jpg")}
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        bcg={require("../images/solar-panel.jpg")}
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bcg={require("../images/solar-roof.jpg")}
      />
      <Section
        title="Accessories"
        desc=""
        bcg={require("../images/accessories.jpg")}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
