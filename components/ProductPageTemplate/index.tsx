import React, { useEffect, useState } from "react";
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
    <UI.HeroSection>
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
    </UI.HeroSection>
  );
};
const BasicContentSection = (props: BasicContentSectionProps) => {
  return (
    <UI.BasicContentContainer>
      {props.sections.map((section, i) => {
        return (
          <div key={i}>
            <UI.BasicContentTitle> {section.title} </UI.BasicContentTitle>
            {section.details &&
              section.details.map((details, i) => {
                return (
                  <UI.BasicContentDetail key={i}>
                    {details}
                  </UI.BasicContentDetail>
                );
              })}
            {section.link && (
              <UI.BasicContentLinkContainer>
                <UI.BasicContentLink target="_blank" {...section.link}>
                  {section.link.text}
                </UI.BasicContentLink>
              </UI.BasicContentLinkContainer>
            )}
          </div>
        );
      })}
    </UI.BasicContentContainer>
  );
};
const HeroCarouselSection = (props: HeroCarouselSectionProps) => {
  return (
    <UI.HeroCarouselSection>
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
    </UI.HeroCarouselSection>
  );
};

const Carousel = (props: CarouselProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index + 1) % props.variations.length);
    }, props.delay || 2000);
    return () => clearTimeout(timeout);
  }, [index, setIndex]);

  return (
    <UI.HeroCarousel>
      <UI.HeroCarouselPrefix> {props.prefix} </UI.HeroCarouselPrefix>
      <UI.HeroCarouselVariation>
        {" "}
        {props.variations[index]}{" "}
      </UI.HeroCarouselVariation>
    </UI.HeroCarousel>
  );
};

const KeyFeaturesSection = (props: KeyFeaturesSectionProps) => {
  return (
    <UI.KeyFeatureSection>
      <UI.KeyFeatureContainer>
        <UI.KeyFeatureRow>
          {props.features.map((feature) => (
            <>
              <KeyFeatureCard key={feature.title} {...feature} />
            </>
          ))}
        </UI.KeyFeatureRow>
      </UI.KeyFeatureContainer>
    </UI.KeyFeatureSection>
  );
};

const KeyFeatureCard = (props: KeyFeatureCardProps) => {
  return (
    <UI.KeyFeatureCard>
      <UI.KeyFeatureImage {...props.image} />
      <div>
        <UI.KeyFeatureTitle>{props.title} </UI.KeyFeatureTitle>
        <UI.KeyFeatureDetails>{props.details} </UI.KeyFeatureDetails>
      </div>
    </UI.KeyFeatureCard>
  );
};

const OverviewSection = (props: OverviewSectionProps) => {
  return (
    <UI.OverviewSection>
      <UI.OverviewSectionContainer>
        <UI.OverviewSectionHeader>Product Overview</UI.OverviewSectionHeader>
        <UI.OverviewTitle>{props.title}</UI.OverviewTitle>
        <UI.OverviewSectionBody>
          <UI.OverviewSectionColumn>
            {props.sections.map((section, i) => {
              return (
                <UI.OverviewParagraph key={i}>
                  {section} <br /> <br />
                </UI.OverviewParagraph>
              );
            })}
            <UI.OverviewLink {...props.link}>{props.link.text}</UI.OverviewLink>
          </UI.OverviewSectionColumn>
          <UI.OverviewSectionColumn>
            <UI.OverviewImageContainer>
              <UI.OverviewImage {...props.image} />
            </UI.OverviewImageContainer>
            {props.image.label && (
              <UI.OverviewImageLabel>
                {props.image.label}{" "}
              </UI.OverviewImageLabel>
            )}
          </UI.OverviewSectionColumn>
        </UI.OverviewSectionBody>
      </UI.OverviewSectionContainer>
    </UI.OverviewSection>
  );
};

const TldrSection = (props: TldrSectionProps) => {
  return (
    <UI.TldrSection>
      <UI.TldrContainer>
        <UI.TldrRow>
          <UI.TldrImageContainer>
            <UI.TldrImage {...props.image} />
          </UI.TldrImageContainer>
          <UI.TldrDetails>{props.details}</UI.TldrDetails>
        </UI.TldrRow>
      </UI.TldrContainer>
    </UI.TldrSection>
  );
};

const GettingStartedSection = (props: GettingStartedSectionProps) => {
  return (
    <UI.GettingStartedSection>
      <UI.GettingStartedContainer>
        <UI.GettingStartedSectionHeader>
          Getting Started
        </UI.GettingStartedSectionHeader>
        <UI.GettingStartedTitle>{props.title}</UI.GettingStartedTitle>
        <UI.GettingStartedRow>
          {props.sections.map((section, i) => (
            <UI.GettingStartedCard key={section.title}>
              <UI.GettingStartedCardBadge>{i + 1}</UI.GettingStartedCardBadge>
              <div>
                <UI.GettingStartedCardTitle>
                  {section.title}
                </UI.GettingStartedCardTitle>
                <UI.GettingStartedCardDetails>
                  {section.details}
                </UI.GettingStartedCardDetails>
              </div>
            </UI.GettingStartedCard>
          ))}
        </UI.GettingStartedRow>
        <UI.VerticalSpace height="40px" />
        <UI.GettingStartedLink target="_blank" {...props.link}>
          {props.link.text}
        </UI.GettingStartedLink>
      </UI.GettingStartedContainer>
    </UI.GettingStartedSection>
  );
};

const PartnersSection = (props: PartnersSectionProps) => {
  return (
    <UI.PartnerSection>
      <UI.PartnerContainer>
        <UI.PartnerTitle>{props.title}</UI.PartnerTitle>
        <UI.PartnerRow>
          {props.partners.map((partner) => (
            <PartnerCard key={partner.title} {...partner} />
          ))}
        </UI.PartnerRow>
      </UI.PartnerContainer>
    </UI.PartnerSection>
  );
};

const PartnerCard = (props: PartnerCardProps) => {
  return (
    <UI.PartnerCard>
      <UI.PartnerCardImage {...props.image} />
      <UI.PartnerCardTitle>{props.title}</UI.PartnerCardTitle>
      <UI.VerticalSpace height={"10px"} />
      <UI.PartnerCardLink target="_blank" {...props.link}>
        {props.link.text}
      </UI.PartnerCardLink>
    </UI.PartnerCard>
  );
};

const TestimonialsSection = (props: TestimonialsSectionProps) => {
  return (
    <UI.TestimonialSection>
      <UI.TestimonialContainer>
        <UI.TestimonialRow>
          {props.testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </UI.TestimonialRow>
      </UI.TestimonialContainer>
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
