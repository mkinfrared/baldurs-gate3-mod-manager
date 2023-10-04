/* eslint-disable react-hooks/rules-of-hooks */
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";

import { Checkbox } from "./Checkbox";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

const Uncontrolled: Story = {
  args: {
    onChange: action("change"),
    label: "marklar",
  },
  render: (args) => (
    <div className={css.Story}>
      <Checkbox {...args} />
    </div>
  ),
};

const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { target } = event;

      setChecked(target.checked);
    };

    return (
      <div className={css.Story}>
        <Checkbox name="example" onChange={handleChange} checked={checked} />
      </div>
    );
  },
};

export { Uncontrolled, Controlled };

export default meta;
