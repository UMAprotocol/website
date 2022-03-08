import React from "react";
import { DefaultLayout } from "../../layouts/Default";
import SeoHead from "../SeoHead";
import { Product, ProductCategoryContainer, ProductContainer, ProductFeatureItem, ProductFeaturesList, ProductLearnMoreButton, ProductName, ProductsContainer } from "../HomePage/components";
import { CallPutOptionsIcon, CheckmarkFilledIcon, KpiOptionIcon, LspIcon, OOLogoIcon, RangeTokenIcon, SuccessTokenIcon } from "../Icons";
import * as UI from "./components";
import { constants } from "../../utils";

const { LINKS } = constants;
const OO_FEATURES = ["Fully decentralized", "Dispute resolution", "Battle tested", "Incredibly flexible"];

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
}, {
  categoryName: "Range Tokens",
  categoryIcon: <RangeTokenIcon />,
  name: "Treasury Diversification",
  features: ["Access funds without sale pressure", "Pay a yield to investors with limited upside and downside", "Function like corporate bonds for DAOs"],
}, {
  categoryName: "Call/Put Options",
  categoryIcon: <CallPutOptionsIcon />,
  name: "Traditional Options",
  features: ["DAOs can provide liquidity with idle assets", "Offer aligned incentives to community members", "Offer yield opportunities to tokenholders"],
}, {
  categoryName: "Long Short Pair (LSP)",
  categoryIcon: <LspIcon />,
  name: "Flexible Pair Contract",
  features: ["Build customized finance products", "Fully collateralized / unliquidatable", "Long/Short token pair have inverse values"],
}]

export const ProductsPage: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <SeoHead title="UMA - Products" />
      <CoverSection />
      <ProductsSection />
    </DefaultLayout>
  );
}

const CoverSection: React.FC = () => {
  return (
    <UI.CoverContainer>
      <UI.CoverContent>
        <UI.OOContent>
          <UI.CoverText>
            <UI.LogoHeadline>
              <OOLogoIcon />
              <span>Optimistic Oracle</span>
            </UI.LogoHeadline>
            <UI.CoverTitle>The Web3 Oracle</UI.CoverTitle>
            <UI.MobileLogoContainer>
              <PulseLogo />
            </UI.MobileLogoContainer>
            <UI.CoverParagraph>
              {`UMA's optimistic oracle allows contracts to quickly request and receive any kind of data.`}
              <br /><br />
              {`The optimistic oracle can provide arbitrary, "long tail" data to Web3 protocols.`}
            </UI.CoverParagraph>
            <UI.CoverLink href={LINKS.docs}>Learn more</UI.CoverLink>
          </UI.CoverText>
          <UI.DesktopLogoContainer>
            <PulseLogo />
          </UI.DesktopLogoContainer>
        </UI.OOContent>
        <UI.OOFeatures>
          {OO_FEATURES.map((feature, idx) => (
            <UI.OOFeature key={idx}>
              <CheckmarkFilledIcon />
              <span>{feature}</span>
            </UI.OOFeature>
          ))}
        </UI.OOFeatures>
      </UI.CoverContent>
    </UI.CoverContainer>
  );
}

const ProductsSection: React.FC = () => {
  return (
    <UI.Container>
      <UI.ProductsContent>
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
      </UI.ProductsContent>
    </UI.Container>
  );
}

const PulseLogo: React.FC = () => {
  return (
    <UI.AspectRatioContainer>
      <UI.PulseLogoContainer>
        <UI.PulseLogoIcon />
        <UI.PulseRing />
        <UI.PulseRing />
        <UI.PulseRing />
      </UI.PulseLogoContainer>
    </UI.AspectRatioContainer>
  );
}
