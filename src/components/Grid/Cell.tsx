import React, { FC } from "react";
import styled from "@emotion/styled";
export const Cell: FC = () => {
  return <></>;
};

interface ClosedFrameProps {
  mouseDown?: boolean;
}

export const ClosedFrame = styled.div<ClosedFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vh;
  height: 1.8vh;
  color: transparent;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${({ mouseDown = false }) =>
    mouseDown ? "transparent" : "white #9e9e9e #9e9e9e white"};
  &:hover {
    filter: brightness(1.1);
  }
`;
