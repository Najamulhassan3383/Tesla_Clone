import React from "react";
import styled from "styled-components";

function RigntMenu() {
  return (
    <Right>
      <UL>
        <li>Shop</li>
        <li>Tesla Account</li>
        <li>Menu</li>
      </UL>
    </Right>
  );
}

export default RigntMenu;

const Right = styled.div`
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
