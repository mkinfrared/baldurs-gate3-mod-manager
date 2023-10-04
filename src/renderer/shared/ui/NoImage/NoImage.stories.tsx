import { Meta, StoryObj } from "@storybook/react";

import { NoImage } from "./NoImage";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/NoImage",
  component: NoImage,
  tags: ["autodocs"],
} satisfies Meta<typeof NoImage>;

const Default: Story = {
  render: (args) => (
    <div className={css.Story}>
      <div>
        <NoImage {...args} />
      </div>
      <div>
        <NoImage {...args} />
      </div>
      <div>
        <NoImage {...args} />
      </div>
      <div>
        <NoImage {...args} />
      </div>
      <div>
        <NoImage {...args} />
      </div>
    </div>
  ),
};

export { Default };

export default meta;
