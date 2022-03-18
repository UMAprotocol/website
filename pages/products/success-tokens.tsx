import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.HeroCarousel as Section.HeroCarousel,
    title: "Success Tokens",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    carousel: {
      prefix: "Success tokens empowers your DAO to",
      variations: [
        "raise funds for operations",
        "attract strategic investors",
        "put vesting agreements on chain",
        "align investors with the community",
      ],
    },
  },
  {
    type: Section.KeyFeatures as Section.KeyFeatures,
    features: [
      {
        title: "Strategic partners",
        details: "Leverage the networks and resources of startup veterans.",
        image: {
          src: "/images/products/UMA-strategic-partners-65x65.svg",
          alt: "Strategic partners",
        },
      },
      {
        title: "DeFi Native Raise",
        details: "No lawyers or off-chain brokers required.",
        image: {
          src: "/images/products/UMA-Defi-native-65x65.svg",
          alt: "DeFi Native Raise",
        },
      },
      {
        title: "Community Approved",
        details: "Success tokens are transparent and align interests.",
        image: {
          src: "/images/products/UMA-community-approved-65x65.svg",
          alt: "Community Approved",
        },
      },
    ],
  },
  {
    type: Section.Overview as Section.Overview,
    title: "What is it?",
    image: {
      src: "/images/products/UMA_success_graphx2.png",
      alt: "Success Graph",
    },
    sections: [
      <>
        Success tokens allow DAOs to raise funds without offering token
        discounts upfront. Instead, for each token the investor buys, they
        receive a bonus call option. Both <b>the token and its call option</b>{" "}
        are locked until the vesting date.
      </>,
      <>
        The <b>call option</b> may pay investors an additional amount of your
        DAO token, but only if the price of your token has gone up in the
        meantime. This means these strategic investors are only given any bonus
        if the DAO is doing well.
      </>,
      "It is easy to see why tokenholders like this model: in this event, everyone voting on this proposal today will have also seen the value increase. In either event, the DAO has increased its treasury and gained a strategic partner.",
      "Finally, investors gain the kind of risk profile they are looking for. Namely, exposure to upside. If the token value rallies 2x or 3x over the strike price, they will benefit more than if they had purchased at a discount. It's a win-win-win.",
    ],
    link: {
      text: "Learn More",
      href: "https://docs.umaproject.org/success-tokens/summary",
    },
  },
  {
    type: Section.Tldr as Section.Tldr,
    image: {
      src: "/images/products/UMA-TLDR.svg",
      alt: "TLDR",
    },
    details:
      "Instead of paying the venture capitalist investor upfront via a discount, the Success Token pays the VC a bonus only if the protocol is successful in achieving its goals.",
  },
  {
    type: Section.Starting as Section.Starting,
    title: "How does it work?",
    sections: [
      {
        title: "Sale Design",
        details:
          "Your DAO decides on the parameters. Our team of financial engineers can offer guidance as you choose your strike price, expiration date, and total sale size.",
      },
      {
        title: "Mint Tokens",
        details:
          "Your DAO deposits tokens into the contract and mints the success tokens. UMA's contracts have been audited, held over $200m in collateral, and have been exploit-free since inception over a year ago.",
      },
      {
        title: "Raise funds for Treasury",
        details:
          "Your DAO sells these tokens to strategic investors. Investors are looking for upside in DeFi projects and this sale type has been tested and investor approved.",
      },
    ],
    link: {
      text: "Contact Us",
      href: "https://discord.umaproject.org/",
    },
  },
  {
    type: Section.Partners as Section.Partners,
    title: "Industry Examples",
    partners: [
      {
        image: {
          src: "/images/projects/sushi.svg",
          alt: "SushiSwap",
        },
        title: "SushiSwap Proposal",
        link: {
          text: "Read it here",
          href: "https://forum.sushi.com/t/withdrawn-sushi-phantom-troupe-strategic-raise/4554/256",
        },
      },
      {
        image: {
          src: "/images/projects/shapeshift.svg",
          alt: "Shapeshift",
        },
        title: "Shapeshift Proposal",
        link: {
          text: "Read it here",
          href: "https://forum.shapeshift.com/t/success-token-proposal-discussion/599",
        },
      },
      {
        image: {
          src: "/images/projects/uma.svg",
          alt: "UMA",
        },
        title: "Success Token Article",
        link: {
          text: "Read it here",
          href: "https://medium.com/uma-project/success-tokens-an-incentive-aligned-way-for-vc-funds-to-invest-in-daos-1e8b8244f2f4",
        },
      },
    ],
  },
];

const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
