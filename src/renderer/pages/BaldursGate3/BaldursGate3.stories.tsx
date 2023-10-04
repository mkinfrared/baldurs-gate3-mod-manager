import { Meta, StoryObj } from "@storybook/react";

import { BaldursGate3 } from "./BaldursGate3";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/BaldursGate3",
  component: BaldursGate3,
  tags: ["autodocs"],
} satisfies Meta<typeof BaldursGate3>;

const Default: Story = {
  args: {},
  render: (args) => (
    <div className={css.Story}>
      <BaldursGate3 {...args} />
    </div>
  ),
};

export { Default };

export default meta;
