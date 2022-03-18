import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.Hero as Section.Hero,
    title: "LSP Contract",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    details: [
      "The UMA Long Short Pair (LSP) contract template allows for the creation of non-liquidatable and capped payout products via tokenized long and short positions.",
      "Developers can choose between a Binary, Linear, Covered Call and Range LSP contract templates.",
    ],
  },
  {
    type: Section.BasicContent as Section.BasicContent,
    sections: [
      {
        title: "Who is it for?",
        details: [
          "Engineers that want to create customized products that have a 0-1 payout, suited for prediction markets or binary options.",
          "Engineers that want to create long and short tokens with a variable payout based on where settlement occurs within a defined range (e.g., KPI Options).",
          "Engineers that want to create Covered Call Options whereby the contract pays out if a settlement price is above or below a defined strike price.",
          "Projects interested in creating structured products enabling them to borrow stablecoins against their project’s native token while offering unique risk profiles to investors.",
        ],
      },
      {
        title: "How is it better?",
        details: [
          "Compared to EMP contracts on UMA, the LSP contracts are non-liquidatable and do not require running bots.",
          "The dual token design means that sponsor positions are transferable.",
          "Accommodates various financial payout types and products with minimal changes.",
          "Ability to use any collateral type without any security considerations, as the payout is denominated in units of collateral and is fully capitalized.",
        ],
      },
      {
        title: "Examples",
        details: [
          "A development team wants to express a crypto dominance pair. They create a LSP that expresses the relative value of an asset compared to the entire crypto market cap.",
          "A booky launches a sports prediction market using the LSP contracts. The long/short tokens each represent the likelihood of the outcome of a particular game.",
          "A stablecoin DAO uses the LSP to create a token that measures the divergence from its dollar peg and caps the payout at +/-20% to make it capital efficient.",
        ],
      },
      {
        title: "How do I get started?",
        link: {
          text: "Read the LSP Contract documentation",
          href: "https://docs.umaproject.org/synthetic-tokens/long-short-pair",
        },
      },
    ],
  },
];

const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
