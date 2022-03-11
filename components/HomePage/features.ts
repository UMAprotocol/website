export type UmaFeature = {
  title: string,
  description: string,
  icon: string,
}

export const UMA_FEATURES: UmaFeature[] = [{
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
