import React, { useMemo } from "react";
import { DefaultLayout } from "../../layouts/Default";
import { KpiOptionIcon, SuccessTokenIcon } from "../Icons";
import { PrimaryLink, SecondaryLink } from "../Link";
import SeoHead from "../SeoHead";
import * as UI from "./components";
import { constants } from "../../utils";
import { useHomePage } from "./useHomePage";

const { LINKS, PROJECTS, QUERIES } = constants;

export const HomePage: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <SeoHead />
      <UI.Container>
        <UI.Content>
          <UI.Title>UMA is an <span>Optimistic Oracle</span> built for web3</UI.Title>
          <PrimaryLink href={LINKS.docs}>Get started</PrimaryLink>
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
        <UI.HomeSectionHeadline>What is the optimistic oracle?</UI.HomeSectionHeadline>
        <UI.OODescription>
          An optimistic oracle services data to smart contracts by assuming it is true unless it is disputed.
        </UI.OODescription>
        <UI.OOBoxes>
          {OOBoxesData.map((data, idx) => (
            <UI.OOBoxContainer key={idx}>
              <UI.OOBox>
                <UI.BoxImgContainer>
                  <UI.BoxImg src={data.icon} alt="Optimisc Oracle service" />
                </UI.BoxImgContainer>
                <UI.OOBoxTextContainer>
                  <UI.BoxTitle>{data.title}</UI.BoxTitle>
                  <UI.BoxDescription>{data.description}</UI.BoxDescription>
                </UI.OOBoxTextContainer>
              </UI.OOBox>
            </UI.OOBoxContainer>
          ))}
        </UI.OOBoxes>
        <SecondaryLink href={LINKS.oo}>Learn more</SecondaryLink>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

const Projects: React.FunctionComponent = () => {
  const { isTablet } = useHomePage();
  const projects = useMemo(() => isTablet ? PROJECTS : PROJECTS.slice(0, 6), [isTablet]);

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
              <UI.UmaFeature>
                <UI.UmaFeatureImgContainer>
                  <UI.UmaFeatureImg src={feature.icon}></UI.UmaFeatureImg>
                </UI.UmaFeatureImgContainer>
                <UI.OOBoxTextContainer>
                  <UI.BoxTitle>{feature.title}</UI.BoxTitle>
                  <UI.BoxDescription>{feature.description}</UI.BoxDescription>
                </UI.OOBoxTextContainer>
              </UI.UmaFeature>
            </UI.UmaFeatureContainer>
          ))}
        </UI.UmaFeatures>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

const Products: React.FunctionComponent = () => {
  return (
    <UI.HomeSectionContainer>
      <UI.HomeSectionContent>
        <UI.HomeSectionHeadline>Products</UI.HomeSectionHeadline>
        <UI.ProductsContainer>
          {PRODUCTS.map((product, idx) => (
            <UI.ProductContainer key={idx}>
              <UI.Product>
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
                <UI.ProductLearnMoreButton href={product.href}>Learn more</UI.ProductLearnMoreButton>
              </UI.Product>
            </UI.ProductContainer>
          ))}
        </UI.ProductsContainer>
        <UI.ProductsExploreButton href="/products">Explore all products</UI.ProductsExploreButton>
      </UI.HomeSectionContent>
    </UI.HomeSectionContainer>
  );
}

const GetStarted: React.FunctionComponent = () => {
  return (
    <UI.GetStartedContainer>
      <UI.GetStartedContent>
          <UI.GetStartedTitle>{`Are you ready to integrate Web3's most versatile oracle?`}</UI.GetStartedTitle>
          <UI.GetStartedLink href={LINKS.getStarted}>Get started</UI.GetStartedLink>
      </UI.GetStartedContent>
    </UI.GetStartedContainer>
  );
}

const OOBoxesData = [{
  title: "Flexible Identifiers",
  description: "Get any kind of data from any public source. No limit to what you can build.",
  icon: "images/oo/oo-network.svg",
}, {
  title: "Dispute Resolution",
  description: "Full recourse for inaccurate or manipulated data. Don't get burned by a bad feed.",
  icon: "images/oo/oo-balance.svg",
}, {
  title: "Economic Guarantees",
  description: "All identifiers, large and small, share the full security of UMA's dispute resolution system.",
  icon: "images/oo/oo-vote.svg",
}];

const UMA_FEATURES = [{
  title: "Community friendly",
  description: "UMA is a Web3 native protocol with a community-first focus",
  icon: "images/home/uma-community.svg",
}, {
  title: "No limits on design",
  description: "Request any arbitrary data to power your protocol",
  icon: "images/home/uma-doc.svg",
}, {
  title: "Provably secure",
  description: "UMA's oracle is the only one that offers economic guarantees",
  icon: "images/home/uma-lock.svg",
}, {
  title: "Minimize Oracle usage",
  description: "Fewer calls means a smaller attack vector and lower fees",
  icon: "images/home/uma-oo.svg",
}];

const PRODUCTS = [{
  categoryName: "KPI Options",
  categoryIcon: <KpiOptionIcon />,
  name: "Incentive Tokens",
  features: ["Airdrops that build armies", "Incentive-aligned liquidity mining", "Only pay if you win"],
  href: LINKS.kpiOptions,
}, {
  categoryName: "Success Tokens",
  categoryIcon: <SuccessTokenIcon />,
  name: "DAO Fundraising",
  features: ["DeFi native fundraising", "Community approved, no discounted sales", "Aligned strategic partnership"],
  href: LINKS.successTokens,
}]
