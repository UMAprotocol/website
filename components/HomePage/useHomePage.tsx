import { useMemo } from "react";
import { hooks } from "../../utils";
import { QUERIES } from "../../utils/constants";
import PROJECTS from "../../projects.json";

export const useHomePage = () => {
  const { useMediaQuery } = hooks;
  const isTablet = useMediaQuery(QUERIES.laptopAndUp);
  const projects = useMemo(() => isTablet ? PROJECTS : PROJECTS.slice(0, 6), [isTablet]);

  return {
    projects,
  }
}
