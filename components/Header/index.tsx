
import { useRouter } from "next/router";
import { COMMUNITY_LINKS } from "../../utils";
import { BaseButton } from "../Button";
import { DownIcon, UmaLogoIcon } from "../Icons"
import { Link } from "../Link";
import { CommunityLink, Container, Content, LinkList, LinkListItem, LogoLink, NavContainer, NavLink, CommunityDropdownContainer, CommunityLinks, DropdownButton, DropdownValuesContainer } from "./components"
import Image from 'next/image'


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
    component: () =><NavLink href="https://docs.umaproject.org/">Docs</NavLink>,
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
  return (
    <Container>
      <Content>
        <LogoLink href="/">
          <UmaLogoIcon />
        </LogoLink>
        <NavContainer>
          <NavLinks />
        </NavContainer>
      </Content>

    </Container>
  )
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
