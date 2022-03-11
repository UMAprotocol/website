import styled from "@emotion/styled";
import { constants } from "../../utils";
import { DiagonalArrowIcon } from "../Icons";
import { Link, PrimaryLink, SecondaryLink } from "../Link";

const { QUERIES, COLORS } = constants;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

export const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GridColumn = styled.div`
  width: 50%;
  padding: 0 10px;
`

export const Container = styled.section`
  background-color: var(--gray-700);
`

export const Content = styled.div`
  margin: auto;
  padding: 50px 15px 45px;
  max-width: 1200px;

  @media ${QUERIES.tabletAndUp} {
    padding: 115px 40px 75px;
  }
`

export const Title = styled.h1`
  display: block;
  max-width: 320px;
  margin: 0 auto 50px;
  font-weight: 700;
  font-size: clamp(2.5rem, 5.7vw + 0.2rem, 5rem);
  line-height: 1;
  text-align: center;
  color: var(--white);

  & > span {
    color: var(--primary);
  }

  @media ${QUERIES.tabletAndUp} {
    max-width: unset;
    margin: 0 auto 80px;
    line-height: 1.05;
  }
`;

export const HomeSectionContainer = styled.section<{ grayBackground?: boolean }>`
  background-color: ${({ grayBackground }) => grayBackground ? "var(--gray-300)" : "var(--white)"};
`

export const HomeSectionContent = styled.div`
  padding: 25px 15px;
  margin: auto;
  max-width: 1200px;
  
  @media ${QUERIES.tabletAndUp} {
    padding: 40px 20px 50px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 40px 40px 50px;
  }
`

export const HomeSectionHeadline = styled.h2`
  font-style: normal;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--primary);
`

export const OODescription = styled.p`
  margin: 15px 0 30px;
  font-style: normal;
  font-size: ${20 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: 500;
  color: var(--gray-700);

  @media ${QUERIES.tabletAndUp} {
    margin: 25px 0 40px;
    font-size: ${32 / 16}rem;
    line-height: ${38 / 16}rem;
  }
`

export const OOBoxes = styled(GridRow)`
  margin: 0 0 30px;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    margin: 0 -15px 45px;
    flex-direction: row;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  border-radius: 5px;
  padding: 15px 20px 20px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    padding: 25px;
  }
`

export const OOBoxContainer = styled(GridColumn)`
  width: 100%;
  padding: 0;
  margin: 0 0 10px;

  @media ${QUERIES.tabletAndUp} {
    width: 33.3%;
    padding: 0 15px;
    margin: 0;
  }
`

export const OOBox = styled(Box)`
  padding: 15px 20px;

  @media ${QUERIES.tabletAndUp} {
    padding: 30px 25px;
  }
`

export const BoxImgContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    height: 60px;
    margin: 0 0 20px;
  }
`

export const BoxImg = styled.img`
  display: block;
  margin: auto;
`

export const OOBoxTextContainer = styled.div`
  margin-left: 20px;

  @media ${QUERIES.tabletAndUp} {
    margin-left: unset;
  }
`

export const BoxTitle = styled.span`
  display: block;
  margin: 0 0 5px;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: ${25 / 16}rem;
  text-align: left;
  color: var(--gray-700);

  @media ${QUERIES.tabletAndUp} { 
    margin: 0 0 12px;
    font-size: ${20 / 16}rem;
    line-height: ${28 / 16}rem;
    text-align: center;
  }
`

export const BoxDescription = styled.span`
  display: block;
  margin: auto;
  max-width: 270px;
  font-size: ${14 / 16}rem;
  line-height: ${18 / 16}rem;
  font-weight: normal;
  text-align: left;
  color: var(--gray-700);

  @media ${QUERIES.tabletAndUp} {
    font-size: ${15 / 16}rem;
    text-align: center;
  }
`

export const ProjectsList = styled.div`
  margin: 10px 0 15px;
  display: flex;
  flex-wrap: wrap;

  @media ${QUERIES.tabletAndUp} {
    margin: 15px 0 20px;
  }
`

export const ProjectContainer = styled.div`
  padding: 0 10px;
  width: 33.3%;

  @media ${QUERIES.laptopAndUp} {
    padding: 0 20px;
    width: 20%;
  }
`

export const ProjectNameIcon = styled(DiagonalArrowIcon)`
  display: block;
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-40%);
  opacity: 0;
  transition: opacity .2s ease-out;
