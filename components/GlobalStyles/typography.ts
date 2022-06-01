import { css } from "@emotion/react";

export const typography = css`
  @font-face {
    font-family: "Halyard Display";
    src: url("/fonts/HalyardDisplay-Regular.woff2") format("woff2"),
      url("/fonts/HalyardDisplay-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Halyard Display";
    src: url("/fonts/HalyardDisplayMedium-Regular.woff2") format("woff2"),
      url("/fonts/HalyardDisplayMedium-Regular.woff") format("woff");

    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Halyard Display";
    src: url("/fonts/HalyardDisplaySemiBold-Regular.woff2") format("woff2"),
      url("/fonts/HalyardDisplaySemiBold-Regular.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Halyard Display";
    src: url("/fonts/HalyardDisplay-Bold.woff2") format("woff2"),
      url("/fonts/HalyardDisplay-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Larken';
    src: url('/fonts/Larken-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;
