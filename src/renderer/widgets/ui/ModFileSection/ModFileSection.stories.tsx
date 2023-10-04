import { Meta, StoryObj } from "@storybook/react";

import { ModFileSection } from "./ModFileSection";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "WIDGETS/ModFileSection",
  component: ModFileSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ModFileSection>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <ModFileSection {...args} />
    </div>
  ),
};

export { Default };

export default meta;
