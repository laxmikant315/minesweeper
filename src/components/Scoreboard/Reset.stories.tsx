// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Reset } from "./Reset";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Reset> = {
  component: Reset,
};

export default meta;
type Story = StoryObj<typeof Reset>;

export const FirstStory: Story = {
  args: {},
};
