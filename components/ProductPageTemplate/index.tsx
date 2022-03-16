import React from "react";
import { DefaultLayout } from "../../layouts/Default";
import SeoHead from "../SeoHead";
import * as UI from "./components";

export enum Section {
  Hero = "Hero",
  BasicContent = "BasicContent",
  HeroCarousel = "HeroCarousel",
  KeyFeatures = "KeyFeatures",
  Overview = "Overview",
  Tldr = "Tldr",
  Starting = "Starting",
  Partners = "Partners",
  Testimonials = "Testimonials",
}

// section props
type HeroSectionProps = {
  type: Section.Hero;
  title: string;
  details: string[];
  image: Image;
};
type BasicContentSectionProps = {
  type: Section.BasicContent;
  sections: BasicSection[];
};

type HeroCarouselSectionProps = {
  type: Section.HeroCarousel;
  title: string;
  image: Image;
  carousel: CarouselProps;
};

type KeyFeaturesSectionProps = {
  type: Section.KeyFeatures;
  features: KeyFeatureCardProps[];
};

type OverviewSectionProps = {
  type: Section.Overview;
  title: string;
  sections: (string | JSX.Element)[];
  image: Image;
  link: Link;
};
type TldrSectionProps = {
  type: Section.Tldr;
  image: Image;
  details: string;
};
type GettingStartedSectionProps = {
  type: Section.Starting;
  title: string;
  sections: StartingSection[];
  link: Link;
};
type PartnersSectionProps = {
  type: Section.Partners;
  title: string;
  partners: PartnerCardProps[];
};
type TestimonialsSectionProps = {
  type: Section.Testimonials;
  testimonials: TestimonialCardProps[];
};

type TestimonialCardProps = {
  image: Image;
  details: string;
  client: string;
};

type BasicSection = {
  title: string;
  details?: string[];
  link?: Link;
};

type Image = {
  src: string;
  alt: string;
  label?: string;
};

type CarouselProps = {
  prefix: string;
  variations: string[];
  delay?: number;
};
type KeyFeatureCardProps = {
  title: string;
  details: string;
  image: Image;
};
type Link = {
  text: string;
  href: string;
};
type StartingSection = {
  title: string;
  details: string;
};
type PartnerCardProps = {
  image: Image;
  title: string;
  link: Link;
};
type ProductTemplateProps = {
  sections: (
    | HeroSectionProps
    | BasicContentSectionProps
    | HeroCarouselSectionProps
    | KeyFeaturesSectionProps
    | OverviewSectionProps
    | TldrSectionProps
    | GettingStartedSectionProps
    | PartnersSectionProps
    | TestimonialsSectionProps
  )[];
};

const Page = ({ sections }: ProductTemplateProps) => {
  return (
    <DefaultLayout>
      <SeoHead title="UMA - Products" />
      <ProductTemplate sections={sections} />
    </DefaultLayout>
  );
};
export default Page;

const ProductTemplate = ({ sections }: ProductTemplateProps) => {
  return (
    <UI.Container>
      {sections.map((section, i) => {
        switch (section.type) {
          case Section.Hero: {
            return <HeroSection key={i} {...section} />;
          }
          case Section.BasicContent: {
            return <BasicContentSection key={i} {...section} />;
          }
          case Section.HeroCarousel: {
            return <HeroCarouselSection key={i} {...section} />;
          }
          case Section.KeyFeatures: {
            return <KeyFeaturesSection key={i} {...section} />;
          }
          case Section.Overview: {
            return <OverviewSection key={i} {...section} />;
          }
          case Section.Tldr: {
            return <TldrSection key={i} {...section} />;
          }
          case Section.Starting: {
            return <GettingStartedSection key={i} {...section} />;
          }
          case Section.Partners: {
            return <PartnersSection key={i} {...section} />;
          }
          case Section.Testimonials: {
            return <TestimonialsSection key={i} {...section} />;
          }
        }
      })}
    </UI.Container>
  );
};

const HeroSection = (props: HeroSectionProps) => {
  return (
    <UI.HeroContainer>
      <UI.HeroContent>
        <UI.HeroLogo>
          <UI.HeroImg {...props.image}></UI.HeroImg>
        </UI.HeroLogo>
        <UI.HeroTitle>{props.title}</UI.HeroTitle>
        <UI.HeroDetails>
          {props.details.map((details, i) => {
            return (
              <p key={i}>
                {details}
                <br />
                <br />
              </p>
            );
          })}
        </UI.HeroDetails>
      </UI.HeroContent>
    </UI.HeroContainer>
  );
};
const BasicContentSection = (props: BasicContentSectionProps) => {
  return (
    <UI.SectionContainer>
      {props.sections.map((section, i) => {
        return (
          <div key={i}>
            <UI.SectionTitle> {section.title} </UI.SectionTitle>
            {section.details &&
              section.details.map((details, i) => {
                return <UI.SectionDetail key={i}>{details}</UI.SectionDetail>;
              })}
            {section.link && (
              <UI.SectionLinkContainer>
                <UI.SectionButton target="_blank" {...section.link}>
                  {section.link.text}
                </UI.SectionButton>
              </UI.SectionLinkContainer>
            )}
          </div>
        );
      })}
    </UI.SectionContainer>
  );
};
const HeroCarouselSection = (props: HeroCarouselSectionProps) => {
  return (
    <UI.HeroCarouselContainer>
      <UI.HeroCarouselLogo>
        <UI.HeroCarouselImg {...props.image}></UI.HeroCarouselImg>
      </UI.HeroCarouselLogo>
      <UI.HeroCarouselContent>
        <UI.VerticalSpace height={"40px"} />
        <UI.HeroCarouselTitle>{props.title}</UI.HeroCarouselTitle>
        <UI.VerticalSpace height={"10px"} />
        <Carousel {...props.carousel} />
      </UI.HeroCarouselContent>
    </UI.HeroCarouselContainer>
  );
};

