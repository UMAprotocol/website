import styled from "@emotion/styled";
import { QUERIES } from "../../utils/constants";
import { OutcomeLogoIcon } from "../Icons";
import { Link } from "../Link";

export const Container = styled.div<{ visible: boolean }>`
  position: relative;
  margin: auto auto 40px; 
  max-width: 1200px;
  padding: 0 20px;
  opacity: ${({ visible }) => visible ? 1: 0};
  top: ${({ visible }) =>  visible ? 0 : "50px"};
  transition: opacity 0.4s ease-out, top 0.4s ease-out;

  @media ${QUERIES.tabletAndUp} {
    
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 40px;
  }
`;

export const Content = styled.div`
  background-color: #033C99;
  position: relative;
`

export const MobileBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 150px;
  background-image: url('/images/outcome/mobile-background.png');
  background-size: cover;
  z-index: 0;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

export const BackgroundLeft = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  background-image: url('/images/outcome/background-l.png');
  background-size: cover;
  z-index: 0;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`

export const BackgroundRight = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 310px;
  background-image: url('/images/outcome/background-r.png');
  background-size: cover;
  z-index: 0;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`

export const TextContent = styled.div`
  position: relative;
  margin: auto;
  padding: 32px 16px;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  
  @media ${QUERIES.laptopAndUp} {
    max-width: 650px;
  }
`

export const Title = styled.p`
  margin: 38px 0;
  font-family: 'Larken';
  font-weight: bold;
  font-size: ${26 / 16}rem;
  line-height: ${30 / 16}rem;;
  text-align: center;
  color: #FFF8ED;
  

  @media ${QUERIES.laptopAndUp} {
    font-size: ${36 / 16}rem;;
    line-height: ${40 / 16}rem;;
    letter-spacing: 1px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-family: 'Larken-Bold';
    font-weight: bold;
    font-size: ${18 / 16}rem;;
    line-height: ${22 / 16}rem;;
    color: #FFF8ED;
  }

  @media ${QUERIES.tabletAndUp} {
    span {
      font-size: ${22 / 16}rem;
      line-height: ${26 / 16}rem;
    }
  }
`

export const OutcomeLink = styled(Link)`
  display: flex;
  padding: 13px 16px;
  background-color: var(--white);
  border-radius: 24px;
  color: #033C99;
  opacity: 1;
  transition: opacity 0.2s ease-out;

  span {
    margin-right: 12px;
    font-family: 'Gotham';
    font-weight: bold;
    font-size: ${12 / 16}rem;;
    line-height: ${14 / 16}rem;;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 17px 24px;
  }

  :hover {
    opacity: 0.9;
  }
`

export const LogoIcon = styled(OutcomeLogoIcon)`
  width: 24px;
  height: 24px;

  @media ${QUERIES.tabletAndUp} {
    width: 32px;
    height: 32px;
  }
`