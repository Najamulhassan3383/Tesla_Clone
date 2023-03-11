import React from "react";
import styled from "styled-components";

function ModelsLinks() {
  return (
    <ModelContainer>
      <UL>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
        <li>PowerWalls</li>
      </UL>
    </ModelContainer>
  );
}

export default ModelsLinks;

const ModelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  top: 0;
`;

const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  list-style: none;
  li {
    padding: 0 10px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;
