import { KpiOptionIcon, SuccessTokenIcon } from "../Icons";
import { constants } from "../../utils";

const { LINKS } = constants;

export type Product = {
  categoryName: string,
  categoryIcon: React.ReactElement,
  name: string,
  features: string[],
  href: string,
}

export const PRODUCTS_LIST: Product[] = [{
  categoryName: "KPI Options",
  categoryIcon: <KpiOptionIcon />,
  name: "Incentive Tokens",
  features: ["Airdrops that build armies", "Incentive-aligned liquidity mining", "Only pay if you win"],
  href: LINKS.kpiOptions,
}, {
  categoryName: "Success Tokens",
  categoryIcon: <SuccessTokenIcon />,
  name: "DAO Fundraising",
  features: ["DeFi native fundraising", "Community approved, no discounted sales", "Aligned strategic partnership"],
  href: LINKS.successTokens,
}]
