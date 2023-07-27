import type { Meta, StoryObj } from "@storybook/react";
import { Cell } from "./Cell";

const meta: Meta<typeof Cell> = {
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const FirstStory: Story = {
  args: {},
};
