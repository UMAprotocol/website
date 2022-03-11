import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { constants } from "../../utils";
import { BaseButton } from "../Button";
import { UmaLogoIcon } from "../Icons";
import { Link } from "../Link";

const { QUERIES, COLORS } = constants;
const RevealDropdownAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.header`
  position: relative;

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(180deg, hsla(${COLORS.black} / 0.02) 0%, hsla(${COLORS.black} / 0) 100%);
  }
`;

export const Content = styled.div`
  margin: auto;
  padding: 25px 15px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;

  @media ${QUERIES.tabletAndUp} {
    padding: 25px 20px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 30px 40px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  color: var(--primary);
`

export const LogoLinkIcon = styled(UmaLogoIcon)`
  height: 20px;
  width: 78px;

  @media ${QUERIES.laptopAndUp} {
    height: 35px;
    width: 137px;
  }
`

export const NavContainer = styled.nav`
  display: none;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
`

export const LinkListItem = styled.li`
  margin-left: 60px;
`

export const NavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  display: block;

  ::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => active ? "100%" : 0 };
    height: 3px;
    background-color: var(--primary);
    transition: width .2s ease-out;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }
`

export const DropdownValuesContainer = styled.div`
  position: relative;
  display: none;
  padding: 20px 0 0;
  width: 260px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: ${RevealDropdownAnimation} .2s ease-out forwards;
`

export const CommunityDropdownContainer = styled.div`
  position: relative;

  :hover ${DropdownValuesContainer} {
    display: block;
  }
`

export const DropdownButton = styled(BaseButton)`
  svg {
    margin: 0 0 2px 10px;
  }
`

export const CommunityLinks = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 20px hsla(${COLORS.black} / 0.1);
  overflow: hidden;
`

export const CommunityLink = styled(Link)`
  margin: 0 20px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray-300);

  :last-of-type {
    border-bottom: none;
  }

  span {
    margin-left: 15px;
    transition: color .2s ease-out;
  }

  :hover {
    span {
      color: var(--primary);
    }
  }
`

export const MenuToggleButton = styled(BaseButton)<{ toggled?: boolean }>`
  display: block;
  position: relative;
  height: 18px;
  width: 25px;

  span {
    position: absolute;
    display: block;
		height: 2px;
    width: 25px;
		background-color: ${({ toggled }) => toggled ? "var(--gray-600)" : "var(--gray-700)" };;
    transition: ${({ toggled }) => toggled ? (
      "background .2s, top .2s, opacity .2s, transform .2s .25s"
    ) : (
      "top .2s .25s, opacity .2s .25s, transform .2s"
    )};

    :nth-of-type(1) {
      top: ${({ toggled }) => toggled ? "9px" : 0};
      transform: ${({ toggled }) => toggled ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-of-type(2) {
      top: 8px;
      opacity: ${({ toggled }) => toggled ? 0 : 1};
    }

    :nth-of-type(3) {
      top: ${({ toggled }) => toggled ? "9px" : "16px"};
      transform: ${({ toggled }) => toggled ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 0 20px;
  background-color: var(--white);
  transform: ${({ show }) => show ? "translateY(0)" : "translateY(-20px)"};
  opacity: ${({ show }) => show ? 1 : 0};
  transition: transform .3s ease-out, opacity .3s ease-out;
  z-index: 5;
  pointer-events: ${({ show }) => show ? "all" : "none"};;

  ::after {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    opacity: 0;
    content: "";
    height: 99999px;
    background: #000;
    opacity: .5;
    pointer-events: none;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

export const MobileNavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  display: block;
  font-weight: 600;
  font-size: ${16 / 16}rem;
  line-height: 22px;
  padding: 25px 0 4px;
  border-bottom: 1px solid;
  border-color: ${({ active }) => active ? "var(--primary)" : "var(--gray-500)"};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
    line-height: 24px;
  }
`

export const MobileCommunityLinks = styled.div`
  display: flex;
  padding: 30px 0 25px;
`

export const MobileCommunityLink = styled(Link)`
  margin-right: 25px;
`
