import { Meta, StoryObj } from "@storybook/react";

import Exhibition from "renderer/shared/assets/icons/exhibition.svg";
import Text from "renderer/shared/ui/Text";

import css from "./Story.module.scss";
import ToggleButton from "./ToggleButton";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "UI/ToggleButton",
  component: ToggleButton,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} satisfies Meta<typeof ToggleButton>;

const Default: Story = {
  args: {
    children: (
      <>
        <Exhibition />
        <Text>Text</Text>
      </>
    ),
  },
  render: (args) => (
    <div className={css.Story}>
      <div>
        <ToggleButton {...args} />
      </div>
      <div>
        <ToggleButton>
          <Exhibition />
          <Text>Text</Text>
        </ToggleButton>
      </div>
    </div>
  ),
};

export { Default };

export default meta;
