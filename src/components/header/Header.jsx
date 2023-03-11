import React from "react";
import styled from "styled-components";
import Logo from "../header/Logo";
import ModelsLinks from "./ModelsLinks";

function Header() {
  return (
    <div>
      <Logo />
      <ModelsLinks />
    </div>
  );
}

export default Header;
