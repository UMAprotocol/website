import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { constants } from "../../utils";
import { OOLogoIcon } from "../Icons";
import { PrimaryLink, SecondaryLink } from "../Link";

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
  box-sizing: border-box;
  color: #000;
  position: absolute;
  right: 0;
  transform: translateY(-40px);
  margin-right: 2rem;
  font-size: 1.25rem;
`;

export const HeroImg = styled.img`
  height: 25px;
  display: inline-block;
  vertical-align: middle;
`;

export const HeroCarouselContainer = styled.section`
  padding: 40px 0 140px;
  background: linear-gradient(to left, #ff4a4a 66%, #272528);
  padding-bottom: 1.75rem;
  width: 100%;
`;

export const HeroCarouselContent = styled.div`
  width: 1200px;
  margin: auto;
  padding-left: 25px;
`;

export const HeroCarouselLogo = styled.span`
  margin-right: 20px;
  float: right;
  text-align: right;
`;

export const HeroCarouselImg = styled.img`
  height: 20px;
  display: inline-block;
  vertical-align: middle;
`;

export const HeroCarouselTitle = styled.h1`
  margin-left: 0;
  margin-right: 0;
  font-size: 4.5rem;
  line-height: 1.08;
  font-weight: 600;
  color: #fff;
`;

export const HeroCarousel = styled.div`
  display: flex;
  flex-direction: row;
`;
export const HeroCarouselPrefix = styled.span`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 600;
  display: flex;
`;

export const HeroCarouselVariation = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 8px;
  position: relative;
  display: inline-block;
  padding-right: 0.05em;
  color: #272528;
`;

export const HeroCarouselDetails = styled.h4`
  margin: 1rem auto 0;
  max-width: 850px;
  padding-left: 27px;
  color: #fff;
  font-family: "Halyard Display";
  font-size: 1.6rem;
  font-weight: 300;
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

export const KeyFeatureSection = styled.section`
  background-color: #f4f4f5;
  width: 100%;
  padding: 3rem 1.5rem;
`;

export const KeyFeatureRow = styled.div`
  margin: 0 auto;
  max-width: 1235px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const KeyFeatureCard = styled.div`
  margin: 1rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  flex-basis: 21.5%;
`;
export const KeyFeatureImage = styled.img`
  height: 105px;
  width: 105px;
  margin-left: 0;
  display: inline-block;
  vertical-align: middle;
`;
export const KeyFeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #272528;
  margin-bottom: 0;
`;
export const KeyFeatureDetails = styled.h5`
  color: #272528;
  font-size: 1rem;
  font-weight: 400;
`;
export const OverviewSection = styled.section`
  background-color: #fff;
  padding: 3rem 2rem 5rem;
`;

export const OverviewSectionContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const OverviewSectionColumn = styled.div`
  margin-right: 5px;
`;

export const OverviewSectionHeader = styled.h6`
  color: #a8a8a8;
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
`;
export const OverviewTitle = styled.h3`
  color: #272528;
  font-size: 2.25rem;
  font-weight: 600;
  margin-top: -1rem;
`;
export const OverviewParagraph = styled.h4`
  margin-left: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #272528;
`;

export const OverviewImage = styled.img`
  height: 360px;
  width: auto;
`;

export const OverviewImageLabel = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: #8a8a8a;
  font-weight: 400;
`;

export const OverviewButton = styled(PrimaryLink)`
  width: auto;
  margin: 0;
  @media ${QUERIES.tabletAndUp} {
    width: 200px;
  }
`;

export const TldrSection = styled.section`
  background-color: #fff;
  padding: 0rem 2rem 5rem;
`;

export const TldrImageContainer = styled.div`
  flex-basis: 15%;
  margin-left: 3rem;
  margin-top: -1rem;
  height: auto;
  display: inline-block;
  vertical-align: middle;
`;
export const TldrImage = styled.img``;

export const TldrRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1112px;
  background-color: #f5f5f5;
`;

export const TldrDetails = styled.p`
  font-family: inherit;
  font-weight: 400;
  margin: 1rem 0;
  font-size: 18px;
  line-height: 1.67;
  color: #000;
`;

export const GettingStartedSection = styled.section`
  background-color: #ff4a4a;
  padding: 1.5rem 3rem 4rem;
`;
export const GettingStartedSectionHeader = styled.h6`
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  color: #fff;
`;
export const GettingStartedTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: 600;
  margin-top: -1rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  color: #fff;
`;
export const GettingStartedSectionContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;
export const GettingStartedRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const GettingStartedCard = styled.div`
  display: block;
  padding: 1.5rem 1.25rem 2.5rem;
  text-align: center;
  background-color: #fff;
  -ms-flex-preferred-size: 27%;
  flex-basis: 27%;
  border-radius: 5px;
`;
export const GettingStartedCardBadge = styled.div`
  background-color: #ff4a4a;
  border-radius: 16px;
  width: 32px;
  margin: 0 auto;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const GettingStartedCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;
export const GettingStartedCardDetails = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0rem;
  line-height: 1.1rem;
`;

export const GettingStartedLink = styled(SecondaryLink)``;

export const PartnerSection = styled.section`
  background-color: #fff;
  padding: 3rem 2rem 5rem;
`;

export const PartnerTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: 600;
  margin-top: -1rem;
  margin-bottom: 2rem;
  max-width: 1075px;
  margin-left: auto;
  margin-right: auto;
`;

export const PartnerRow = styled.div`
  display: flex;
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const PartnerCard = styled.div`
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 2rem 2rem 3rem;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  flex-basis: 25%;
`;
export const PartnerCardImage = styled.img`
  height: 55px;
  max-width: 80px;
`;
export const PartnerCardTitle = styled.h5`
  font-weight: 600;
  font-size: 1rem;
`;
export const PartnerCardButton = styled(PrimaryLink)`
  @media ${QUERIES.tabletAndUp} {
    width: 120px;
    font-size: 1rem;
    height: 40px;
    margin: auto;
    padding: 5px;
  }
`;

export const TestimonialSection = styled.section`
  background-color: #fff;
  padding: 3rem 2rem 5rem;
`;
export const TestimonialRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: row;
`;
export const TestimonialCard = styled.div`
  flex-basis: 40%;
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 2rem 2rem 3rem;
  border-radius: 5px;
  border: 1px solid whitesmoke;
`;
export const TestimonialCardImage = styled.img`
  height: auto;
  display: inline-block;
  vertical-align: middle;
`;
export const TestimonialCardDetails = styled.h3`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.75rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
`;

export const TestimonialCardSignature = styled.h2`
  fontweight: 600;
  fontsize: 1rem;
`;

export const VerticalSpace = styled.div<{ height: string }>`
  padding-top: ${({ height }) => height};
`;

export const Container = styled.section``;