`

export const ProjectLink = styled(Link)`
  padding: 15px 0;
  display: block;
  border: 1px solid transparent;
  border-radius: 5px;
  transition-property: border, box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-out;

  &:hover {
    border: 1px solid var(--gray-300);
    box-shadow: 0px 12px 20px hsla(${COLORS.black} / 0.04);
    color: var(--primary);
  }

  &:hover ${ProjectNameIcon} {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 30px 15px;
  }
`

export const ProjectIcon = styled.img`
  display: block;
  margin: auto;
  width: 50px;
  height: 50px;

  @media ${QUERIES.tabletAndUp} {
    width: 70px;
    height: 70px;
  }
`

export const ProjectName = styled.span`
  position: relative;
  display: block;
  width: fit-content;
  margin: 5px auto 0;
  font-size: ${14 / 16}rem;
  font-weight: normal;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    margin: 15px auto 0;
    font-size: ${16 / 16}rem;
  }
`

export const UmaFeatures = styled(GridRow)`
  margin: 30px -10px 0;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    margin: 30px -15px 0;
    flex-direction: row;
  }
`

export const UmaFeatureContainer = styled(GridColumn)`
  width: 100%;
  margin: 0 0 10px;

  @media ${QUERIES.tabletAndUp} {
    width: 50%;
    padding: 15px;
    margin: 0;
  }
`

export const UmaFeature = styled(Box)`

`

export const UmaFeatureImgContainer = styled(BoxImgContainer)`
  @media ${QUERIES.tabletAndUp} {
    height: 65px;
  }
`

export const UmaFeatureImg = styled(BoxImg)`
  width: 50px !important;

  @media ${QUERIES.tabletAndUp} {
    width: unset !important;
  }
`

export const ProductsContainer = styled(GridRow)`
  flex-direction: column;
  margin: 20px 0 15px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    margin: 30px -10px 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 30px -20px 40px;
  }
`

export const ProductContainer = styled(GridColumn)`
  width: 100%;
  padding: 0;
  margin: 0 0 20px;

  @media ${QUERIES.tabletAndUp} {
    width: 50%;
    padding: 10px;
    margin: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 20px;
  }
`

export const Product = styled.div`
  padding: 25px;
  background: var(--white);
  border: 1px solid var(--gray-300);
  box-shadow: 0px 12px 20px hsla(${COLORS.black} / 0.03);
  border-radius: 5px;

  @media ${QUERIES.laptopAndUp} {
    padding: 40px 45px 35px;
  }
`

export const ProductCategoryContainer = styled.div`
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;

  svg {
    margin-right: 12px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 0 0 20px;
    font-size: ${24 / 16}rem;
    line-height: ${30 / 16}rem;

    svg {
      margin-right: 15px;
      width: 60px;
      height: 60px;
    }
  }
`

export const ProductName = styled.p`
  margin: 0 0 10px;
  font-size: ${28 / 16}rem;
  line-height: ${36 / 16}rem;
  font-weight: 600;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${42 / 16}rem;
    line-height: ${50 / 16}rem;
  }
`

export const ProductFeaturesList = styled.ul`
  margin: 0 0 25px;
  list-style: inside;

  @media ${QUERIES.tabletAndUp} {
    margin: 0 0 35px;
  }
`

export const ProductFeatureItem = styled.li`
  margin: 3px 0;
  font-size: ${16 / 16}rem;
  line-height: ${20 / 16}rem;
  font-weight: normal;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
    line-height: ${22 / 16}rem;
  }
`

export const ProductLearnMoreButton = styled(SecondaryLink)`
  margin: 0;
`

export const ProductsExploreButton = styled(PrimaryLink)`
  width: 160px;
`

export const GetStartedContainer = styled(HomeSectionContainer)`
  background-image: url("/images/home/oo-outline-logo.svg");
  background-color: var(--primary);
`

export const GetStartedContent = styled(HomeSectionContent)`

`

export const GetStartedTitle = styled.h1`
  margin: 0 0 30px;
  color: var(--white);
  font-size: ${24 / 16}rem;
  line-height: ${32 / 16}rem;
  font-weight: 600;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${36 / 16}rem;
    line-height: ${50 / 16}rem;
  }
`

export const GetStartedLink = styled(PrimaryLink)`
  width: 160px;
  background-color: var(--white);
  color: var(--primary);

  &:hover {
    background-color: var(--gray-300);
    color: var(--primary);
  }
`