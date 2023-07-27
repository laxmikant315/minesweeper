import styled from "@emotion/styled";
import React, { FC } from "react";
import { GameName, GameNameProps } from "./GameName";
import Legend, { LegendProps } from "./Legend";

// export interface GameNameProps {
//   children: string;
// }

export const Header = styled.header`
  text-align: center;
  position: relation;
  display: inline-block;
`;
type TopProps = GameNameProps & LegendProps;

export const Top: FC<TopProps> = ({ children, ...legendProps }) => {
  return (
    <Header>
      <GameName>{children}</GameName>
      <Legend {...legendProps} />
    </Header>
  );
};
