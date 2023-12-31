import styled from "@emotion/styled";
import React, { FC, useState } from "react";

interface ResetProps {
  onReset: () => void;
}
export const Reset: FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);
  return (
    <Button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onClick={onReset}
    >
      {mouseDown ? "😯" : "🙂"}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.1vw;
  height: 100%;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;