const Carousel = (props: CarouselProps) => {
  return (
    <UI.HeroCarousel>
      <UI.HeroCarouselPrefix> {props.prefix} </UI.HeroCarouselPrefix>{" "}
      <UI.HeroCarouselVariation>
        {" "}
        {props.variations[0]}{" "}
      </UI.HeroCarouselVariation>
    </UI.HeroCarousel>
  );
};

const KeyFeaturesSection = (props: KeyFeaturesSectionProps) => {
  return (
    <UI.KeyFeatureSection>
      <UI.KeyFeatureRow>
        {props.features.map((feature) => (
          <KeyFeatureCard key={feature.title} {...feature} />
        ))}
      </UI.KeyFeatureRow>
    </UI.KeyFeatureSection>
  );
};

const KeyFeatureCard = (props: KeyFeatureCardProps) => {
  return (
    <UI.KeyFeatureCard>
      <UI.KeyFeatureImage {...props.image} />
      <UI.KeyFeatureTitle>{props.title} </UI.KeyFeatureTitle>
      <UI.KeyFeatureDetails>{props.details} </UI.KeyFeatureDetails>
    </UI.KeyFeatureCard>
  );
};

const OverviewSection = (props: OverviewSectionProps) => {
  return (
    <UI.OverviewSection>
      <UI.OverviewSectionContainer>
        <UI.OverviewSectionColumn>
          <UI.OverviewSectionHeader>Product Overview</UI.OverviewSectionHeader>
          <UI.VerticalSpace height="10px" />
          <UI.OverviewTitle>{props.title}</UI.OverviewTitle>
          <UI.VerticalSpace height="40px" />
          {props.sections.map((section, i) => {
            return (
              <UI.OverviewParagraph key={i}>
                {section} <br /> <br />
              </UI.OverviewParagraph>
            );
          })}
          <UI.OverviewButton {...props.link}>
            {props.link.text}
          </UI.OverviewButton>
        </UI.OverviewSectionColumn>
        <UI.OverviewSectionColumn>
          <UI.OverviewImage {...props.image} />
          {props.image.label && (
            <UI.OverviewImageLabel>{props.image.label} </UI.OverviewImageLabel>
          )}
        </UI.OverviewSectionColumn>
      </UI.OverviewSectionContainer>
    </UI.OverviewSection>
  );
};

const TldrSection = (props: TldrSectionProps) => {
  return (
    <UI.TldrSection>
      <UI.TldrRow>
        <UI.TldrImageContainer>
          <UI.TldrImage {...props.image} />
        </UI.TldrImageContainer>
        <UI.TldrDetails>{props.details}</UI.TldrDetails>
      </UI.TldrRow>
    </UI.TldrSection>
  );
};

const GettingStartedSection = (props: GettingStartedSectionProps) => {
  return (
    <UI.GettingStartedSection>
      <UI.GettingStartedSectionHeader>
        Getting Started
      </UI.GettingStartedSectionHeader>
      <UI.VerticalSpace height="20px" />
      <UI.GettingStartedTitle>{props.title}</UI.GettingStartedTitle>
      <UI.GettingStartedRow>
        {props.sections.map((section, i) => (
          <UI.GettingStartedCard key={section.title}>
            <UI.GettingStartedCardBadge>{i + 1}</UI.GettingStartedCardBadge>
            <UI.GettingStartedCardTitle>
              {section.title}
            </UI.GettingStartedCardTitle>
            <UI.GettingStartedCardDetails>
              {section.details}
            </UI.GettingStartedCardDetails>
          </UI.GettingStartedCard>
        ))}
      </UI.GettingStartedRow>
      <UI.VerticalSpace height="40px" />
      <UI.GettingStartedLink target="_blank" {...props.link}>
        {props.link.text}
      </UI.GettingStartedLink>
    </UI.GettingStartedSection>
  );
};

const PartnersSection = (props: PartnersSectionProps) => {
  return (
    <UI.PartnerSection>
      <UI.PartnerTitle>{props.title}</UI.PartnerTitle>
      <UI.PartnerRow>
        {props.partners.map((partner) => (
          <PartnerCard key={partner.title} {...partner} />
        ))}
      </UI.PartnerRow>
    </UI.PartnerSection>
  );
};

const PartnerCard = (props: PartnerCardProps) => {
  return (
    <UI.PartnerCard>
      <UI.PartnerCardImage {...props.image} />
      <UI.PartnerCardTitle>{props.title}</UI.PartnerCardTitle>
      <UI.VerticalSpace height={"10px"} />
      <UI.PartnerCardButton target="_blank" {...props.link}>
        {props.link.text}
      </UI.PartnerCardButton>
    </UI.PartnerCard>
  );
};

const TestimonialsSection = (props: TestimonialsSectionProps) => {
  return (
    <UI.TestimonialSection>
      <UI.TestimonialRow>
        {props.testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </UI.TestimonialRow>
    </UI.TestimonialSection>
  );
};

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <UI.TestimonialCard>
      <UI.TestimonialCardImage {...props.image} />
      <UI.TestimonialCardDetails>{props.details}</UI.TestimonialCardDetails>
      <UI.TestimonialCardSignature>{props.client}</UI.TestimonialCardSignature>
    </UI.TestimonialCard>
  );
};
