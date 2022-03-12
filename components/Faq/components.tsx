import styled from "@emotion/styled";
import { COLORS, QUERIES } from "../../utils/constants";
import { Link } from "../Link";

export const Container = styled.section`

`;

export const Content = styled.div`
  padding: 45px 15px 20px;
  margin: auto;
  max-width: 1200px;

  @media ${QUERIES.tabletAndUp} {
    padding: 60px 40px 30px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 90px 40px 50px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  span {
    margin-right: 15px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: ${20 / 16}rem;
    font-weight: 500;
    border-radius: 50%;
    background-color: var(--primary);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 60px;

    span {
      margin-right: 30px;
      width: 55px;
      height: 55px;
      font-size: ${35 / 16}rem;
    }
  }
`

export const Title = styled.h1`
  font-size: ${44 / 16}rem;
  line-height: ${44 / 16}rem;
  font-weight: 700;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${68 / 16}rem;
    line-height: ${68 / 16}rem;
  }
`

export const NavLinks = styled.div`
  padding: 22px 0;
  margin: 0 0 50px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--gray-500);
  border-bottom: 1px solid var(--gray-500);

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`

export const NavLink = styled(Link)<{ active?: boolean }>`
  margin-right: 50px;
  margin-top: 20px;
  font-size: ${14 / 16}rem;
  line-height: ${20 / 16}rem;
  font-weight: 500;
  transition: color .3s;
  color: ${({ active }) => active ? "var(--gray-700)" : `hsla(${COLORS.gray[700]} / 0.3)`};

  :first-of-type {
    margin-top: 0px;
  }

  :hover {
    color: var(--gray-700);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 0;
  }  
`;

export const Section = styled.div`
  margin-bottom: 45px;
  border-bottom: 1px solid var(--gray-500);

  :last-of-type {
    border-bottom: none;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 55px;
  }
`

export const SectionTitle = styled.h4`
  margin-bottom: 25px;
  font-size: ${32 / 16}rem;
  line-height: ${40 / 16}rem;
  font-weight: 600;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 30px;
  }
`

export const QuestionContainer = styled.div`
  margin-bottom: 45px;
  max-width: 790px;
  font-size: ${16 / 16}rem;
  line-height: 1.5;
  color: hsla(${COLORS.gray[700]} / 0.6);

  h6 {
    margin-bottom: 12px;
    font-size: ${16 / 16}rem;
    font-weight: 400;
    color: var(--gray-700);
  }

  p {
    margin-bottom: 25px;

    :last-of-type {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: outside;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 55px;
    font-size: ${18 / 16}rem;

    h6 {
      font-size: ${18 / 16}rem;
    }
  }
`