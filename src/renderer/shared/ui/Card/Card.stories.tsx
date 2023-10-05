import { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <Card {...args} />
    </div>
  ),
};

export { Default };

export default meta;
