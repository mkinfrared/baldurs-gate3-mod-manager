import { Meta, StoryObj } from "@storybook/react";

import { ModFileList } from "./ModFileList";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "ENTITIES/ModFileList",
  component: ModFileList,
  tags: ["autodocs"],
} satisfies Meta<typeof ModFileList>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <ModFileList {...args} />
    </div>
  ),
};

export { Default };

export default meta;
