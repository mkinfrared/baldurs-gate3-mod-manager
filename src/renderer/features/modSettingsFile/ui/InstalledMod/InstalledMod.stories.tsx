import { Meta, StoryObj } from "@storybook/react";

import { InstalledMod } from "./InstalledMod";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/InstalledMod",
  component: InstalledMod,
  tags: ["autodocs"],
} satisfies Meta<typeof InstalledMod>;

const Default: Story = {
  args: {
    mod: {
      folder: "Marklar",
      isActive: false,
      md5: "md5",
      name: "foobar",
      uuid: "uuid",
      version: "v3.4.7",
    },
  },
  render: (args) => (
    <div className={css.Story}>
      <InstalledMod {...args} />
    </div>
  ),
};

export { Default };

export default meta;
