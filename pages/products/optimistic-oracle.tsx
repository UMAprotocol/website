import React from "react";
import type { NextPage } from "next";
import ProductTemplate, { Section } from "../../components/ProductPageTemplate";

const sections = [
  {
    type: Section.HeroCarousel as Section.HeroCarousel,
    title: "Optimistic Oracle",
    image: {
      src: "/images/products/powered_by_uma.png",
      alt: "UMA_logo",
    },
    carousel: {
      prefix: "The Optimistic Oracle lets you securely",
      variations: [
        "send cross-chain messages",
        "do off-chain calculations",
        "bring real world data on-chain",
      ],
    },
  },
  {
    type: Section.KeyFeatures as Section.KeyFeatures,
    features: [
      {
        title: "Flexible Identifiers",
        details:
          "Get any kind of data from any public source. No limit to what you can build.",
        image: {
          src: "/images/products/UMA-Flex-Id-65x65.svg",
          alt: "Flexible Identifiers",
        },
      },
      {
        title: "Dispute Resolution",
        details:
          "Full recourse for inaccurate or manipulated data. Don't get burned by a bad feed.",
        image: {
          src: "/images/products/UMA-Dispute-Resolution-65x65.svg",
          alt: "Dispute Resolution",
        },
      },
      {
        title: "Economic Guarantees",
        details:
          "All identifiers, large and small, share the full security of UMA's dispute resolution system.",
        image: {
          src: "/images/products/UMA-Economic-Guarantees-65x65.svg",
          alt: "Economic Guarantees",
        },
      },
    ],
  },
  {
    type: Section.Overview as Section.Overview,
    title: "What is it?",
    image: {
      src: "/images/products/UMA-Optimistic-Oraclex2.png",
      alt: "KPI Example",
    },
    sections: [
      "UMA’s Optimistic Oracle allows contracts to quickly request and receive any kind of data. The Optimistic Oracle acts as a generalized escalation game between contracts that initiate a request and UMA’s dispute resolution system known as the Data Verification Mechanism (DVM).",
      "Anyone can earn a reward by proposing answers to a request. Proposed data will not be sent to the DVM unless it is disputed. Disputes are rare in practice.",
      "This is consistent with game theoretical principals, since users would lose money for making incorrect proposals that are disputed. The only winning move is to propose data that is correct.",
      "The Optimistic Oracle also protects your smart contract and users against manipulation of the external data feed, since incorrect data can be disputed. This is a unique feature for an oracle, as other oracle solutions are only as secure as their data feed.",
      "Because of the Optimistic Oracle's flexibility and security, it has been used to build everything from KPI options for DAOs, SpaceX launch insurance, and cross-chain messaging systems.",
      <strong>
        If you can specify it, the Optimistic Oracle can report it.
      </strong>,
    ],
    link: {
      text: "Learn More",
      href: "https://docs.umaproject.org/getting-started/oracle",
    },
  },
  {
    type: Section.Starting as Section.Starting,
    title: "How does it work?",
    sections: [
      {
        title: "Approve Identifier",
        details:
          "Figure out what kind of data your smart contract needs. The data needs to be publicly accessible so the network participants are able to validate it in the event of a dispute. Simply share your intentions with the UMA team via hello@umaproject.org or in Discord.",
      },
      {
        title: "Integrate With Your Contract",
        details:
          "Design your smart contracts to request and accept data from UMA's optimistic oracle. Consider offloading storage and complicated calculations to the oracle to save money on gas, and whether data will be proposed and disputed by bots or by humans.",
      },
      {
        title: "Propose and Dispute",
        details:
          "When you need to deliver data to your smart contract, ask the oracle for the data. Anyone can propose a response, or dispute an incorrect response. After the dispute window passes, or after a vote of UMA tokenholders if there is a dispute, the data is returned to your contract.",
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
          src: "/images/projects/across.png",
          alt: "Across Protocol",
        },
        title: "Across Protocol",
        link: {
          text: "Read it here",
          href: "https://docs.across.to/bridge/",
        },
      },
      {
        image: {
          src: "/images/projects/sherlock.png",
          alt: "Sherlock",
        },
        title: "Sherlock",
        link: {
          text: "Read it here",
          href: "https://sherlock-protocol.medium.com/sherlock-x-uma-is-live-a-fairer-claims-process-72ef129c0de0",
        },
      },
      {
        image: {
          src: "/images/projects/opium.png",
          alt: "SpaceX Insurance",
        },
        title: "SpaceX Insurance",
        link: {
          text: "Read it here",
          href: "https://opium.finance/blog/uma-opium/UMAarticle/",
        },
      },
    ],
  },
];
const ProductsRoute: NextPage = () => {
  return <ProductTemplate sections={sections} />;
};

export default ProductsRoute;
