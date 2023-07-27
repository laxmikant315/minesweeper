// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Top } from "./Top";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Top> = {
  component: Top,
};

export default meta;
type Story = StoryObj<typeof Top>;

export const FirstStory: Story = {
  args: {
    children: "Top Story",
    feature: "flag",
    firstAction: "ctrl",
    secondAction: "click",
  },
};
