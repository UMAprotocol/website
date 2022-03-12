import { css, Global } from "@emotion/react";
import { reset } from "./reset";
import { typography } from "./typography";
import { variables } from "./variables";

const globalStyles = css`
  ${reset};
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: "Halyard Display", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  html,
  body,
  #__next {
    height: 100%;
    color: var(--gray-700);
    scroll-behavior: smooth;
  }
  #__next {
    isolation: isolate;
  }
  main {
    overflow: hidden;
  }
  ${typography}
  ${variables}
`;

export const GlobalStyles = () => {
  return (
    <Global styles={globalStyles} />
  );
}
