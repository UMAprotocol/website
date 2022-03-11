import { useMemo } from "react";
import { hooks, constants } from "../../utils";
import { QUERIES } from "../../utils/constants";

const { LINKS, PROJECTS } = constants;

export const useHomePage = () => {
  const { useMediaQuery } = hooks;
  const isTablet = useMediaQuery(QUERIES.laptopAndUp);
  const projects = useMemo(() => isTablet ? PROJECTS : PROJECTS.slice(0, 6), [isTablet]);

  return {
    projects,
  }
}
