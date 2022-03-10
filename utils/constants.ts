export const COLORS = {
  gray: {
    100: "0deg 0% 99%",
    200: "hsl(120, 100%, 100%)",
    300: "0deg 0% 96%",
    500: "0deg 0% 90%",
    600: "0deg 0% 35%",
    700: "280deg 4% 15%",
  },
  primary: { 500: "0deg 100% 65%", 700: "0deg 100% 45%" },
  green: "133deg 68% 39%",
  white: "0deg 100% 100%",
  black: "0deg 0% 0%",
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 800,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletAndDown: `(max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const LINKS = {
  docs: "https://docs.umaproject.org/",
  projects: "https://projects.umaproject.org/",
  oo: "https://docs.umaproject.org/getting-started/oracle",
  kpiOptions: "https://docs.umaproject.org/kpi-options/summary",
  successTokens: "https://docs.umaproject.org/success-tokens/summary",
  rangeTokens: "https://docs.umaproject.org/range-tokens/summary",
  callPutOption: "https://docs.umaproject.org/products/calloption",
  lsp: "https://docs.umaproject.org/synthetic-tokens/long-short-pair",
  getStarted: "https://docs.umaproject.org/build-walkthrough/build-process",
  faq: "https://umaproject.org/faq.html",
  vote: "https://vote.umaproject.org/",
};

export const PROJECTS = [{
  icon: "images/projects/polymarket.png",
  name: "Polymarket",
  url: "https://polymarket.com/",
}, {
  icon: "images/projects/across.png",
  name: "Across Protocol",
  url: "https://across.to/",
}, {
  icon: "images/projects/boba.svg",
  name: "Boba Network",
  url: "https://boba.network/",
}, {
  icon: "images/projects/sherlock.png",
  name: "Sherlock",
  url: "https://www.sherlock.xyz/",
}, {
  icon: "images/projects/bankless.png",
  name: "Bankless DAO",
  url: "https://www.bankless.community/",
}, {
  icon: "images/projects/shapeshift.svg",
  name: "Shapeshift",
  url: "https://shapeshift.com/",
}, {
  icon: "images/projects/barnbridge.png",
  name: "BarnBridge",
  url: "https://barnbridge.com/",
}, {
  icon: "images/projects/perp.png",
  name: "Perpetual Protocol",
  url: "https://perp.com/",
}, {
  icon: "images/projects/opendao.png",
  name: "Open DAO",
  url: "https://opendao.io/",
}, {
  icon: "images/projects/badger.png",
  name: "Badger DAO",
  url: "https://badger.com/",
}, {
  icon: "images/projects/sushiswap.png",
  name: "Sushi Swap",
  url: "https://www.sushi.com/",
}, {
  icon: "images/projects/balancer.png",
  name: "Balancer",
  url: "https://balancer.fi/",
}, {
  icon: "images/projects/hats.webp",
  name: "Hats Finance",
  url: "https://hats.finance/",
}, {
  icon: "images/projects/aragon.png",
  name: "Aragon",
  url: "https://aragon.org/",
}, {
  icon: "images/projects/dfx.png",
  name: "DFX",
  url: "https://dfx.finance/",
}]

export const COMMUNITY_LINKS = [
  {
    name: "Medium",
    href: "https://medium.com/uma-project",
    iconSrc: "/images/social//medium.svg",
    alt: "medium",
  },
  {
    name: "Github",
    href: "https://github.com/umaprotocol",
    iconSrc: "/images/social//github.svg",
    alt: "github",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/umaprotocol",
    iconSrc: "/images/social//twitter.svg",
    alt: "twitter",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/jsb9XQJ",
    iconSrc: "/images/social//discord.svg",
    alt: "discord",
  },
  {
    name: "Discourse",
    href: "https://discourse.umaproject.org/",
    iconSrc: "/images/social//discourse.svg",
    alt: "discourse",
  },
];
