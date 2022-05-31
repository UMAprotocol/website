import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.Hero as Section.Hero,
    title: "Range Tokens",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    details: [
      "Range tokens offer an alternative way for DAOs to diversify their treasury without selling their native tokens.",
      "DAOs can use their native tokens as collateral to borrow stablecoins with zero risk of liquidation.",
    ],
  },
  {
    type: Section.BasicContent as Section.BasicContent,
    sections: [
      {
        title: "Who is it for?",
        details: [
          "Projects who want access to funds without selling their native tokens.",
          "Treasuries who want to borrow stablecoins against a project token without the immediate regulatory implications of conducting a sale.",
          "Investors interested in exposure to customizable and flexible risk profiles.",
        ],
      },
      {
        title: "How is it better?",
        details: [
          "Borrow funds without the risk of liquidation through a project’s native token.",
          "Pay a yield to investors with limited upside and downside exposure to a project’s token.",
          "Enable flexible and customizable risk exposure strategies.",
        ],
      },
      {
        title: "Examples",
        details: [
          "AAVE needs to diversify its treasury because its holdings are denominated in its native token. It creates a range token to raise $10M today without immediate sell pressure of $AAVE.",
          "A DAO offers a loan to development teams building token projects on their protocol by purchasing range tokens from the teams.",
        ],
      },
      {
        title: "How do I get started?",
        link: {
          text: "Read UMA’s documentation",
          href: "https://docs.outcome.finance/resources/other-outcome-products",
        },
      },
    ],
  },
];

const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
