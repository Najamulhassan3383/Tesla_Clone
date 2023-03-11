import React from "react";
import styled from "styled-components";

function ModelsLinks() {
  return <ModelContainer>I am a model link</ModelContainer>;
}

export default ModelsLinks;

const ModelContainer = styled.div`
  position: absolute;
  height: 40px;
  width: 90px;
  z-index: 1;
`;
