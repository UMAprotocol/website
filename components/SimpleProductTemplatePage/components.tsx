import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { constants } from "../../utils";
import { OOLogoIcon } from "../Icons";
import { PrimaryLink } from "../Link";

const { QUERIES, COLORS } = constants;

export const HeroContainer = styled.section`
  padding: 87px 0 100px;
  background: linear-gradient(to left, #ff4a4a 66%, #272528);
`;

export const HeroContent = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.08;
  font-weight: 600;
  color: #fff;
  font-size: 100px;
`;

export const HeroDetails = styled.h4`
  margin: 1rem auto 0;
  max-width: 850px;
  padding-left: 27px;
  color: #fff;
  font-family: "Halyard Display";
  font-size: 1.6rem;
  font-weight: 300;
`;

export const HeroLogo = styled.span`
  padding: 0;
  margin: 0;
  outline: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  position: absolute;
  right: 0;
  -webkit-transform: translateY(-40px);
  -ms-transform: translateY(-40px);
  transform: translateY(-40px);
  margin-right: 2rem;
  font-size: 1.25rem;
`;

export const HeroImg = styled.img`
  height: 25px;
  display: inline-block;
  vertical-align: middle;
`;

export const SectionContainer = styled.section`
  padding: 80px 0 140px;
`;
export const SectionTitle = styled.p`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;
export const SectionDetail = styled.p`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1rem;
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 20px;
  margin-bottom: 1.67em;
  ::before {
    content: "";
    position: absolute;
    border-color: #ff4a4a;
    border-style: solid;
    border-width: 0.125rem;
    height: 1.5rem;
    margin-right: 8px;
    -webkit-transform: translateX(-16px);
    -ms-transform: translateX(-16px);
    transform: translateX(-16px);
  }
`;

export const SectionLinkContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
export const SectionButton = styled(PrimaryLink)`
  width: auto;
  margin: 0;
  @media ${QUERIES.tabletAndUp} {
    width: 400px;
  }
`;

export const Container = styled.section``;
