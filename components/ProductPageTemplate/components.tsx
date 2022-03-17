import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { constants } from "../../utils";
import { OOLogoIcon } from "../Icons";
import { PrimaryLink, SecondaryLink } from "../Link";

const { QUERIES, COLORS } = constants;

/* The typing effect */
export const Typing = keyframes`
  from { width: 0% }
  to { width: 100% }
`;

export const BlinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;
export const Typewriter = styled.span`
  display: block;
  overflow: hidden;
  border-right: .1em solid white; 
  white-space: nowrap;
  animation: 
    ${Typing} 1s steps(40, end) infinite,
    ${BlinkCaret} 1s step-end infinite;
}
`;
export const HeroContainer = styled.section`
  padding: 32px 0 16px;
  background: linear-gradient(to left, #ff4a4a 66%, #272528);
  width: 100%;
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const HeroTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  color: var(--white);
  font-size: 3rem;
  margin: 1rem 0rem;
  @media ${QUERIES.tabletAndUp} {
    margin: auto;
    text-align: left;
    line-height: 1.08;
    font-size: 6rem;
    max-width: 800px;
  }
`;

export const HeroDetails = styled.h4`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 300;
  @media ${QUERIES.tabletAndUp} {
    margin: auto;
    max-width: 800px;
  }
`;

export const HeroLogo = styled.div`
  width: 100%;
  text-align: center;
  @media ${QUERIES.tabletAndUp} {
    text-align: right;
  }
`;

export const HeroImg = styled.img`
  height: 25px;
`;

export const HeroCarouselContainer = styled.section`
  width: 100%;
  padding: 30px 30px;
  background: linear-gradient(to left, #ff4a4a 66%, #272528);
`;

export const HeroCarouselContent = styled.div``;

export const HeroCarouselLogo = styled.span`
  float: right;
`;

export const HeroCarouselImg = styled.img`
  height: 16px;
  @media ${QUERIES.tabletAndUp} {
    height: 20px;
  }
`;

export const HeroCarouselTitle = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 2.25rem;
  @media ${QUERIES.tabletAndUp} {
    font-size: 4.5rem;
  }
`;

export const HeroCarousel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    font-size: 1.8rem;
  }
`;
export const HeroCarouselPrefix = styled.span`
  color: var(--white);
`;

export const HeroCarouselVariation = styled.span``;

export const BasicContentContainer = styled.section`
  padding: 32px 8px;
  width: 100%;
`;
export const BasicContentTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    max-width: 800px;
    margin: auto;
  }
`;
export const BasicContentDetail = styled.p`
  padding: 0 32px;
  font-size: 1.2rem;
  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    max-width: 800px;
    margin: auto;
    padding: 0 16px;
    ::before {
      content: "";
      position: absolute;
      border-color: var(--primary);
      border-style: solid;
      border-width: 0.125rem;
      height: 24px;
      margin: 4px 0;
      transform: translateX(-16px);
    }
  }
`;

export const BasicContentLinkContainer = styled.div`
  padding: 0 32px;
  @media ${QUERIES.tabletAndUp} {
    margin: 16px auto;
    padding: 0;
    max-width: 800px;
  }
`;
export const BasicContentLink = styled(PrimaryLink)`
  width: auto;
  font-size: 1.1rem;
  padding 16px 0;
  @media ${QUERIES.tabletAndUp} {
    width: 400px;
    margin: 0;
  }
`;

export const KeyFeatureSection = styled.section`
  background-color: var(--gray-300);
  width: 100%;
  padding: 0px 16px;
  @media ${QUERIES.tabletAndUp} {
    padding: 16px;
  }
`;

export const KeyFeatureRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const KeyFeatureCard = styled.div`
  background-color: var(--white);
  display: flex;
  padding: 16px 16px;
  margin: 16px 0px 0px 0px;
  :last-child {
    margin: 16px 0 16px 0;
  }
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: center;
    margin: 16px;
    :last-child {
      margin: 16px;
    }
  }
`;
export const KeyFeatureImage = styled.img`
  margin: 0px 16px 0px 0px;
  height: 42px;
  @media ${QUERIES.tabletAndUp} {
    height: 105px;
    width: 105px;
  }
