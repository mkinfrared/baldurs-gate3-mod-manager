import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

const Default: Story = {
  render: (args) => (
    <div className={css.Story}>
      <Heading {...args}>Example</Heading>
      <div className={css.variants}>
        <Heading variant="h1">Variants</Heading>
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>
        <Heading variant="h5">Heading 5</Heading>
        <Heading variant="h6">Heading 6</Heading>
      </div>
    </div>
  ),
};

export { Default };

export default meta;
