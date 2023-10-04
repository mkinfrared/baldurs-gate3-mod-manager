import { Meta, StoryObj } from "@storybook/react";

import { AppNavBar } from "./AppNavBar";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/AppNavBar",
  component: AppNavBar,
  tags: ["autodocs"],
} satisfies Meta<typeof AppNavBar>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <AppNavBar {...args} />
    </div>
  ),
};

export { Default };

export default meta;
