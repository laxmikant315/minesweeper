// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Level } from "./Level";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Level> = {
  component: Level,
};

export default meta;
type Story = StoryObj<typeof Level>;

export const FirstStory: Story = {
  args: {
    children: ["beginner", "intermediate", "expert"],
  },
};
