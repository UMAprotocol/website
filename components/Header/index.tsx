
import { useRouter } from "next/router";
import { COMMUNITY_LINKS } from "../../utils";
import { DownIcon, UmaLogoIcon } from "../Icons"
import { CommunityLink, Container, Content, LinkList, LinkListItem, LogoLink, NavContainer, NavLink, CommunityDropdownContainer, CommunityLinks, DropdownButton, DropdownValuesContainer, MenuToggleButton, MobileMenuContainer, MobileMenu, MobileNavLink, MobileCommunityLinks, MobileCommunityLink } from "./components"
import Image from 'next/image'
import { useState } from "react";

const NavLinks = () => {
  const router = useRouter();

  return (
    <LinkList>
      {HEADER_LINKS.map((link) => (
        <LinkListItem key={link.key}>{link.component({ path: router.pathname })}</LinkListItem>
      ))}
    </LinkList>
  );
}

export const Header: React.FunctionComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onToggle = (toggled: boolean) => {
    setShowMobileMenu(toggled);
  }

  return (
    <Container>
      <Content>
        <LogoLink href="/">
          <UmaLogoIcon />
        </LogoLink>
        <NavContainer>
          <NavLinks />
        </NavContainer>
        <MenuToggle onToggle={onToggle} />
        <MobileMenuComponent show={showMobileMenu} />
      </Content>
    </Container>
  );
}

const MobileMenuComponent: React.FC<{ show: boolean }> = ({ show }) => {
  const router = useRouter();

  return (
    <MobileMenuContainer show={show}>
        {MOBILE_HEADER_LINKS.map((link) => link.component({ path: router.pathname }))}
        <MobileCommunityLinks>
          {COMMUNITY_LINKS.map((link, idx) => (
            <MobileCommunityLink key={idx} href={link.href} target="_blank">
              <Image src={link.iconSrc} alt={link.alt} width={25} height={25} />
            </MobileCommunityLink>
          ))}
        </MobileCommunityLinks>
    </MobileMenuContainer>
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
    <MenuToggleButton onClick={onClickToggle} toggled={toggled}>
      <span></span>
      <span></span>
      <span></span>
    </MenuToggleButton>
  );
}

const CommunityDropdown: React.FunctionComponent = () => {
  return (
    <CommunityDropdownContainer>
      <DropdownButton>
        Community
        <DownIcon />
      </DropdownButton>
      <DropdownValuesContainer>
        <CommunityLinks>
          {COMMUNITY_LINKS.map((link, idx) => (
            <CommunityLink key={idx} href={link.href} target="_blank">
              <Image src={link.iconSrc} alt={link.alt} width={25} height={25} />
              <span>{link.name}</span>
            </CommunityLink>
          ))}
        </CommunityLinks>
      </DropdownValuesContainer>
    </CommunityDropdownContainer>
  );
}

const HEADER_LINKS = [
  {
    key: "Projects",
    component: () => <NavLink href="https://projects.umaproject.org/">Projects</NavLink>,
  },
  {
    key: "Products",
    component: ({ path }: { path: string }) => <NavLink href="/products" active={path === "/products"}>Products</NavLink>,
  },
  {
    key: "Docs",
    component: () =><NavLink href="https://docs.umaproject.org/" target="_blank">Docs</NavLink>,
  },
  {
    key: "Community",
    component: () => <CommunityDropdown />,
  },
  {
    key: "Vote",
    component: () => <NavLink href="https://vote.umaproject.org/">Vote</NavLink>,
  },
];

const MOBILE_HEADER_LINKS = [
  {
    key: "Projects",
    component: () => <MobileNavLink href="https://projects.umaproject.org/">Projects</MobileNavLink>,
  },
  {
    key: "Products",
    component: ({ path }: { path: string }) => <MobileNavLink href="/products" active={path === "/products"}>Products</MobileNavLink>,
  },
  {
    key: "Docs",
    component: () =><MobileNavLink href="https://docs.umaproject.org/" target="_blank">Docs</MobileNavLink>,
  },
  {
    key: "Vote",
    component: () => <MobileNavLink href="https://vote.umaproject.org/">Vote</MobileNavLink>,
  },
];
