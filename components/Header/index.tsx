import React from "react";
import { useRouter } from "next/router";
import { constants } from "../../utils";
import { DownIcon } from "../Icons"
import * as UI from "./components"
import Image from 'next/image'
import { useState } from "react";

const { COMMUNITY_LINKS } = constants;

const NavLinks = () => {
  const router = useRouter();

  return (
    <UI.LinkList>
      {HEADER_LINKS.map((link) => (
        <UI.LinkListItem key={link.key}>{link.component({ path: router.pathname })}</UI.LinkListItem>
      ))}
    </UI.LinkList>
  );
}

export const Header: React.FunctionComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onToggle = (toggled: boolean) => {
    setShowMobileMenu(toggled);
  }

  return (
    <UI.Container>
      <UI.Content>
        <UI.LogoLink href="/">
          <UI.LogoLinkIcon />
        </UI.LogoLink>
        <UI.NavContainer>
          <NavLinks />
        </UI.NavContainer>
        <MenuToggle onToggle={onToggle} />
        <MobileMenuComponent show={showMobileMenu} />
      </UI.Content>
    </UI.Container>
  );
}

const MobileMenuComponent: React.FC<{ show: boolean }> = ({ show }) => {
  const router = useRouter();

  return (
    <UI.MobileMenuContainer show={show}>
        {MOBILE_HEADER_LINKS.map((link) => link.component({ path: router.pathname }))}
        <UI.MobileCommunityLinks>
          {COMMUNITY_LINKS.map((link, idx) => (
            <UI.MobileCommunityLink key={idx} href={link.href} target="_blank">
              <Image src={link.iconSrc} alt={link.alt} width={25} height={25} />
            </UI.MobileCommunityLink>
          ))}
        </UI.MobileCommunityLinks>
    </UI.MobileMenuContainer>
  );
}

const MenuToggle: React.FC<{ onToggle: (toggled: boolean) => void }> = ({ onToggle }) => {
  const [toggled, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle((prevToggled) => {
      onToggle(!prevToggled);
      return !prevToggled;
    });
  }

  return (
    <UI.MenuToggleButton onClick={onClickToggle} toggled={toggled}>
      <span></span>
      <span></span>
      <span></span>
    </UI.MenuToggleButton>
  );
}

const CommunityDropdown: React.FunctionComponent = () => {
  return (
    <UI.CommunityDropdownContainer>
      <UI.DropdownButton>
        Community
        <DownIcon />
      </UI.DropdownButton>
      <UI.DropdownValuesContainer>
        <UI.CommunityLinks>
          {COMMUNITY_LINKS.map((link, idx) => (
            <UI.CommunityLink key={idx} href={link.href} target="_blank">
              <Image src={link.iconSrc} alt={link.alt} width={25} height={25} />
              <span>{link.name}</span>
            </UI.CommunityLink>
          ))}
        </UI.CommunityLinks>
      </UI.DropdownValuesContainer>
    </UI.CommunityDropdownContainer>
  );
}

const HEADER_LINKS = [
  {
    key: "Projects",
    component: () => <UI.NavLink href="https://projects.umaproject.org/">Projects</UI.NavLink>,
  },
  {
    key: "Products",
    component: ({ path }: { path: string }) => <UI.NavLink href="/products" active={path === "/products"}>Products</UI.NavLink>,
  },
  {
    key: "Docs",
    component: () =><UI.NavLink href="https://docs.umaproject.org/" target="_blank">Docs</UI.NavLink>,
  },
  {
    key: "Community",
    component: () => <CommunityDropdown />,
  },
  {
    key: "Vote",
    component: () => <UI.NavLink href="https://vote.umaproject.org/">Vote</UI.NavLink>,
  },
];

const MOBILE_HEADER_LINKS = [
  {
    key: "Projects",
    component: () => <UI.MobileNavLink href="https://projects.umaproject.org/">Projects</UI.MobileNavLink>,
  },
  {
    key: "Products",
    component: ({ path }: { path: string }) => <UI.MobileNavLink href="/products" active={path === "/products"}>Products</UI.MobileNavLink>,
  },
  {
    key: "Docs",
    component: () =><UI.MobileNavLink href="https://docs.umaproject.org/" target="_blank">Docs</UI.MobileNavLink>,
  },
  {
    key: "Vote",
    component: () => <UI.MobileNavLink href="https://vote.umaproject.org/">Vote</UI.MobileNavLink>,
  },
];
