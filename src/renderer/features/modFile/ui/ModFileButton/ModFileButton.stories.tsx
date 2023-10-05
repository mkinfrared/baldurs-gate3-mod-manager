import { Meta, StoryObj } from "@storybook/react";

import { ModFileButton } from "./ModFileButton";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/ModFileButton",
  component: ModFileButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ModFileButton>;

const Default: Story = {
  args: {
    currentModVersion: "v3.4.0",
    modVersion: "v4.0.0",
    modPath: "/foo/bar",
  },
  render: (args) => (
    <div className={css.Story}>
      <ModFileButton {...args} />
    </div>
  ),
};

export { Default };

export default meta;
