import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { QUERIES } from "../../utils";
import { BaseButton } from "../Button";
import { Link } from "../Link";

const RevealDropdownAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.header`

`;

export const Content = styled.div`
  margin: auto;
  padding: 25px 15px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    padding: 40px;
  }
`;

export const LogoLink = styled(Link)`
  color: var(--primary);
  display: flex;

  svg {
    height: 20px !important;
    width: 78px !important;
  }

  @media ${QUERIES.tabletAndUp} {
    svg {
      height: 35px !important;
      width: 137px !important;
    }
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
    margin-left: 10px;
  }
`

export const CommunityLinks = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(39, 37, 40, 0.1);
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
