import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import Bell from "renderer/shared/assets/icons/bell.svg";
import Edit from "renderer/shared/assets/icons/edit.svg";
import Share from "renderer/shared/assets/icons/share.svg";
import Heading from "renderer/shared/ui/Heading";
import Text from "renderer/shared/ui/Text";

import Button from "./Button";
import css from "./Story.module.scss";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

const Default: Story = {
  args: {
    disabled: false,
    variant: "contained",
    onClick: action("Click"),
    color: "primary",
  },
  render: (args) => (
    <div className={css.Story}>
      <section>
        <Heading className={css.title}>Default</Heading>
        <div className={css.buttonBlock}>
          <Button {...args}>
            <Text>Button</Text>
          </Button>
        </div>
      </section>
      <section>
        <Heading className={css.title}>Button type</Heading>
        <div className={css.buttonBlock}>
          <Button {...args} type="submit">
            <Text>Submit</Text>
          </Button>
          <Button {...args} type="reset">
            <Text>Reset</Text>
          </Button>
        </div>
      </section>
      <section>
        <Heading className={css.title}>Button variants</Heading>
        <Heading className={css.subtitle} variant="h4">
          <Text>Contained</Text>
        </Heading>
        <div className={css.buttonBlock}>
          <Button {...args} variant="contained">
            <Text>Contained</Text>
          </Button>
          <Button {...args} variant="contained">
            <Text>Contained</Text>
          </Button>
          <Button {...args} variant="contained">
            <Text>Contained</Text>
          </Button>
        </div>
        <div className={css.buttonBlock}>
          <Button {...args} variant="contained">
            <Share />
            <p>Contained</p>
          </Button>
          <Button {...args} variant="contained">
            <Edit />
            <Text>Contained</Text>
          </Button>
          <Button {...args} variant="contained">
            <Bell />
            <Text>Contained</Text>
          </Button>
        </div>
        <Heading className={css.subtitle} variant="h4">
          Transparent
        </Heading>
        <div className={css.buttonBlock}>
          <Button {...args} variant="transparent">
            <Text>Transparent</Text>
          </Button>
          <Button {...args} variant="transparent">
            <Text>Transparent</Text>
          </Button>
          <Button {...args} variant="transparent">
            <Text>Transparent</Text>
          </Button>
        </div>
        <div className={css.buttonBlock}>
          <Button {...args} variant="transparent">
            <Share />
            <Text>Transparent</Text>
          </Button>
          <Button {...args} variant="transparent">
            <Edit />
            <p>Transparent</p>
          </Button>
          <Button {...args} variant="transparent">
            <Bell />
            <Text>Transparent</Text>
          </Button>
        </div>
      </section>
      <section>
        <Heading className={css.title}>Button colors</Heading>
        <div className={css.buttonBlock}>
          <Button {...args} variant="contained" color="primary">
            <Text>Primary</Text>
          </Button>
          <Button {...args} variant="contained" color="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button {...args} variant="contained" color="success">
            <Text>Success</Text>
          </Button>
          <Button {...args} variant="contained" color="error">
            <Text>Error</Text>
          </Button>
        </div>
      </section>
      <section>
        <Heading className={css.title}>Button List</Heading>
        <div className={css.buttonBlock}>
          <Button variant="contained">
            <Text>Lorem</Text>
          </Button>
          <Button variant="transparent">
            <Text>Lorem Ipsum</Text>
          </Button>
          <Button variant="transparent">
            <Text>Lorem Ipsum Dolor</Text>
          </Button>
        </div>
      </section>
      <section>
        <Heading className={css.title}>Button List with the same width</Heading>
        <div className={css.sameWidthList}>
          <Button variant="contained">
            <Text>Lorem</Text>
          </Button>
          <Button variant="transparent">
            <Text>Lorem Ipsum</Text>
          </Button>
          <Button variant="transparent">
            <Text>Lorem Ipsum Dolor</Text>
          </Button>
        </div>
      </section>
    </div>
  ),
};

const WithIcon: Story = {
  args: {
    disabled: false,
    variant: "contained",
    onClick: action("Click"),
    color: "primary",
  },
  render: (args) => (
    <div className={css.Story}>
      <div className={css.buttonBlock}>
        <Button {...args}>
          <Edit />
        </Button>
        <Button {...args}>
          <Share />
        </Button>
      </div>
    </div>
  ),
};

const WithIconAndText: Story = {
  args: {
    disabled: false,
    variant: "contained",
    onClick: action("Click"),
    color: "primary",
  },
  render: (args) => (
    <div className={css.Story}>
      <div className={css.buttonBlock}>
        <Button {...args}>
          <Edit />
          <Text>Lorem</Text>
        </Button>
        <Button {...args}>
          <Text>Lorem</Text>
          <Edit />
        </Button>
        <Button {...args}>
          <Edit />
          <Text>Lorem</Text>
          <Edit />
        </Button>
        <Button {...args}>
          <Edit />
          <Text>🙈 Lorem ipsum</Text>
        </Button>
        <Button {...args}>
          <Edit />
          <Text>🚀 Lorem ipsum</Text>
          <Edit />
        </Button>
      </div>
    </div>
  ),
};

export { Default, WithIcon, WithIconAndText };

export default meta;
