import React from "react";
// import App from "./App";
import { Top } from "./components/Top";
import { Scoreboard } from "./components/Scoreboard";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <>
    <Top feature="flag" firstAction="ctrl" secondAction="click">
      Top Story
    </Top>
    <Scoreboard
      time="000"
      levels={["beginner", "intermediate", "expert"]}
      defaultLevel="intermediate"
      bombs="010"
      onChangeLevel={() => {}}
      onReset={() => {}}
    />
  </>
);
