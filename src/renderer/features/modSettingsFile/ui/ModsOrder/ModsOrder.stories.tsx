import { Meta, StoryObj } from "@storybook/react";

import { ModsOrder } from "./ModsOrder";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/ModsOrder",
  component: ModsOrder,
  tags: ["autodocs"],
} satisfies Meta<typeof ModsOrder>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <ModsOrder {...args} />
    </div>
  ),
};

export { Default };

export default meta;
