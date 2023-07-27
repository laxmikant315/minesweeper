// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Legend from "./Legend";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Legend> = {
  component: Legend,
};

export default meta;
type Story = StoryObj<typeof Legend>;

export const FirstStory: Story = {
  args: {
    feature: "Flag",
    firstAction: "Ctrl",
    secondAction: "Click",
    //👇 The args you need here will depend on your component
  },
};
