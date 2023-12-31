import { render, screen, fireEvent } from "@testing-library/react";

import React, { FC } from "react";

import { Reset } from "./Reset";
describe("Reset button test", () => {
  const ResetWithDummyHandlerOnReset: FC = () => <Reset onReset={() => {}} />;
  it("Should render elements with default state", () => {
    render(<ResetWithDummyHandlerOnReset />);
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
  it("onReset handler should be called", () => {
    const onReset = jest.fn();
    render(<Reset onReset={onReset} />);
    fireEvent.click(screen.getByText("🙂"));
    expect(onReset).toBeCalled();
  });
  it("Should change state when onMouseDown and onMouseUp events happened", () => {
    render(<ResetWithDummyHandlerOnReset />);
    fireEvent.mouseDown(screen.getByText("🙂"));
    expect(screen.getByText("😯")).toBeInTheDocument();
    fireEvent.mouseUp(screen.getByText("😯"));
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
  it("Should change state when onMouseDown and onMouseLeave events happened", () => {
    render(<ResetWithDummyHandlerOnReset />);
    fireEvent.mouseDown(screen.getByText("🙂"));
    expect(screen.getByText("😯")).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByText("😯"));
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
});
