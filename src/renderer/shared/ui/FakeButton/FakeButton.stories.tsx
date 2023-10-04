import { Meta, StoryObj } from "@storybook/react";

import FakeButton from "./FakeButton";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/FakeButton",
  component: FakeButton,
  tags: ["autodocs"],
} satisfies Meta<typeof FakeButton>;

const Default: Story = {
  render: (args) => (
    <div className={css.Story}>
      <FakeButton {...args} />
    </div>
  ),
};

export { Default };

export default meta;
