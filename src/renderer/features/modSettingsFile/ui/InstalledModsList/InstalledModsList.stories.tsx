import { Meta, StoryObj } from "@storybook/react";

import { InstalledModsList } from "./InstalledModsList";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "ENTITIES/modSettingsFile/InstalledModsList",
  component: InstalledModsList,
  tags: ["autodocs"],
} satisfies Meta<typeof InstalledModsList>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <InstalledModsList {...args} />
    </div>
  ),
};

export { Default };

export default meta;
