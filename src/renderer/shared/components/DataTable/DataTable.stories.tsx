import { Meta, StoryObj } from "@storybook/react";

import DataTable from "./DataTable";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

const Default: Story = {
  args: {
    data: [],
    columns: [],
  },
  render: (args) => (
    <div className={css.Story}>
      <DataTable {...args} />
    </div>
  ),
};

export { Default };

export default meta;
