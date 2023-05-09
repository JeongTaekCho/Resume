import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  const onToggleNavigation = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <Wrap>
        <Container>
          <Logo isShow={isShow}>
            <Link href="/">JeongTaek</Link>
          </Logo>
          <NavBox>
            <MenuBtn isShow={isShow} onClick={onToggleNavigation}>
              MENU
            </MenuBtn>
          </NavBox>
        </Container>
      </Wrap>
      <Navigation isShow={isShow}>
        <Menu>
          <li>
            <Link href="resume">
              <LinkContainer>
                <span>RESUME</span>
                <span className="hover-ac">RESUME</span>
              </LinkContainer>
            </Link>
          </li>
          <li>
            <Link href="resume">
              <LinkContainer>
                <span>CONTACT</span>
                <span className="hover-ac">CONTACT</span>
              </LinkContainer>
            </Link>
          </li>
        </Menu>
      </Navigation>
    </>
  );
}

const Wrap = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Container = styled.div`
  padding: 4rem 6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => (props.isShow ? "#fff" : "#111")};
    text-decoration: line-through;
    letter-spacing: 2px;
  }
`;

const NavBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const MenuBtn = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.isShow ? "#fff" : "#111")};
  border: none;
  background: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Navigation = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: ${(props) => (props.isShow ? 0 : "-100%")};
  left: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 9998;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  li {
    font-size: 6rem;
    font-weight: 700;
  }
`;

const LinkContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  span {
    display: block;
    color: #fff;
  }
  .hover-ac {
    color: #000;
    -webkit-text-stroke: 1px #fff;
    position: absolute;
    top: 100%;
  }

  &:hover span {
    transform: translateY(-100%);
    transition: transform 0.3s ease-out 0s;
  }
`;
