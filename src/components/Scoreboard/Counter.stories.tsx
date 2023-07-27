// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from "./Counter";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const FirstStory: Story = {
  args: {
    children: "010",
  },
};
