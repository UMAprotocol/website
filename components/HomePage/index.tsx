import { features } from "process";
import React, { useMemo } from "react";
import { useMediaQuery } from "../../hooks";
import { DefaultLayout } from "../../layouts/Default";
import { LINKS, PROJECTS, QUERIES } from "../../utils";
import { Footer } from "../Footer";
import { Header } from '../Header';
import { KpiOptionIcon, SuccessTokenIcon } from "../Icons";
import { PrimaryLink, SecondaryLink } from "../Link";
import SeoHead from "../SeoHead";
import { Container, Content, Title, HomeSectionContainer, HomeSectionContent, HomeSectionHeadline, OODescription, OOBoxes, OOBox, BoxTitle, BoxDescription, BoxImgContainer, BoxImg, ProjectsList, ProjectIcon, ProjectName, ProjectContainer, ProjectLink, OOBoxTextContainer, ProjectNameIcon, UmaFeatures, UmaFeature, UmaFeatureContainer, UmaFeatureImgContainer, UmaFeatureImg, OOBoxContainer, ProductsContainer, ProductContainer, Product, ProductCategoryContainer, ProductName, ProductFeaturesList, ProductFeatureItem, ProductLearnMoreButton, ProductsExploreButton, GetStartedContainer, GetStartedContent, GetStartedTitle, GetStartedLink } from "./components";

export const HomePage: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <SeoHead />
      <Container>
        <Content>
          <Title>UMA is an <span>Optimistic Oracle</span> built for web3</Title>
          <PrimaryLink href={LINKS.docs}>Get started</PrimaryLink>
        </Content>
      </Container>
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
    <HomeSectionContainer grayBackground>
      <HomeSectionContent>
        <HomeSectionHeadline>What is the optimistic oracle?</HomeSectionHeadline>
        <OODescription>
          An optimistic oracle services data to smart contracts by assuming it is true unless it is disputed.
        </OODescription>
        <OOBoxes>
          {OOBoxesData.map((data, idx) => (
            <OOBoxContainer key={idx}>
              <OOBox>
                <BoxImgContainer>
                  <BoxImg src={data.icon} alt="Optimisc Oracle service" />
                </BoxImgContainer>
                <OOBoxTextContainer>
                  <BoxTitle>{data.title}</BoxTitle>
                  <BoxDescription>{data.description}</BoxDescription>
                </OOBoxTextContainer>
              </OOBox>
            </OOBoxContainer>
          ))}
        </OOBoxes>
        <SecondaryLink href={LINKS.docs}>Learn more</SecondaryLink>
      </HomeSectionContent>
    </HomeSectionContainer>
  );
}

const Projects: React.FunctionComponent = () => {
  const isTablet = useMediaQuery(QUERIES.laptopAndUp);
  const projects = useMemo(() => isTablet ? PROJECTS : PROJECTS.slice(0, 6), [isTablet]);

  return (
    <HomeSectionContainer>
      <HomeSectionContent>
        <HomeSectionHeadline>Projects using UMA</HomeSectionHeadline>
        <ProjectsList>
          {projects.map((project, idx) => (
            <ProjectContainer key={idx}>
              <ProjectLink href={project.url} target="_blank">
                <ProjectIcon src={project.icon} />
                <ProjectName>
                  {project.name}
                  <ProjectNameIcon />
                </ProjectName>
              </ProjectLink>
            </ProjectContainer>
          ))}
        </ProjectsList>
        <SecondaryLink href={LINKS.projects} target="_blank">Explore all</SecondaryLink>
      </HomeSectionContent>
    </HomeSectionContainer>
  );
}

const WhyUseUMA: React.FunctionComponent = () => {
  return (
    <HomeSectionContainer grayBackground>
      <HomeSectionContent>
        <HomeSectionHeadline>Why use uma?</HomeSectionHeadline>
        <UmaFeatures>
          {UMA_FEATURES.map((feature, idx) => (
            <UmaFeatureContainer key={idx}>
              <UmaFeature>
                <UmaFeatureImgContainer>
                  <UmaFeatureImg src={feature.icon}></UmaFeatureImg>
                </UmaFeatureImgContainer>
                <OOBoxTextContainer>
                  <BoxTitle>{feature.title}</BoxTitle>
                  <BoxDescription>{feature.description}</BoxDescription>
                </OOBoxTextContainer>
              </UmaFeature>
            </UmaFeatureContainer>
          ))}
        </UmaFeatures>
      </HomeSectionContent>
    </HomeSectionContainer>
  );
}

const Products: React.FunctionComponent = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContent>
        <HomeSectionHeadline>Products</HomeSectionHeadline>
        <ProductsContainer>
          {PRODUCTS.map((product, idx) => (
            <ProductContainer key={idx}>
              <Product>
                <ProductCategoryContainer>
                  {product.categoryIcon}
                  {product.categoryName}
                </ProductCategoryContainer>
                <ProductName>{product.name}</ProductName>
                <ProductFeaturesList>
                  {product.features.map((feature, idx) => (
                    <ProductFeatureItem key={idx}>{feature}</ProductFeatureItem>
                  ))}
                </ProductFeaturesList>
                <ProductLearnMoreButton href={LINKS.docs}>Learn more</ProductLearnMoreButton>
              </Product>
            </ProductContainer>
          ))}
        </ProductsContainer>
        <ProductsExploreButton href="/products">Explore all products</ProductsExploreButton>
      </HomeSectionContent>
    </HomeSectionContainer>
  );
}

const GetStarted: React.FunctionComponent = () => {
  return (
    <GetStartedContainer>
      <GetStartedContent>
          <GetStartedTitle>Are you ready to integrate Web3's most versatile oracle?</GetStartedTitle>
          <GetStartedLink href={LINKS.docs}>Get started</GetStartedLink>
      </GetStartedContent>
    </GetStartedContainer>
  );
}

const OOBoxesData = [{
  title: "Flexible Identifiers",
  description: "Get any kind of data from any public source. No limit to what you can build.",
  icon: "icons/oo-network.svg",
}, {
  title: "Dispute Resolution",
  description: "Full recourse for inaccurate or manipulated data. Don't get burned by a bad feed.",
  icon: "icons/oo-balance.svg",
}, {
  title: "Economic Guarantees",
  description: "All identifiers, large and small, share the full security of UMA's dispute resolution system.",
  icon: "icons/oo-vote.svg",
}];

const UMA_FEATURES = [{
  title: "Community friendly",
  description: "UMA is a Web3 native protocol with a community-first focus",
  icon: "icons/home/uma-community.svg",
}, {
  title: "No limits on design",
  description: "Request any arbitrary data to power your protocol",
  icon: "icons/home/uma-doc.svg",
}, {
  title: "Provably secure",
  description: "UMA's oracle is the only one that offers economic guarantees",
  icon: "icons/home/uma-lock.svg",
}, {
  title: "Minimize Oracle usage",
  description: "Fewer calls means a smaller attack vector and lower fees",
  icon: "icons/home/uma-oo.svg",
}];

const PRODUCTS = [{
  categoryName: "KPI Options",
  categoryIcon: <KpiOptionIcon />,
  name: "Incentive Tokens",
  features: ["Airdrops that build armies", "Incentive-aligned liquidity mining", "Only pay if you win"],
}, {
  categoryName: "Success Tokens",
  categoryIcon: <SuccessTokenIcon />,
  name: "DAO Fundraising",
  features: ["DeFi native fundraising", "Community approved, no discounted sales", "Aligned strategic partnership"],
}]