import React from "react";
import styled from "styled-components";

import teslaLogo from "../images/logo.svg";

function Logo() {
  return (
    <LogoContainer>
      <img src={teslaLogo} alt="Tesla Logo" />
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
