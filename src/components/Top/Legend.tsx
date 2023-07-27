import React, { FC } from "react";
import styled from "@emotion/styled";

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const Key = styled.span`
  color: #ec433c;
`;

const Click = styled.span`
  color: #2a48ec;
`;

const FlagComboParent = styled.code`
  background-color: #e3e3e3;
`;

export interface LegendProps {
  feature: string;
  firstAction: string;
  secondAction: string;
}
const Legend: FC<LegendProps> = ({ feature, firstAction, secondAction }) => {
  return (
    <Parent>
      <strong>{feature}:</strong>
      <FlagComboParent>
        <Key>{firstAction}</Key>+<Click>{secondAction}</Click>
      </FlagComboParent>
    </Parent>
  );
};

export default Legend;
