import { Meta, StoryObj } from "@storybook/react";

import { EmptyList } from "./EmptyList";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/EmptyList",
  component: EmptyList,
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyList>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <EmptyList {...args} />
    </div>
  ),
};

export { Default };

export default meta;
