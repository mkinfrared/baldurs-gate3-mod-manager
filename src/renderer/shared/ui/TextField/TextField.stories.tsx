/* eslint-disable react-hooks/rules-of-hooks */
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Dollar from "renderer/shared/assets/icons/dollar-sign.svg";
import UK from "renderer/shared/assets/icons/flags/uk.svg";
import Gear from "renderer/shared/assets/icons/gear.svg";

import css from "./Story.module.scss";
import TextField from "./TextField";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

const Uncontrolled: Story = {
  render: (args) => (
    <div className={css.Story}>
      <div>
        <TextField {...args} />
      </div>
    </div>
  ),
};

const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className={css.Story}>
        <div>
          <TextField
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
      </div>
    );
  },
};

const MultipleFields: Story = {
  render: (args) => (
    <div className={css.Story}>
      <div>
        <TextField {...args} />
        <TextField {...args} />
        <TextField {...args} />
        <TextField {...args} />
      </div>
    </div>
  ),
};

const ExampleForm: Story = {
  render: () => (
    <div className={css.Story}>
      <div>
        <TextField name="username" label="Username" />
        <TextField
          name="password"
          label="Password"
          type="password"
          // suffix={<Eye />}
        />
      </div>
    </div>
  ),
};

const WithError: Story = { ...Uncontrolled };
const WithPrefix: Story = { ...Uncontrolled };
const WithSuffix: Story = { ...Uncontrolled };
const WithPrefixSuffix: Story = { ...Uncontrolled };

Uncontrolled.args = {
  disabled: false,
  error: "",
  label: "Label",
};

WithError.args = {
  value: "marklar",
  onChange: action("change"),
  error:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. asdf sadfl kjasdf agj asldfkj asdfjlk",
};

WithPrefix.args = {
  value: "marklar",
  onChange: action("change"),
  prefix: <UK />,
};

WithSuffix.args = {
  value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  onChange: action("change"),
  suffix: <Gear />,
  onSuffixClick: action("suffix"),
};

WithPrefixSuffix.args = {
  value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  onChange: action("change"),
  suffix: <Gear />,
  prefix: <Dollar />,
};

export {
  Uncontrolled,
  Controlled,
  WithError,
  WithPrefix,
  WithSuffix,
  WithPrefixSuffix,
  MultipleFields,
  ExampleForm,
};

export default meta;
