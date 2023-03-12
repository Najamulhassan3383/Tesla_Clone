import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardTitle, setCardTitle] = useState([
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
  ]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleButton = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <a>
        <img src={Logo} />
      </a>

      <Menu>
        <a href="#">Model S</a>

        <a>Model 3</a>

        <a>Model X</a>

        <a>Model Y</a>

        <a>Solar Roof</a>

        <a>Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomeMenu onClick={toggleButton}>
          <MenuIcon />
        </CustomeMenu>
      </RightMenu>

      <BurgerNav is={isOpen}>
        <CloseWrapper>
          <CustomCloseButton onClick={toggleButton} />
        </CloseWrapper>

        {windowWidth < 1068 &&
          cardTitle.map((title) => (
            <li>
              <a href="#">{title}</a>
            </li>
          ))}

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1068px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomeMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.is ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomCloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
