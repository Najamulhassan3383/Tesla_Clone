import React from "react";
import styled from "styled-components";
import Logo from "../header/Logo";
import ModelsLinks from "./ModelsLinks";
import RigntMenu from "./RigntMenu";

function Header() {
  return (
    <Head>
      <Logo />
      <ModelsLinks />
      <RigntMenu />
    </Head>
  );
}

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  padding: 0 20px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;
