import { Meta, StoryObj } from "@storybook/react";

import css from "./Story.module.scss";
import { ToggleActiveModButton } from "./ToggleActiveModButton";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/ToggleActiveModButton",
  component: ToggleActiveModButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleActiveModButton>;

const Default: Story = {
  args: {
    modUUID: "uuid",
    isActive: true,
  },
  render: (args) => (
    <div className={css.Story}>
      <ToggleActiveModButton {...args} />
    </div>
  ),
};

export { Default };

export default meta;
