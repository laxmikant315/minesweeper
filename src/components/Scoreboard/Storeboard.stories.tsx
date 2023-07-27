import type { Meta, StoryObj } from "@storybook/react";

import { Scoreboard } from "./Scoreboard";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Scoreboard> = {
  component: Scoreboard,
};

export default meta;
type Story = StoryObj<typeof Scoreboard>;

export const FirstStory: Story = {
  args: {
    time: "000",
    levels: ["beginner", "intermediate", "expert"],
    defaultLevel: "intermediate",
    bombs: "010",
  },
};
