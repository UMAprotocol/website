import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { constants } from "../../utils";
import { OOLogoIcon } from "../Icons";
import { PrimaryLink } from "../Link";
import { OutcomeBanner } from "../OutcomeBanner";

const { QUERIES, COLORS } = constants;
const PulseRingAnimation1 = keyframes`
  0% {
    transform: scale(0.5, 0.5);
    opacity: 0.0;
  }

  50% {
    opacity: 0.1;
  }

  100% {
    transform: scale(1.05, 1.05);
    opacity: 0.0;
  }
`

const PulseRingAnimation2 = keyframes`
  0% {
    transform: scale(0.5, 0.5);
    opacity: 0.0;
  }

  50% {
    opacity: 0.15;
  }

  100% {
    transform: scale(1.05, 1.05);
    opacity: 0.0;
  }
`

const PulseRingAnimation3 = keyframes`
  0% {
    transform: scale(0.5, 0.5);
    opacity: 0.0;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    transform: scale(1.05, 1.05);
    opacity: 0.0;
  }
`

export const Container = styled.section`

`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const CoverContainer = styled(Container)`
  background-color: var(--gray-300);
`;

export const CoverContent = styled(Content)`
  padding: 30px 15px 0;

  @media ${QUERIES.tabletAndUp} {
    padding: 50px 20px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 50px 40px 0;
  }
`;

export const OOContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CoverText = styled.div`
  margin: 0 0 20px;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    margin: 0 0 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 55%;
  }
`;

export const DesktopLogoContainer = styled.div`
  max-width: 400px;
  width: 40%;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

export const MobileLogoContainer = styled.div`
  max-width: 280px;
  width: 100%;
  margin: 15px auto 0;
  display: block;

  @media ${QUERIES.tabletAndUp} {
    max-width: 350px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export const LogoHeadline = styled.div`
  margin: 0 0 15px;
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
    font-size: ${16 / 16}rem;
    line-height: ${24 / 16}rem;
    font-weight: 600;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  @media ${QUERIES.tabletAndUp} {
    margin: 0 0 25px;

    svg {
      width: 60px;
      height: 60px;
    }

    span {
      font-size: ${24 / 16}rem;
      line-height: ${30 / 16}rem;
    }
  }
`;

export const CoverTitle = styled.h1`
  font-size: ${44 / 16}rem;
  line-height: ${44 / 16}rem;
  font-weight: 700;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${68 / 16}rem;
    line-height: ${68 / 16}rem;
  }
`

export const CoverParagraph = styled.p`
  margin: 15px 0 25px;
  max-width: 480px;
  font-size: ${16 / 16}rem;
  line-height: ${22 / 16}rem;
  font-weight: normal;

  @media ${QUERIES.tabletAndUp} {
    margin: 20px 0 70px;
    font-size: ${18 / 16}rem;
    line-height: ${22 / 16}rem;
  }
`

export const CoverLink = styled(PrimaryLink)`
  margin-left: 0;
`

export const AspectRatioContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
`

export const PulseLogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const pulseOOLogoAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  75% {
    transform: translate(-50%, -50%) scale(1);
  }

  90% {
    transform: translate(-50%, -50%) scale(1.03);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const PulseLogoIcon = styled(OOLogoIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 45%;
  animation: ${pulseOOLogoAnimation} 3s infinite;
`;

export const PulseRing = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid var(--primary);
  border-radius: 50%;
  animation: ${PulseRingAnimation1} 3s ease-out infinite;

  :nth-of-type(2) {
    top: 9.165%;
    bottom: 9.165%;
    left: 9.165%;
    right: 9.165%;
    animation: ${PulseRingAnimation2} 3s ease-out infinite;
  }

  :nth-of-type(3) {
    top: 18.33%;
    bottom: 18.33%;
    left: 18.33%;
    right: 18.33%;
    animation: ${PulseRingAnimation3} 3s ease-out infinite;
  }
`

export const OOFeatures = styled.div`
  position: relative;
  padding: 16px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-top: 1px solid var(--white);

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: linear-gradient(hsla(${COLORS.black} / 0.04) 0%, hsla(${COLORS.black} / 0) 100%);
  }
`

export const OOFeature = styled.div`
  padding: 0 10px;
  margin: 4px auto;
  width: 50%;
  display: flex;
  align-items: center;
  font-size: ${14 / 16}rem;
  line-height: ${22 / 16}rem;
  font-weight: normal;

  span {
    margin-left: 10px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: unset;
  }
`

export const ProductsContent = styled(Content)`
  padding: 0 15px;

  @media ${QUERIES.tabletAndUp} {
    padding: 0 20px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 40px;
  }
`;

export const ProductsOutcomeBanner = styled(OutcomeBanner)`
  margin: 50px auto 40px; 
`