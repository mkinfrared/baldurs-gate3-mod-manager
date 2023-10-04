import { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

const Default: Story = {
  render: (args) => (
    <div className={css.Story}>
      <MenuItem {...args} />
    </div>
  ),
};

export { Default };

export default meta;
