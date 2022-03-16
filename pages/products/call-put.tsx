import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.Hero as Section.Hero,
    title: "Call/Put Options",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    details: [
      "Call and Put options allow DAO treasuries to offer yield opportunities to tokenholders, as well as leverage opportunities to speculators.",
      "The options are traded against the project token, so DAOs can create liquidity without any opportunity cost.",
    ],
  },
  {
    type: Section.BasicContent as Section.BasicContent,
    sections: [
      {
        title: "Who is it for?",
        details: [
          "DAOs create these products and offer liquidity with no opportunity cost, so tokenholders benefit from their features.",
          "Community managers use them to offer incentive aligned bounties to builders.",
          "Treasury managers sell them as a way to raise money with the treasury without selling at a bad price.",
        ],
      },
      {
        title: "How is it better?",
        details: [
          "DAOs can use their treasury to mint and provide liquidity for these products, with no need for another capital type.",
          "The process to create these is permissionless and within the DAO’s control, as compared to a centralized trading platform.",
          "Call options can be offered as incentives. They can be offered more liberally than unrestricted tokens, since they will only cost the treasury anything if the token trading is high.",
        ],
      },
      {
        title: "Examples",
        details: [
          "Uniswap creates a put option on UNI with a $25 strike. A trader buys it for .05 UNI. At expiry, the price is $15 and the option is worth $10.",
          "Take the above example, except the token fails to rally. The call options expire valueless, and have no cost to the UMA treasury.",
          "For a put option, consider UNI creates a put option with a $25 strike. A trader buys it for .05 UNI. At expiry, the price is $15, and so the option is settled worth $10.",
        ],
      },
      {
        title: "How do I get started?",
        link: {
          text: "Read the Call Options documentation",
          href: "https://docs.umaproject.org/products/calloption",
        },
      },
    ],
  },
];

const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
