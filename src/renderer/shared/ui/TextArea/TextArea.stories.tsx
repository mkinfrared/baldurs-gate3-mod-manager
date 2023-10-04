import { Meta, StoryObj } from "@storybook/react";

import css from "./Story.module.scss";
import TextArea from "./TextArea";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <TextArea {...args} />
    </div>
  ),
};

export { Default };

export default meta;
