import { Meta, StoryObj } from "@storybook/react";

import { ModFileRow } from "./ModFileRow";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "ENTITIES/ModFileRow",
  component: ModFileRow,
  tags: ["autodocs"],
} satisfies Meta<typeof ModFileRow>;

const Default: Story = {
  args: {
    file: null as any,
  },
  render: (args) => (
    <div className={css.Story}>
      <ModFileRow {...args} />
    </div>
  ),
};

export { Default };

export default meta;
