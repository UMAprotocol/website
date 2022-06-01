import React, { useRef } from "react";
import { useReveal } from "../../utils/hooks";
import { DiagonalArrowIcon } from "../Icons";
import * as UI from "./styles";

export const OutcomeBanner: React.FC<{ className?: string }> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { visible } = useReveal(ref);

  return (
    <UI.Container className={className} visible={visible} ref={ref}>
      <UI.Content>
        <UI.TextContent>
          <UI.Logo>
            <UI.LogoIcon />
            <span>Outcome</span>
          </UI.Logo>
          <UI.Title>
            KPI options and Success tokens are now part of Outcome.Finance.
          </UI.Title>
          <UI.OutcomeLink href="https://outcome.finance" target="_blank">
            <span>OUTCOME FINANCE</span>
            <DiagonalArrowIcon width={12} height={12} />
          </UI.OutcomeLink>
        </UI.TextContent>
        <UI.MobileBackground />
        <UI.BackgroundLeft />
        <UI.BackgroundRight />
      </UI.Content>
    </UI.Container>
  );
};
