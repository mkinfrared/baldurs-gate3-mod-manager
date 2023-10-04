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
    modVersion: "v3.4.5",
    modName: "Marklar",
    modFilePath: "/foo/bar",
    currentModVersion: "v3.4.4",
  },
  render: (args) => (
    <div className={css.Story}>
      <ModFileRow {...args} />
    </div>
  ),
};

export { Default };

export default meta;
