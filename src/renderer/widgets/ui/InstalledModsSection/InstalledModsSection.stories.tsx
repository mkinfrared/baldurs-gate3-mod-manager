import { Meta, StoryObj } from "@storybook/react";

import { InstalledModsSection } from "./InstalledModsSection";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/InstalledModsSection",
  component: InstalledModsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof InstalledModsSection>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <InstalledModsSection {...args} />
    </div>
  ),
};

export { Default };

export default meta;
