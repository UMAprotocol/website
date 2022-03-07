import React from "react";
import NextLink, { LinkProps } from "next/link";
import { StyledLink } from "./components";
import styled from "@emotion/styled";
import { QUERIES } from "../../utils";

type Props = React.PropsWithChildren<LinkProps> & {
  className?: string;
  target?: string;
};
export const Link: React.FC<Props> = ({
  children,
  className,
  target,
  ...delegated
}) => {
  const rel = target === "_blank" ? "noopener norefferer" : undefined;
  return (
    <NextLink {...delegated} passHref>
      <StyledLink className={className} target={target} rel={rel}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export const PrimaryLink = styled(Link)`
  width: 130px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: ${15 / 16}rem;
  line-height: 20px;
  font-weight: 500;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--white);
  transition: background-color .2s ease-out;

  &:hover {
    background-color: var(--primary-dark);
  }

  @media ${QUERIES.tabletAndUp} {
    width: 215px;
    padding: 14px;
    font-size: ${20 / 16}rem;
    line-height: 27px;
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  padding: 9px;
  background-color: var(--white);
  color: var(--primary);
  border: 1px solid var(--primary);
  transition: background-color .2s ease-out;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 13px;
    font-size: ${20 / 16}rem;
    line-height: 27px;
  }
`;
