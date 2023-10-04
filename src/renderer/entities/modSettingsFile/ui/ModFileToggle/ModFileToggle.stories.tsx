import { Meta, StoryObj } from "@storybook/react";

import { ModFileToggle } from "./ModFileToggle";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/ModFileToggle",
  component: ModFileToggle,
  tags: ["autodocs"],
} satisfies Meta<typeof ModFileToggle>;

const Default: Story = {
  args: {
    isActive: true,
    modUUID: "",
    modName: "",
  },
  render: (args) => (
    <div className={css.Story}>
      <ModFileToggle {...args} />
    </div>
  ),
};

export { Default };

export default meta;
