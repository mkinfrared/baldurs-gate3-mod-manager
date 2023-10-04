import { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

const Default: Story = {
  args: {
    children: "This is a link",
    href: "https://google.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  render: (args) => (
    <div className={css.Story}>
      <Link {...args} />
    </div>
  ),
};

const ButtonLink: Story = {
  args: {
    children: "This is a link",
    href: "https://google.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  render: (args) => (
    <div className={css.Story}>
      <Link {...args} type="button" />
    </div>
  ),
};

export { Default, ButtonLink };

export default meta;
