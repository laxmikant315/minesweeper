// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { GameName } from "./GameName";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof GameName> = {
  component: GameName,
};

export default meta;
type Story = StoryObj<typeof GameName>;

export const FirstStory: Story = {
  args: {
    children: "Laxmikant Game",
  },
};

export const SecondStory: Story = {
  args: {
    children: "Sandesh Game",
  },
};
