import React, { useRef } from "react";
import { DefaultLayout } from "../../layouts/Default";
import { PrimaryLink, SecondaryLink } from "../Link";
import SeoHead from "../SeoHead";
import * as UI from "./components";
import { constants } from "../../utils";
import { useHomePage } from "./useHomePage";
import { UmaFeature, UMA_FEATURES } from "./features";
import { Product, PRODUCTS_LIST } from "./products";
import { OOBoxData, OOBoxesData } from "./oo";
import { useReveal } from "../../utils/hooks";

const { LINKS } = constants;

export const HomePage: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <SeoHead />
      <UI.Container>
        <UI.Content>
          <UI.Title>UMA is an <span>optimistic oracle</span> built for Web3</UI.Title>
          <PrimaryLink href={LINKS.oo}>Get started</PrimaryLink>
        </UI.Content>
      </UI.Container>
      <WhatIsOO />
      <Projects />
      <WhyUseUMA />
      <Products />
      <GetStarted />
    </DefaultLayout>
  )
}

const WhatIsOO: React.FunctionComponent = () => {
  return (
    <UI.HomeSectionContainer grayBackground>
      <UI.HomeSectionContent>
        <UI.HomeSectionHeadline>What is an optimistic oracle?</UI.HomeSectionHeadline>
        <UI.OODescription>
          {`An optimistic oracle serves data to smart contracts using a "true unless disputed" escalation game`}
        </UI.OODescription>
        <UI.OOBoxes>
          {OOBoxesData.map((data, idx) => (
            <UI.OOBoxContainer key={idx}>
              <OOBoxComponent data={data} />
            </UI.OOBoxContainer>
          ))}
        </UI.OOBoxes>
        <SecondaryLink href={LINKS.ooDocs}>Learn more</SecondaryLink>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

const OOBoxComponent: React.FC<{ data: OOBoxData }> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { visible } = useReveal(ref, 0.1);

  return (
    <UI.OOBox ref={ref} visible={visible}>
      <UI.BoxImgContainer>
        <UI.BoxImg src={data.icon} alt="Optimisc oracle service" />
      </UI.BoxImgContainer>
      <UI.OOBoxTextContainer>
        <UI.BoxTitle>{data.title}</UI.BoxTitle>
        <UI.BoxDescription>{data.description}</UI.BoxDescription>
      </UI.OOBoxTextContainer>
    </UI.OOBox>
  );
};

const Projects: React.FunctionComponent = () => {
  const { projects } = useHomePage();

  return (
    <UI.HomeSectionContainer>
      <UI.HomeSectionContent>
        <UI.HomeSectionHeadline>Projects using UMA</UI.HomeSectionHeadline>
        <UI.ProjectsList>
          {projects.map((project, idx) => (
            <UI.ProjectContainer key={idx}>
              <UI.ProjectLink href={project.url} target="_blank">
                <UI.ProjectIcon src={project.icon} />
                <UI.ProjectName>
                  {project.name}
                  <UI.ProjectNameIcon />
                </UI.ProjectName>
              </UI.ProjectLink>
            </UI.ProjectContainer>
          ))}
        </UI.ProjectsList>
        <SecondaryLink href={LINKS.projects} target="_blank">Explore all</SecondaryLink>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

const WhyUseUMA: React.FunctionComponent = () => {
  return (
    <UI.HomeSectionContainer grayBackground>
      <UI.HomeSectionContent>
        <UI.HomeSectionHeadline>Why use uma?</UI.HomeSectionHeadline>
        <UI.UmaFeatures>
          {UMA_FEATURES.map((feature, idx) => (
            <UI.UmaFeatureContainer key={idx}>
              <UmaFeatureComponent feature={feature} />
            </UI.UmaFeatureContainer>
          ))}
        </UI.UmaFeatures>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
};

const UmaFeatureComponent: React.FC<{ feature: UmaFeature }> = ({
  feature,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { visible } = useReveal(ref);

  return (
    <UI.UmaFeature ref={ref} visible={visible}>
      <UI.UmaFeatureImgContainer>
        <UI.UmaFeatureImg src={feature.icon}></UI.UmaFeatureImg>
      </UI.UmaFeatureImgContainer>
      <UI.OOBoxTextContainer>
        <UI.BoxTitle>{feature.title}</UI.BoxTitle>
        <UI.BoxDescription>{feature.description}</UI.BoxDescription>
      </UI.OOBoxTextContainer>
    </UI.UmaFeature>
  );
};

const Products: React.FunctionComponent = () => {
  return (
    <UI.HomeSectionContainer>
      <UI.HomeSectionContent>
        <UI.HomeSectionHeadline>{`In-house products secured by UMA's optimistic oracle`}</UI.HomeSectionHeadline>
        <UI.ProductsContainer>
          {PRODUCTS_LIST.map((product, idx) => (
            <UI.ProductContainer key={idx}>
              <ProductComponent product={product} />
            </UI.ProductContainer>
          ))}
        </UI.ProductsContainer>
        <UI.ProductsExploreButton href="/products">Explore all products</UI.ProductsExploreButton>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

export const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { visible } = useReveal(ref);
  
  return (
    <UI.Product ref={ref} visible={visible}>
      <UI.ProductCategoryContainer>
        {product.categoryIcon}
        {product.categoryName}
      </UI.ProductCategoryContainer>
      <UI.ProductName>{product.name}</UI.ProductName>
      <UI.ProductFeaturesList>
        {product.features.map((feature, idx) => (
          <UI.ProductFeatureItem key={idx}>{feature}</UI.ProductFeatureItem>
        ))}
      </UI.ProductFeaturesList>
      <UI.ProductLearnMoreButton href={product.href}>
        Learn more
      </UI.ProductLearnMoreButton>
    </UI.Product>
  );
};

export const GetStarted: React.FunctionComponent = () => {
  return (
    <UI.GetStartedContainer>
      <UI.GetStartedContent>
          <UI.GetStartedTitle>{`Are you ready to integrate Web3's most versatile oracle?`}</UI.GetStartedTitle>
          <UI.GetStartedLink href={LINKS.getStarted}>Get started</UI.GetStartedLink>
      </UI.GetStartedContent>
    </UI.GetStartedContainer>
  );
}
