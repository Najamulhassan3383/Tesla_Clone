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
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 90px;
  z-index: 1;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
