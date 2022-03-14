import React from "react";
import { DefaultLayout } from "../../layouts/Default";
import SeoHead from "../SeoHead";
import * as UI from "./components";

type Image = {
  src: string;
  alt: string;
};
type Hero = {
  title: string;
  details: string[];
  logo: Image;
};
type Link = {
  text: string;
  href: string;
};
type Section = {
  title: string;
  details?: string[];
  link?: Link;
};
type Props = {
  hero: Hero;
  sections: Section[];
  children?: React.ReactNode;
};

const Page = (props: Props) => {
  return (
    <DefaultLayout>
      <SeoHead title="UMA - Products" />
      <SimpleProductTemplate {...props} />
    </DefaultLayout>
  );
};
export default Page;

const SimpleProductTemplate = (props: Props) => {
  return (
    <UI.Container>
      <UI.HeroContainer>
        <UI.HeroContent>
          <UI.HeroLogo>
            <UI.HeroImg {...props.hero.logo}></UI.HeroImg>
          </UI.HeroLogo>
          <UI.HeroTitle>{props.hero.title}</UI.HeroTitle>
          <UI.HeroDetails>
            {props.hero.details.map((details) => {
              return (
                <p>
                  {details}
                  <br />
                  <br />
                </p>
              );
            })}
          </UI.HeroDetails>
        </UI.HeroContent>
      </UI.HeroContainer>
      <UI.SectionContainer>
        {props.sections.map((section) => {
          return (
            <>
              <UI.SectionTitle> {section.title} </UI.SectionTitle>
              {section.details &&
                section.details.map((details) => {
                  return <UI.SectionDetail>{details}</UI.SectionDetail>;
                })}
              {section.link && (
                <UI.SectionLinkContainer>
                  <UI.SectionButton {...section.link}>
                    {section.link.text}
                  </UI.SectionButton>
                </UI.SectionLinkContainer>
              )}
            </>
          );
        })}
      </UI.SectionContainer>
    </UI.Container>
  );
};
