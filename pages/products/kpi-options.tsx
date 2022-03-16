import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.HeroCarousel as Section.HeroCarousel,
    title: "KPI Options",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    carousel: {
      prefix: "Smart airdrops motivate your community to",
      variations: [
        "migrate liquidity",
        "recruit freinds",
        "establish partnerships",
        "increase adoption",
        "create content",
        "proseltyze relentlessly",
      ],
    },
  },
  {
    type: Section.KeyFeatures as Section.KeyFeatures,
    features: [
      {
        title: "Made-to-order Targets",
        details: "Define the goal that matters most to your DAO",
        image: {
          src: "/images/products/kpi-target.svg",
          alt: "Made-to-order Targets",
        },
      },
      {
        title: "Align Incentives",
        details: "Get your community on the same page",
        image: {
          src: "/images/products/kpi-incentives.svg",
          alt: "Align Incentives",
        },
      },
      {
        title: "Treasury Efficiency",
        details: "Dump-proof airdrop",
        image: {
          src: "/images/products/kpi-parachute.svg",
          alt: "Treasury Efficiency",
        },
      },
      {
        title: "Standard Tokens",
        details: "ERC20 tokens with all the composability that comes with it",
        image: {
          src: "/images/products/kpi-tokens.svg",
          alt: "Standard Tokens",
        },
      },
    ],
  },
  {
    type: Section.Overview as Section.Overview,
    title: "What is it?",
    image: {
      src: "/images/products/kpi-mobile-img2.png",
      alt: "Example KPI UI",
      label:
        "Example UI for claiming and viewing KPI Options tokens for your community",
    },
    sections: [
      "KPI Options are programmable tokens you use to perform smart airdrops.",
      "Your targeted group receives these options tokens today, but they can only redeem them for your project token in the future and only if they hit your target goal. Otherwise, you collect the collateral and return it to your treasury.",
    ],
    link: {
      text: "Learn More",
      href: "https://docs.umaproject.org/kpi-options/summary",
    },
  },
  {
    type: Section.Starting as Section.Starting,
    title: "How does it work?",
    sections: [
      {
        title: "Define Target",
        details: "Define the KPI (Key Perfomance Index) you want to hit.",
      },
      {
        title: "Create the KPI Options",
        details: "Lock your project token and mint the KPI Option tokens.",
      },
      {
        title: "Distribute and Market",
        details:
          "The tokens to your target community and advertise your campaign.",
      },
    ],
    link: {
      text: "Contact Us",
      href: "https://discord.umaproject.org/",
    },
  },
  {
    type: Section.Testimonials as Section.Testimonials,
    testimonials: [
      {
        image: {
          src: "/images/products/badger-icon.png",
          alt: "Badger",
        },
        details:
          "“BadgerDAO uses UMA's KPI Options to help our product DIGG regain its peg, by paying out to DIGG holders but only if it indeed stays above the peg. KPI Options are a clever cryptoeconomic tool and we will be reissuing them for several iterations.”",
        client: "Chris Spadafora of BadgerDAO",
      },
      {
        image: {
          src: "/images/products/aragon-icon.png",
          alt: "Aragon",
        },
        details:
          "“They solve one of the biggest problems in DAOs today, which is the lack of focus towards achieving a common goal. Simple airdrops will become outdated once more people understand the power of KPI options and we can't wait to get the 1,800+ DAOs on Aragon using them.”",
        client: "Joe Charlesworth of Aragon",
      },
    ],
  },
];

const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