`;
export const KeyFeatureTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    text-align: center;
    font-size: 1.25rem;
  }
`;
export const KeyFeatureDetails = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  @media ${QUERIES.tabletAndUp} {
    text-align: center;
    font-size: 1rem;
  }
`;

export const OverviewSection = styled.section`
  padding: 24px;
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;

export const OverviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

export const OverviewSectionColumn = styled.div``;

export const OverviewSectionHeader = styled.h6`
  color: #a8a8a8;
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
`;
export const OverviewTitle = styled.h3`
  color: var(--gray-700);
  font-size: 2.25rem;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    line-height: 4rem;
  }
`;

export const OverviewParagraph = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: var(--gray-700);
`;

export const OverviewImage = styled.img`
  width: 100%;
  padding: 24px 0px 0px 0px;
  @media ${QUERIES.tabletAndUp} {
    padding: 0px;
  }
`;

export const OverviewImageLabel = styled.div`
  font-size: 0.66rem;
  color: var(--gray-700);
  font-weight: 400;
  text-align: center;
`;

export const OverviewLink = styled(PrimaryLink)`
  @media ${QUERIES.tabletAndUp} {
    margin-left: 0px;
  }
`;

export const TldrSection = styled.section`
  background-color: #fff;
  padding: 24px;
`;

export const TldrImageContainer = styled.div`
  margin-left: 16px;
  margin-top: -16px;
`;

export const TldrImage = styled.img`
  width: 64px;
  @media ${QUERIES.tabletAndUp} {
    width: 96px;
  }
`;

export const TldrRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;

export const TldrDetails = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.67;
  color: #000;
  margin: 16px;
`;

export const GettingStartedSection = styled.section`
  background-color: #ff4a4a;
  padding: 24px;
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;
export const GettingStartedSectionHeader = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--white);
`;
export const GettingStartedTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);
`;

export const GettingStartedRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

export const GettingStartedCard = styled.div`
  text-align: center;
  background-color: var(--white);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  margin: 8px 0;
  @media ${QUERIES.tabletAndUp} {
    margin: 32px;
    flex-direction: column;
    align-items: center;
  }
`;
export const GettingStartedCardBadge = styled.div`
  background-color: var(--primary);
  border-radius: 16px;
  min-width: 32px;
  height: 32px;
  color: var(--white);
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 16px 0 0;
  @media ${QUERIES.tabletAndUp} {
    max-width: 32px;
  }
`;

export const GettingStartedCardTitle = styled.h4`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    font-size: 1.25rem;
    text-align: center;
    padding: 16px;
  }
`;
export const GettingStartedCardDetails = styled.h5`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
    text-align: center;
  }
`;

export const GettingStartedLink = styled(SecondaryLink)`
  font-size: 1.3rem;
  width: 215px;
`;

export const PartnerSection = styled.section`
  background-color: var(--white);
  padding: 24px;
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;

export const PartnerTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    font-size: 2.25rem;
  }
`;

export const PartnerRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const PartnerCard = styled.div`
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 16px;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  margin: 16px 0px;
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;

export const PartnerCardImage = styled.img`
  height: 55px;
  max-width: 80px;
  @media ${QUERIES.tabletAndUp} {
    height: 96px;
    max-width: 256px;
  }
`;
export const PartnerCardTitle = styled.h5`
  font-weight: 600;
  font-size: 1rem;
`;
export const PartnerCardLink = styled(PrimaryLink)`
  @media ${QUERIES.tabletAndUp} {
    width: 120px;
    font-size: 1rem;
    height: 40px;
    margin: auto;
    padding: 5px;
  }
`;

export const TestimonialSection = styled.section`
  width: 100%;
  background-color: var(--white);
  padding: 24px;
`;
export const TestimonialRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;
export const TestimonialCard = styled.div`
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 16px;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  text-align: center;
  margin: 8px 0px;
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
    margin: 32px;
  }
`;

export const TestimonialCardImage = styled.img``;

export const TestimonialCardDetails = styled.h3`
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.75rem;
  @media ${QUERIES.tabletAndUp} {
    padding: 16px;
    font-size: 1.25rem;
  }
`;

export const TestimonialCardSignature = styled.h2`
  fontweight: 600;
  fontsize: 1rem;
  margin: 16px;
`;

export const VerticalSpace = styled.div<{ height: string }>`
  padding-top: ${({ height }) => height};
`;

export const Container = styled.section``;
