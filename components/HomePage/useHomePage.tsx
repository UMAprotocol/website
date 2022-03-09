import { hooks, constants } from "../../utils";
import { QUERIES } from "../../utils/constants";

export const useHomePage = () => {
  const { useMediaQuery } = hooks;
  const isTablet = useMediaQuery(QUERIES.laptopAndUp);

  return {
    isTablet,
  }
}
