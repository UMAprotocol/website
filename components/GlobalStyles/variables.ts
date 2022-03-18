import { css } from "@emotion/react";
import { constants } from "../../utils";

const { COLORS } = constants;

export const variables = css`
  :root {
    /* COLORS */
    --gray-700: hsl(${COLORS.gray[700]});
    --gray-600: hsl(${COLORS.gray[600]});
    --gray-500: hsl(${COLORS.gray[500]});
    --gray-400: hsl(${COLORS.gray[400]});
    --gray-300: hsl(${COLORS.gray[300]});
    --gray-100: hsl(${COLORS.gray[100]});
    --white: hsl(${COLORS.white});
    --black: hsl(${COLORS.black});
    --primary: hsl(${COLORS.primary[500]});
    --primary-dark: hsl(${COLORS.primary[700]});
    --green: hsl(${COLORS.green});

    --primary-transparent: hsla(${COLORS.primary} / 0.4);
    --gray-transparent-dark: hsla(${COLORS.black} / 0.75);

    /* Silence the warning about missing Reach Dialog styles */
    --reach-dialog: 1;
  }
`;
